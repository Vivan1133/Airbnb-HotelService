
import { RoomGenerationJob } from "../dtos/roomGenerationDto"
import { roomGenerationQueue } from "../queues/roomGeneration.queue" 

export const ROOMGENERATION_PAYLOAD = "payload:roomGeneration"

export const addRoomGenerationToQueue = async (payload : RoomGenerationJob) => {
    await roomGenerationQueue.add(ROOMGENERATION_PAYLOAD, payload)
}