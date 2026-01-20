export enum Category {
  BASIC = 'BASIC',
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
}

export type CreateRoomCategoryDto = {
    id?: number;
    category: Category,
    price: number,
    hotelID: number,
    roomLeft: number,
    deletedAt?: Date
}