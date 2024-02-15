import { User } from '../../models/index.js';
import { registerValidation } from '../../utils/validations/register.validation.js';

const registerController = async (req, res, next) => {
    try{
        const { error } = registerValidation.validate(req.body);
        if (error) return res.status(400).json({message:error.message});
        
        const user = await User.create(req.body);
        return res.status(200).json(user)
    }catch(err){
        if(err.name === 'SequelizeUniqueConstraintError'){
            return res.status(400).json({message: 'Email already exists'})
        }
        next(err)
    }
}

export default registerController 