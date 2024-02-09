export default function OrderItemModel(sequelize, DataTypes, Model) {
    class OrderItem extends Model { }

    OrderItem.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false
        }

    }, {
        sequelize,
        modelName: 'OrderItem',
    })

    return OrderItem;
};