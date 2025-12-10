import { z } from "zod";

export const createHotelSchema = z.object({
    name: z.string(),
    location: z.string(),
    address: z.string(),
    rating: z.number().optional(),
    ratingCount: z.number().optional()
})