import { StatusCodes } from "http-status-codes";
import { createRoomCategoryService, deleteRoomCategoryService, getAllRoomCategoryService, getRoomCategoryByIdService, updateRoomCategoryService } from "../services/room-category-service";
import { Request, Response } from "express";

export const createRoomCategoryHandler = async (req : Request, res : Response) => {
    await createRoomCategoryService(req.body);
    res.status(StatusCodes.OK).json({
        message : "successfully created the room category",
        success : true
    })
}

export const getAllRoomCategoriesHandler = async (req : Request, res : Response) => {
    const roomCategories = await getAllRoomCategoryService();
    res.status(StatusCodes.OK).json({
        message : "successfully fetched all the room categories",
        success : true,
        data : roomCategories
    })
}

export const getRoomCategoryByIdHandler = async (req : Request, res : Response) => {
    const roomCategory = await getRoomCategoryByIdService(Number(req.params.id));
    res.status(StatusCodes.OK).json({
        message : "successfully fetched the room category",
        success : true,
        data : roomCategory
    })
}

export const getRoomCategoriesByHotelId = async (req : Request, res : Response) => {
    const roomCategories = await getRoomCategoryByIdService(Number(req.params.hotelId));
    res.status(StatusCodes.OK).json({
        message : "successfully fetched the room categories for the hotel",
        success : true,
        data : roomCategories
    })
}

export const updateRoomCategoryHandler = async (req : Request, res : Response) => {
    const roomCategory = await updateRoomCategoryService(req.body, Number(req.params.id));
    res.status(StatusCodes.OK).json({
        message : "successfully updated the room category",
        success : true,
        data : roomCategory
    })
}

export const deleteRoomCategoryHandler = async (req : Request, res : Response) => {
    await deleteRoomCategoryService(Number(req.params.id));
    res.status(StatusCodes.OK).json({
        message : "successfully deleted the room category",
        success : true
    })
}
