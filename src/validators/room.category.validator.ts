import { z } from "zod";

export const createRoomCategorySchema = z.object({
    category: z.enum(['BASIC', 'STANDARD', 'PREMIUM'], {message: "category must be one of 'BASIC', 'STANDARD', 'PREMIUM'"}),
    price: z.number({ message: "price must be a number" }).positive({ message: "price must be a positive number" }),
    hotelID: z.number({ message: "hotelID must be a number" }).positive({ message: "hotelID must be a positive number" }),
    roomLeft: z.number({ message: "roomLeft must be a number" }).min(0, { message: "roomLeft cannot be negative" })
});

export const updateRoomCategorySchema = z.object({
    category: z.enum(['BASIC', 'STANDARD', 'PREMIUM'], {message: "category must be one of 'BASIC', 'STANDARD', 'PREMIUM'"}).optional(),
    price: z.number({ message: "price must be a number" }).positive({ message: "price must be a positive number" }).optional(),
    hotelID: z.number({ message: "hotelID must be a number" }).positive({ message: "hotelID must be a positive number" }).optional(),
    roomLeft: z.number({ message: "roomLeft must be a number" }).min(0, { message: "roomLeft cannot be negative" }).optional()
});