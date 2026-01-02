import { createHotelDto } from "../dtos/createHotelDto";
import { updateHotelDto } from "../dtos/updateHotelDto";
import { HotelRepository } from "../repositories/hotel-repository";

const hotelRepository = new HotelRepository();

export async function createHotelService(hotelData: createHotelDto) {
    const response = await hotelRepository.create(hotelData);
    return response;
}


export async function getAllHotelService() {
    const response = await hotelRepository.getAll();
    return response;
}


export async function getByIdHotelService(id: number) {
    const response = await hotelRepository.getById(id);
    return response;
}

export async function updateHotelService(updateData: updateHotelDto, id: number) {
    const response = await hotelRepository.update(id, updateData);
    return response;
}

export async function deleteHotelService(id: number) {
    await hotelRepository.softDelete(id);
}
