import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createHotelService, deleteHotelService, getAllHotelService, getByIdHotelService, updateHotelService } from "../services/hotel-service";

export const createHotel = async (req: Request, res: Response) => {
    await createHotelService(req.body);
    res.status(StatusCodes.OK).json({
        message: "successfully created the hotel",
        success: true
    })
}


export const getAllHotels = async (req: Request, res: Response) => {
    const hotels = await getAllHotelService();
    res.status(StatusCodes.OK).json({
        message: "successfully fetched all the hotels",
        success: true,
        data: hotels
    })
}

export const getHotelById = async (req: Request, res: Response) => {
    const hotels = await getByIdHotelService(Number(req.params.id));
    res.status(StatusCodes.OK).json({
        message: "successfully fetched the hotel",
        success: true,
        data: hotels
    })
}

export const deleteHotel = async (req: Request, res: Response) => {
    await deleteHotelService(Number(req.params.id));
    res.status(StatusCodes.OK).json({
        message: "successfully deleted the hotel",
        success: true
    })
}

export const updateHotel = async (req: Request, res: Response) => {
    const hotels = await updateHotelService(req.body, Number(req.params.id));
    res.status(StatusCodes.OK).json({
        message: "successfully updated the hotel",
        success: true,
        data: hotels
    })
}