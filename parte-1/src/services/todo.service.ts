import TodoModel from "../models/todo.model";
import { Connection, Database } from "@desenroladev/pg";

class TodoService {
    private db: Database;
    constructor() {
        this.db = new Database();
    }
    async findAll() : Promise<TodoModel[]> {
        const sql = `select 
                        id, 
                        title, 
                        created_at,
                        concluded,
                        concluded_at
                    from todo`;
        return await this.db.query<TodoModel>(sql);
    }

    async findById(id: string) : Promise<TodoModel> {
        const sql = `select 
                        id, 
                        title, 
                        created_at,
                        concluded,
                        concluded_at
                    from todo
                    where id = $1`;
        return await this.db.find<TodoModel>(sql, [id]);
    }

    async create (model: TodoModel) : Promise<TodoModel> {
        let connection: Connection = null;
        try {
            connection = await this.db.transaction();
            const binds = [
                model.title
            ];
            const sql = `insert into todo(title) values($1) returning *`;
            const todo: TodoModel = await connection.execute<TodoModel>(sql, binds);
            await connection.commit();
            return todo;
        } catch(err) {
            if(connection) {
                await connection.rollback();
            }
            throw err;
        }
    }

    async update(id: string, model: TodoModel) : Promise<TodoModel> {
        let connection: Connection = null;
        try {
            connection = await this.db.transaction();
            const sql = `update todo 
                                set id = $1,
                                    title = $2,
                                    concluded = $3,
                                    concluded_at = $4
                            where id = $5 
                            returning *`;
            const binds = [
                model.id,
                model.title,
                model.concluded,
                model.concluded_at,
                id
            ];
            const todo: TodoModel = await connection.find<TodoModel>(sql, binds);
            await connection.commit();
            return todo;
        } catch(err) {
            if(connection) {
                await connection.rollback();
            }
            throw err;
        }
    }

    async delete(id: string) : Promise<TodoModel> {
        let connection: Connection = null;
        try {
            connection = await this.db.transaction();
            const sql = `delete from todo 
                            where id = $1 
                            returning *`;
            const todo = await connection.execute<TodoModel>(sql, [id]);
            await connection.commit();
            return todo;
        } catch(err) {
            if(connection) {
                await connection.rollback();
            }
            throw err;
        }
    }

}

export default TodoService;