import express from 'express';
import {  validateRequestBody } from '../../validators';
import { createHotelSchema } from '../../validators/hotel.validator';
import { createHotel, deleteHotel, getAllHotels, getHotelById, updateHotel } from "../../controllers/hotel-controller";

const hotelRouter = express.Router();

hotelRouter.post('/', validateRequestBody(createHotelSchema), createHotel);
hotelRouter.get("/:id", getHotelById);
hotelRouter.get("/", getAllHotels);
hotelRouter.patch("/:id", updateHotel);
hotelRouter.delete("/:id", deleteHotel);


export default hotelRouter;