export default function ProductModel(sequelize, DataTypes, Model) {
    class Product extends Model { }

    Product.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            required: true,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT
        },
        description: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false
        }

    }, {
        sequelize,
        modelName: 'Product',
    })

    return Product;
};