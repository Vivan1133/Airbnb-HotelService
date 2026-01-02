import { Room } from "../db/models/Room";
import { BaseRepository } from "./base-repository";

export class RoomRepo extends BaseRepository<Room> {
    constructor() {
        super(Room);
    }

    
}