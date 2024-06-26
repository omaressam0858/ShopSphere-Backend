import { User } from "../../models/index.js"; 
import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";
import {loginValidation} from "../../utils/validations/authentication.validation.js";

const loginController = async (req, res, next) => {
    try {
        const { error } = loginValidation.validate(req.body);
        if (error) return res.status(400).json({message:error.message});
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user) return res.status(400).json({message:"Email or password is wrong"});
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json({message:"Email or password is wrong"});

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET , { expiresIn: '1d' });
        res.status(200).json({ token: token, user: { id: user.id,firstName: user.firstName,lastName: user.lastName ,email: user.email, isAdmin: user.isAdmin }});
    }
    catch (err) {
        next(err);
    }
}

export default loginController;