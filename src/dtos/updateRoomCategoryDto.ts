import { Category } from "./createRoomCategoryDto"

export type updateRoomCategoryDto = {
    id?: number,
    category?: Category,
    price?: number,
    hotelID?: number,
    roomLeft?: number,
    deletedAt?: Date,
}