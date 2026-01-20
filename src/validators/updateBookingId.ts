import {z} from "zod";

export const updateBookingIdSchema = z.object({
    bookingId: z.number({message: "bookingId must be a number"}),
    roomIds : z.array(z.number({message: "Each roomId must be a number"}))
});