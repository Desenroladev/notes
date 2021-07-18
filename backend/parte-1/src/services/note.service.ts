import NoteModel from "../models/note.model";
import { Connection, Database } from "@desenroladev/pg";

class NoteService {
    private db: Database;

    constructor() {
        this.db = new Database();
    }

    async findAll() : Promise<NoteModel[]> {
        const sql = `select 
                        id, 
                        title, 
                        description,
                        image,
                        created_at,
                        updated_at
                    from notes`;
        return await this.db.query<NoteModel>(sql);
    }

    async findById(id: string) : Promise<NoteModel> {
        const sql = `select 
                        id, 
                        title, 
                        description,
                        image,
                        created_at,
                        updated_at
                    from notes
                    where id = $1`;
        return await this.db.find<NoteModel>(sql, [id]);
    }

    async create (model: NoteModel) : Promise<NoteModel> {
        let connection: Connection = null;
        try {
            connection = await this.db.transaction();
            const binds = [
                model.title,
                model.description
            ];
            const sql = `insert into notes(title, description) values($1, $2) returning *`;
            const note: NoteModel = await connection.execute<NoteModel>(sql, binds);
            await connection.commit();
            return note;
        } catch(err) {
            if(connection) {
                await connection.rollback();
            }
            throw err;
        }
    }

    async update(id: string, model: NoteModel) : Promise<NoteModel> {
        let connection: Connection = null;
        try {
            connection = await this.db.transaction();
            const sql = `update notes 
                                set title = $1,
                                    description = $2
                            where id = $3
                            returning *`;
            const binds = [
                model.title,
                model.description,
                model.id
            ];
            const note: NoteModel = await connection.find<NoteModel>(sql, binds);
            await connection.commit();
            return note;
        } catch(err) {
            if(connection) {
                await connection.rollback();
            }
            throw err;
        }
    }

    async delete(id: string) : Promise<NoteModel> {
        let connection: Connection = null;
        try {
            connection = await this.db.transaction();
            const sql = `delete from notes 
                            where id = $1 
                            returning *`;
            const note = await connection.execute<NoteModel>(sql, [id]);
            await connection.commit();
            return note;
        } catch(err) {
            if(connection) {
                await connection.rollback();
            }
            throw err;
        }
    }

}

export default NoteService;