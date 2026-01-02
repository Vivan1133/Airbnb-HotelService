import { Hotel } from "../db/models/Hotel"
import { NotFoundError } from "../utils/errors/app.error";
import { BaseRepository } from "./base-repository";


export class HotelRepository extends BaseRepository<Hotel> {
    constructor() {
        super(Hotel);
    }

    async softDelete(id : number) {
        const hotel = await Hotel.findByPk(id);
        if(!hotel) {
            throw new NotFoundError(`Hotel with id: ${id} not found`);
        }
        hotel.deletedAt = new Date();
        await hotel.save();
    }
    

}