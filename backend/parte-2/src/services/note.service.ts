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
                    where id = :id`;
        return await this.db.find<NoteModel>(sql, {id});
    }

    async create (model: NoteModel) : Promise<NoteModel> {
        let connection: Connection = null;
        try {
            connection = await this.db.transaction();
            const binds = {
                payload: model
            };
            const sql = `select t.* from public.dmlapi_notes_merge(:payload::jsonb) t`;
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
            model.id = id;
            const sql = `select t.* from public.dmlapi_notes_merge(:payload::jsonb) t`;
            const binds = {
                payload: model
            };
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
            const sql = `select t.* from public.dmlapi_notes_purge(fv_id => :id) t`;
            const note = await connection.execute<NoteModel>(sql, {id});
            await connection.commit();

            if(!note?.id) {
                return null;
            }
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