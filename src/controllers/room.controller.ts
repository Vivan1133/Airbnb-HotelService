import { Request, Response } from "express";
import { getRoomsByCategoryAndDateRange, updateBookingIdToRooms } from "../services/room-service";
import { StatusCodes } from "http-status-codes";
import { GetAvailableRoomsDto } from "../dtos/getAvailableRoomsDto";

export async function getAvailableRoomsHandler(req : Request, res : Response) {
    const rooms = await getRoomsByCategoryAndDateRange({
        roomCategoryId : parseInt(req.query.roomCategoryId as string),
        startDate : req.query.startDate as string,
        endDate : req.query.endDate as string
    } as GetAvailableRoomsDto);
    res.status(StatusCodes.OK).json({
        message : "Rooms fetched successfully",
        data : rooms,
        success: true
    });
}

export async function updateBookingIdToRoomsHandler(req : Request, res : Response) {
    const response = await updateBookingIdToRooms(req.body);
    res.status(StatusCodes.OK).json({
        message : "Booking ID updated to rooms successfully",
        data : response,
        success: true
    });
}