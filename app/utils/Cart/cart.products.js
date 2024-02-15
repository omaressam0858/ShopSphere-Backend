import {Product} from '../../Models/index.js'
import { Op } from 'sequelize';

export const cartProducts = async (cart) => {
    
    let total = 0;
    try {
        // Fetch all product prices from the database
        const productIds = cart.map(item => item.id);
        const products = await Product.findAll({
            where: {
                id: {
                    [Op.or]: productIds
                }
            }
        });
        const productWithQuantity = []
        cart.forEach(item => {
            const product = products.find(prod => prod.id === item.id);
            if (product) {
                if(product.stock < item.qt)
                    throw new Error('Not enough stock');
                total += item.qt * product.price;
                productWithQuantity.push({
                    product,
                    qt: item.qt
                });
            }
        });

        return {productWithQuantity,total};
    } catch (error) {
        throw error;
    }
}