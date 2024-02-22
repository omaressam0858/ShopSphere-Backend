import { Product } from "../../../models/index.js";
import { prodcutValidation } from "../../../utils/validations/product.validation.js";

export default async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const { error , value } = prodcutValidation.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.message });
        }
        await product.update(req.body);
        res.status(200).json({ message: "Product updated successfully" });
    }
    catch (err) {
        next(err);
    }
}