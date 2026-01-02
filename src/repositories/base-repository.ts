import { Attributes, CreationAttributes , Model, ModelStatic, WhereOptions } from "sequelize";
import { NotFoundError } from "../utils/errors/app.error";

export abstract class BaseRepository<T extends Model>{

    protected model : ModelStatic<T>;    // so that only inheriting class can have access

    constructor(model : ModelStatic<T>) {
        this.model = model;
    }

    async create(createData : CreationAttributes<T>) : Promise<T> {
        const record = await this.model.create(createData);
        return record;
    }

    async delete(whereOptions : WhereOptions<Partial<Attributes<T>>>) : Promise<void> {
        const recordDestroyed = await this.model.destroy({
            where: whereOptions
        })
        if(recordDestroyed === 0) {
            throw new NotFoundError(`No record found with provided prop`)
        }
    }

    async update(id : number, data : Partial<Attributes<T>>) : Promise<T> {
        const record = await this.model.findByPk(id);
        if(!record) {
            throw new NotFoundError(`no record found with ID: ${id}`);
        }
        Object.assign(record, data);
        await record.save();
        return record;
    }

    async getById(id : number) : Promise<T | null> {
        const record = await this.model.findByPk(id);
        if (!record) {
            throw new NotFoundError(`No record found with ID: ${id}`);
        }
        return record;
    }

    async getAll() : Promise<T[]> {
        const records = await this.model.findAll();
        if(!records) {
            throw new NotFoundError(`No record found`);
        }
        return records;
    }


}