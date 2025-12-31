import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "./sequelize";


export class Hotel extends Model< InferAttributes<Hotel>, InferCreationAttributes<Hotel> > {
    declare id: CreationOptional<number>;
    declare name: string;
    declare location: string;
    declare city: string;
    declare state: string;
    declare pincode: number;
    declare rating: CreationOptional<number>;
    declare ratingCount: CreationOptional<number>;
    declare deletedAt: CreationOptional<Date>;
    declare managerId: number;
    declare description: CreationOptional<string>
}

Hotel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    ratingCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    deletedAt: {
        type: DataTypes.DATE,
        defaultValue: null
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pincode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    managerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    }

}, {
    sequelize,
    tableName: "hotels",
    underscored: true
})