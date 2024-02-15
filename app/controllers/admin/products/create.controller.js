import { Product } from "../../../models/index.js";
import { createProduct } from "../../../utils/validations/create.product.validation.js";

export default async (req, res, next) => {
    try {
        const {error} = createProduct.validate(req.body);
        if (error) 
            return res.status(400).json({message: error.message});
        else if (!req.file) 
            return res.status(400).json({message: "Image is required"});
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            stock: req.body.stock,
            image: req.file.path
        });
        res.status(200).json(product);
    }
    catch (err) {
        next(err);
    }
}