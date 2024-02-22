import { Order } from "../../../models/index.js";

const getAllOrders = (req,res,next) => {
    try{
        const orders = Order.findAll();
        res.status(200).json(orders);
    }catch(err){
        next(err);
    }
}

const getSingleOrder = (req,res,next) => {
    try{
        const order = Order.findByPk(req.params.id);
        res.status(200).json(order);
    }catch(err){
        next(err);
    }
}

export {getAllOrders,getSingleOrder}