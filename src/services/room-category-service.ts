import { CreateRoomCategoryDto } from "../dtos/createRoomCategoryDto";
import { updateRoomCategoryDto } from "../dtos/updateRoomCategoryDto";
import { HotelRepository } from "../repositories/hotel-repository";
import { Roomcategory } from "../repositories/room-category-repository";
import { NotFoundError } from "../utils/errors/app.error";

const roomCategory = new Roomcategory();
const hotelRepository = new HotelRepository();

export async function createRoomCategoryService(roomCategoryData: CreateRoomCategoryDto) {
    const response = await roomCategory.create(roomCategoryData);
    return response;
}

export async function getAllRoomCategoryService() {
    const response = await roomCategory.getAll();
    return response;
}

export async function getRoomCategoryByIdService(id : number) {
    const response = await roomCategory.getById(id);
    return response;
}

export async function deleteRoomCategoryService(id: number) {
    await roomCategory.softDelete(id);
    return true;
}


export async function getRoomCategoryByHotelIdService(id : number) {
    const hotel = await hotelRepository.getById(id);
    if(!hotel) {
        throw new NotFoundError(`No hotel with ID: ${id} found`);
    }

    const roomCategories = await roomCategory.findAllByHotelId(id);

    return roomCategories;
}


export async function getByIdRoomCategoryService(id: number) {
    const response = await roomCategory.getById(id);
    return response;
}

export async function updateRoomCategoryService(roomCategoryData : updateRoomCategoryDto, id: number) {
    const response = await roomCategory.update(id, roomCategoryData);
    return response;
}

export async function deleteHotelService(id: number) {
    await roomCategory.softDelete(id);
    return true;
}
