import { RoomCategory } from "../db/models/RoomCategory";
import { NotFoundError } from "../utils/errors/app.error";
import { BaseRepository } from "./base-repository";

export class Roomcategory extends BaseRepository<RoomCategory> {
    constructor() {
        super(RoomCategory);
    }

    async softDelete(id : number) : Promise<void> {
        const roomCategory = await RoomCategory.findByPk(id);
        if(!roomCategory) {
            throw new NotFoundError(`RoomCategory with ID: ${id} NOT FOUND`);
        }
        roomCategory.deletedAt = new Date();
        roomCategory.save();
    }

    async findAllByHotelId(id : number)  {
        const roomCategories = await RoomCategory.findAll({
            where: {
                hotelID: id
            }
        });

        if(!roomCategories || roomCategories.length === 0) {
            throw new NotFoundError(`No room category found with hotel ID: ${id}`);
        }

        return roomCategories;
    }


}