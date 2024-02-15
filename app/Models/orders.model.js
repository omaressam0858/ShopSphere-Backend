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
        },
        status: {
            type: DataTypes.SMALLINT,  // 0: Pending , 1:Paid ,  2: Delivered , 3: Done , 4: Canceled
            defaultValue: 0
        }

    }, {
        sequelize,
        modelName: 'Order',
    })

    return Order;
};