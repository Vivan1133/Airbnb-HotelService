import { CreationAttributes } from "sequelize";
import { RoomCategory } from "../db/models/RoomCategory";
import { RoomGenerationJob } from "../dtos/roomGenerationDto";
import { Roomcategory } from "../repositories/room-category-repository";
import { RoomRepo } from "../repositories/room-repository";
import { BadRequestError, NotFoundError } from "../utils/errors/app.error";
import { Room } from "../db/models/Room";
import logger from "../config/logger.config";

const roomcategory = new Roomcategory()
const roomRepository = new RoomRepo()

export async function generateRooms(jobData : RoomGenerationJob) {

    let totalRoomsCreated = 0;
    let totalDatesProcessed = 0;
    
    const roomCategory = await roomcategory.getById(jobData.roomCategoryId)

    if(!roomCategory) {
        throw new NotFoundError(`Room with category ID : ${jobData.roomCategoryId} does not exists`)
    }

    const startDate = new Date(jobData.startDate)
    const endDate = new Date(jobData.endDate)

    if (startDate >= endDate) {
        throw new BadRequestError("Start date must be before end date")
    }

    if (startDate < new Date()) {
        throw new BadRequestError("Start date must be future")
    }

    console.log("herereeeeeeeeeererere")

    const totalDays = Math.ceil(( endDate.getTime() - startDate.getTime() ) / (1000*60*60*24));

    logger.info(`Generating rooms for ${totalDays} days`);

    const batchSize = jobData.batchSize || 100; // put it in env variable or a some config

    const currentDate = new Date(startDate);

    while(currentDate < endDate) {
        const batchEndDate = new Date(currentDate);

        batchEndDate.setDate(batchEndDate.getDate() + batchSize);


        if(batchEndDate > endDate ) {
            batchEndDate.setTime(endDate.getTime());
        }

        console.log("before batch result")

        const batchResult = await processDateBatch(roomCategory, currentDate, batchEndDate, jobData.priceOverride);

        console.log("after batch result");

        totalRoomsCreated += batchResult.roomsCreated;
        totalDatesProcessed += batchResult.datesProcessed;

        currentDate.setTime(batchEndDate.getTime());

        
    }

    return {
        totalRoomsCreated,
        totalDatesProcessed,
    }


}


export async function processDateBatch(roomCategory: RoomCategory, startDate: Date, endDate: Date, priceOverride?: number) {

    let roomsCreated = 0;
    let datesProcessed = 0;
    const roomsToCreate: CreationAttributes<Room>[] = [];

    const currentDate = new Date(startDate);

    while(currentDate <= endDate) {
        const existingRoom = await roomRepository.findByRoomCategoryIdAndDate(
            roomCategory.id,
            currentDate
        );

        logger.info(`Existing room: ${JSON.stringify(existingRoom)} : ${currentDate}`);

        if(!existingRoom) {
            const roomPayload = {
                hotelID: roomCategory.hotelID,
                roomCategoryID: roomCategory.id,
                dateOfAvailability: new Date(currentDate),
                price: priceOverride || roomCategory.price,
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
                bookingID: null
            };
            console.log(`Room payload: ${JSON.stringify(roomPayload)}`);
            roomsToCreate.push(roomPayload);
        }

        currentDate.setDate(currentDate.getDate() + 1);
        datesProcessed++;
    }

    console.log(`Rooms to create: ${JSON.stringify(roomsToCreate)}`);

    if(roomsToCreate.length > 0) {
        logger.info(`Creating ${roomsToCreate.length} rooms`);
        await roomRepository.bulkCreate(roomsToCreate);
        roomsCreated += roomsToCreate.length;
    }

    return {
        roomsCreated,
        datesProcessed,
    }
}