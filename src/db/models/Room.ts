import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "./sequelize";
import { RoomCategory } from "./RoomCategory";
import { Hotel } from "./Hotel";


export class Room extends Model<InferAttributes<Room>, InferCreationAttributes<Room>> {
    declare id : CreationOptional<number>;
    declare hotelID : number;
    declare roomCategoryID : number;
    declare bookingID : number | null;
    declare roomNumber : number;
    declare dateOfAvailability : Date;
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
        references: {
            model: RoomCategory,
            key: 'id'
        }
    },
    bookingID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true
    },
    roomNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dateOfAvailability: {
        type: DataTypes.DATE,
    }
}, { sequelize, tableName: 'Rooms', underscored: true, timestamps: true })