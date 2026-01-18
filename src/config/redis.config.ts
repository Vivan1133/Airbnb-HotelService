import Redis from "ioredis";
import { serverConfig } from ".";


// export const redisClient = new Redis(serverConfig.REDIS_SERVER_URL);

function connectToRedis() {
    try {

        let redisConnection: Redis;

        return () => {
            if(!redisConnection) {
                redisConnection = new Redis(serverConfig.REDIS_SERVER_URL);
            }
            return redisConnection;
        };

    } catch (error) {
        console.log("redis connection failed: ", error);
        throw error;
    }
}


export const getredisConnectionObj = connectToRedis();