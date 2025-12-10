import { createHotelDto } from "../dtos/createHotelDto";
import { updateHotelDto } from "../dtos/updateHotelDto";
import {
    createHotelRepo,
    getAllHotelRepo,
    getByIdHotelRepo,
    updateHotelRepo,
    deleteHotelRepo,
} from "../repositories/hotel-repository";

export async function createHotelService(hotelData: createHotelDto) {
    const response = await createHotelRepo(hotelData);
    return response;
}


export async function getAllHotelService() {
    const response = await getAllHotelRepo();
    return response;
}


export async function getByIdHotelService(id: number) {
    const response = await getByIdHotelRepo(id);
    return response;
}

export async function updateHotelService(updateData: updateHotelDto, id: number) {
    const response = await updateHotelRepo(updateData, id);
    return response;
}

export async function deleteHotelService(id: number) {
    await deleteHotelRepo(id);
}