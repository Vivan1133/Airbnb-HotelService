import {z} from "zod";

export const roomAvailableSchema = z.object({
    roomCategoryId: z.string({ message: "roomCategoryId must be a string" }),
    startDate: z.string({ message: "startDate must be a valid date string" }),
    endDate: z.string({ message: "endDate must be a valid date string" })
})