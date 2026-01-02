import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize"
import { Hotel } from "./Hotel";
import { sequelize } from "./sequelize"

enum Category {
    'BASIC',
    'STANDARD',
    'PREMIUM'
}

export class RoomCategory extends Model<InferAttributes<RoomCategory>, InferCreationAttributes<RoomCategory>> {
    declare id : CreationOptional<number>;
    declare category : Category;
    declare price : number;
    declare hotelID : number;
    declare roomLeft : number;
    declare deletedAt : CreationOptional<Date>;
}

RoomCategory.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category: {
        type: DataTypes.ENUM('BASIC', 'STANDARD', 'PREMIUM'),
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hotelID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Hotel,
            key: 'id'
        }
    },
    roomLeft: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    deletedAt: {
        type: DataTypes.DATE,
        defaultValue: null,
    }
}, { sequelize, tableName: 'RoomCategories', underscored: true, timestamps: true } )