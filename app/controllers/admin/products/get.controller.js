import { Product } from "../../../models/index.js";

export default async (req, res, next) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    }
    catch (err) {
        next(err);
    }
}