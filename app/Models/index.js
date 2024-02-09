import {DataTypes, Model} from "sequelize";
import sequelize from "../database.js";

import UserModel from "./users.model.js"
import ProductModel from "./products.model.js";
import OrderModel from "./orders.model.js";
import OrderItemModel from "./order_item.model.js";


const User = UserModel(sequelize, DataTypes, Model)
const Product = ProductModel(sequelize, DataTypes, Model)
const Order = OrderModel(sequelize, DataTypes, Model)
const OrderItem = OrderItemModel(sequelize, DataTypes, Model)

User.hasMany(Order)
Order.belongsTo(User)

Product.belongsToMany(Order, {through: OrderItem})
Order.belongsToMany(Product, {through: OrderItem})


sequelize.sync({alter: true}) 

export {
    User,
    Product,
    Order
}