export type createHotelDto = {
    id?: number
    name: string,
    location: string,
    managerId: number,
    city: string,
    state: string,
    pincode: number,
    description?: string, 
    rating?: number,
    ratingCount?: number,
    deletedAt?: Date
}