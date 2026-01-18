import { Queue } from "bullmq";

export const ROOM_GENERATION_QUEUE = "queue-room-generation";

export const roomGenerationQueue = new Queue(ROOM_GENERATION_QUEUE, {
    connection: {
        host: "localhost",
        port: 6379,
    },
});
