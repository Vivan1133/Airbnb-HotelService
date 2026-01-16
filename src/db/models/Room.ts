import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "./sequelize";
import { RoomCategory } from "./RoomCategory";
import { Hotel } from "./Hotel";


export class Room extends Model<InferAttributes<Room>, InferCreationAttributes<Room>> {
    declare id : CreationOptional<number>;
    declare hotelID : number;
    declare roomCategoryID : number;
    declare bookingID : CreationOptional<number | null>;
    declare price : number;
    declare dateOfAvailability : Date;
    declare deletedAt : CreationOptional<Date | null>;
    declare createdAt : CreationOptional<Date>;
    declare updatedAt : CreationOptional<Date>;
}

Room.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    hotelID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Hotel,
            key: 'id'
        }
    },
    roomCategoryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: RoomCategory,
            key: 'id'
        }
    },
    bookingID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
        defaultValue: null
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dateOfAvailability: {
        type: DataTypes.DATE,
        allowNull: false
    },
    createdAt: {
      type: 'DATE',
      defaultValue: new Date(),
    },
    updatedAt: {
      type: 'DATE',
      defaultValue: new Date(),
    },
    deletedAt : {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },

}, { sequelize, tableName: 'Rooms', underscored: true, timestamps: true })