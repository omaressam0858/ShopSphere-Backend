export default function OrderModel(sequelize, DataTypes, Model) {
    class Order extends Model { }

    Order.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        payment_id : {
            type: DataTypes.TEXT
        },
        total: {
            type: DataTypes.FLOAT,
            required: true,
            allowNull: false
        }

    }, {
        sequelize,
        modelName: 'Order',
    })

    return Order;
};