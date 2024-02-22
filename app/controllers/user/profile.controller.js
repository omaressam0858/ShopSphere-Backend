import {User} from '../../models/index.js';
import { updateValidation } from '../../utils/validations/authentication.validation.js';

const getUserProfile = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.id,{
            attributes: {exclude: ['password']}
        })
        res.status(200).json(user);
    }
    catch (err) {
        next(err);
    }
}

const updateUserProfile = async (req, res, next) => {
    try {
        const {value,error} = updateValidation.validate(req.body);
        if(error){
            return res.status(400).json({message:error.message});
        }
        await req.user.update(value); 
        res.status(200).json({message:"Profile updated successfully"});
    }
    catch (err) {
        next(err);
    }
}

export {getUserProfile,updateUserProfile}