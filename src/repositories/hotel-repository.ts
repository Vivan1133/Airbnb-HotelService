import { createHotelDto } from "../dtos/createHotelDto";
import { Hotel } from "../db/models/Hotel"
import { updateHotelDto } from "../dtos/updateHotelDto";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotelRepo(hotelData: createHotelDto) {
    const response = await Hotel.create(hotelData);
    return response;
}

export async function deleteHotelRepo(id: number) {
    const hotel = await Hotel.findByPk(id);
    if(!hotel) {
        throw new NotFoundError(`hotel with id: ${id} not found`);
    }
    Hotel.destroy({
        where: {
            id
        }
    });
}
export async function updateHotelRepo(updateData: updateHotelDto, id: number) {
    const response = await Hotel.update(updateData, {
        where: {
            id
        }
    });
    return response;
}

export async function getByIdHotelRepo(id: number) {
    const hotel = await Hotel.findByPk(id);
    if(!hotel) {
        throw new NotFoundError(`hotel with id: ${id} not found`);
    }
    return hotel;
}
export async function getAllHotelRepo() {
    const hotels = await Hotel.findAll();
    if(!hotels) {
        throw new NotFoundError(`No hotel found`);
    }
    return hotels;
}

