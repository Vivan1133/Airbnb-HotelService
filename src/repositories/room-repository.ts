import { CreationAttributes, InferCreationAttributes, Optional } from "sequelize";
import { Room } from "../db/models/Room";
import { BaseRepository } from "./base-repository";

export class RoomRepo extends BaseRepository<Room> {
    constructor() {
        super(Room);
    }

    async findByRoomCategoryIdAndDate(roomCategoryId : number, currentDate : Date) {
        return this.model.findOne({
            where: {
                roomCategoryID: roomCategoryId,
                dateOfAvailability: currentDate,
                deletedAt: null
            }
        })
    }

    async bulkCreate(rooms : CreationAttributes<Room>[]) : Promise<Room[]> {
        return await this.model.bulkCreate(rooms)
    }
}