import { Order, OrderItem } from '../../Models/index.js';
import { Cart } from '../../utils/validations/cart.checkout.validation.js';
import { cartProducts } from '../../utils/Cart/cart.products.js';

import paymentRequest from '../../utils/Payment/paymentRequest.payment.js'

import sequelize from '../../database.js';

export default async (req, res) => {
    const { error } = Cart.validate(req.body.cart);
    if (error)
        return res.status(400).json({ message: error.message });

        
        const { productWithQuantity, total } = await cartProducts(req.body.cart).catch(err => {
            return res.status(400).json({ message: err.message });
        })

        try {

        const transaction = await sequelize.transaction();
        const order = await Order.create({
            UserId: req.user.id,
            total
        }, { transaction });

        const orderItems = productWithQuantity.map(product => ({
            OrderId: order.id,
            ProductId: product.product.id,
            quantity: product.qt
        }));

        await OrderItem.bulkCreate(orderItems, { transaction });

        await transaction.commit();
        const productsList = productWithQuantity.map(product => {
            return {
                price_data: {
                    currency: 'egp',
                    product_data: {
                        name: product.product.name,
                        images: [product.product.image],
                    },
                    unit_amount: product.product.price * 100,
                },
                quantity: product.qt
            }
        });
        const token = await paymentRequest(productsList, order.id);
        res.json({token});
    } catch (error) {
        console.log(error)
        await transaction.rollback();
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
