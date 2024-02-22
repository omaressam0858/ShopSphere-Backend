import {Product} from "../../../models/index.js";

export default async (req, res, next) => {
    try {
        const product = await Product.findOne({ where: { id: req.params.id } });
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    }
    catch (err) {
        next(err);
    }
}