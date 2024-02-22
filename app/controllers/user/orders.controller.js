import { Product,Order } from "../../models/index.js";

const getUserOrders = async (req, res, next) => {
    try {
        const products = await Order.findAll({
            where: { UserId: req.user.id },
            include: {
                model: Product,
                attributes: ['id', 'name', 'price', 'image']
            }
        })
        res.status(200).json(products);
    }
    catch (err) {
        next(err);
    }
}

export {getUserOrders};