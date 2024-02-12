import { User } from "../../models/index.js";
import jwt from 'jsonwebtoken';

export default async function verifyMiddleware(req, res, next) {
    try{
        const token = req.headers.authorization;
        if(!token) return res.status(401).json({message: "Unauthorized"});
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decoded.id);
        if(!user) return res.status(404).json({message: "User not found"});
        req.user = user;
        next();
    }catch(err){
        return res.status(401).json({message: "Unauthorized"});
    }
}