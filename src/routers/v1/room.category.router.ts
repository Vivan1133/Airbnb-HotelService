import express from 'express';
import {  validateRequestBody } from '../../validators';
import { createRoomCategorySchema, updateRoomCategorySchema } from '../../validators/room.category.validator';
import { createRoomCategoryHandler, deleteRoomCategoryHandler, getAllRoomCategoriesHandler, getRoomCategoriesByHotelId, getRoomCategoryByIdHandler, updateRoomCategoryHandler } from '../../controllers/room.category.controller';

const roomCategoryRouter = express.Router();

roomCategoryRouter.post('/', validateRequestBody(createRoomCategorySchema), createRoomCategoryHandler);
roomCategoryRouter.get('/', getAllRoomCategoriesHandler);
roomCategoryRouter.get('/:id', getRoomCategoryByIdHandler);
roomCategoryRouter.get('/:hotelId', getRoomCategoriesByHotelId);
roomCategoryRouter.patch('/:id', validateRequestBody(updateRoomCategorySchema), updateRoomCategoryHandler);
roomCategoryRouter.delete('/:id', deleteRoomCategoryHandler);


export default roomCategoryRouter;