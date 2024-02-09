import bcrypt from 'bcrypt';
export default function UserModel(sequelize, DataTypes, Model) {
    class User extends Model { }

    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: { 
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        lastName: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        phone: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        city: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        building: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        floor: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    }, {
        sequelize,
        modelName: 'User',
    })

    User.beforeCreate(async (user, options) => {
        user.password = await bcrypt.hash(user.password, 10);
    })

    User.beforeUpdate(async (user, options) => {
        if (user.changed('password')) {
            user.password = await bcrypt.hash(user.password, 10);
        }
    })
    return User;
};