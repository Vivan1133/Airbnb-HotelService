import { Job, Worker } from "bullmq";
import { ROOM_GENERATION_QUEUE } from "../queues/roomGeneration.queue";
import { ROOMGENERATION_PAYLOAD } from "../producers/roomGeneration.producer";
import { RoomGenerationJob } from "../dtos/roomGenerationDto";
import { generateRooms } from "../services/room-generation-service";
import logger from "../config/logger.config";

export const setupRoomGenerationWorker = () => {
    const roomGenerationProcessor = new Worker<RoomGenerationJob>(
        ROOM_GENERATION_QUEUE,
        async (job: Job) => {
            if(job.name !== ROOMGENERATION_PAYLOAD) {
                throw new Error("Invalid job name")
            }

            const payload : RoomGenerationJob = job.data;

            console.log(`Processing room generation for: ${JSON.stringify(payload)}`);

            await generateRooms(payload);

            logger.info(`Room generation completed for: ${JSON.stringify(payload)}`);
            
        },
        {
            connection: {
                host: "localhost",
                port: 6379,
            }
        }
    )

    roomGenerationProcessor.on("failed", () => {
        console.log("room generation processing failed")
    })

    roomGenerationProcessor.on("completed", () => {
        console.log("room generation processing done successfully")
    })
}


// the jobs get stored in two sets after processing by the workers, we can set the options
// of controlling these jobs in the sets (failed, completed)