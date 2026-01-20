import { GetAvailableRoomsDto } from "../dtos/getAvailableRoomsDto";
import { UpdateBookingIdToRoomsDTO } from "../dtos/updateBookingIdToRoomsDTO";
import { RoomRepo } from "../repositories/room-repository";

const roomRepo = new RoomRepo();

export async function getRoomsByCategoryAndDateRange(roomsData : GetAvailableRoomsDto) {
    const startDate = new Date(roomsData.startDate);
    const endDate = new Date(roomsData.endDate);
    return await roomRepo.findByRoomCategoryIdAndDateRange(roomsData.roomCategoryId, startDate, endDate);
}

export async function updateBookingIdToRooms(data : UpdateBookingIdToRoomsDTO) {
    return await roomRepo.updateBookingIdToRooms(data.bookingId, data.roomIds);
}