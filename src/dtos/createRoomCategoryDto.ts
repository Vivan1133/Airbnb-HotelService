export enum Category {
    'BASIC',
    'STANDARD',
    'PREMIUM'
}

export type CreateRoomCategoryDto = {
    id?: number;
    category: Category,
    price: number,
    hotelID: number,
    roomLeft: number,
    deletedAt?: Date
}