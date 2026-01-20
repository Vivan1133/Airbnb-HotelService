import express from 'express';
import { getAvailableRoomsHandler, updateBookingIdToRoomsHandler } from '../../controllers/room.controller';
import { validateQueryParams, validateRequestBody } from '../../validators';
import { roomAvailableSchema } from '../../validators/roomAvailable';
import { updateBookingIdSchema } from '../../validators/updateBookingId';

const roomRouter = express.Router();


roomRouter.get("/available",validateQueryParams(roomAvailableSchema), getAvailableRoomsHandler);
roomRouter.post("/update-booking-id", validateRequestBody(updateBookingIdSchema), updateBookingIdToRoomsHandler);

export default roomRouter;