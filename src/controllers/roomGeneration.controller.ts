import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { addRoomGenerationToQueue } from "../producers/roomGeneration.producer";

export async function generateRoomHandler(req: Request, res: Response) {


    await addRoomGenerationToQueue(req.body);

    res.status(StatusCodes.OK).json({
        message: "Room generation job added to queue",
        success: true,
        data: {},
    })
}