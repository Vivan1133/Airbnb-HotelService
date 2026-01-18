import { CreationAttributes } from "sequelize";
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

    
    async findLatestDateByRoomCategoryId(roomCategoryId: number): Promise<Date | null> {
        const result = await this.model.findOne({
            where: {
                roomCategoryID : roomCategoryId,
                deletedAt: null
            },
            attributes: ['dateOfAvailability'],
            order: [['dateOfAvailability', 'DESC']]
        });
        
        return result ? result.dateOfAvailability : null;
    }

    async findLatestDatesForAllCategories(): Promise<Array<{roomCategoryId: number, latestDate: Date}>> {
        const results = await this.model.findAll({
            where: {
                deletedAt: null
            },
            attributes: [
                ['room_category_id', 'roomCategoryID'],
                [this.model.sequelize!.fn('MAX', this.model.sequelize!.col('date_of_avail')), 'latestDate']
            ],
            group: ['room_category_id'],
            raw: true
        });
        
        return results.map((result: any) => ({
            roomCategoryId: result.roomCategoryID,
            latestDate: new Date(result.latestDate)
        }));
    }

}