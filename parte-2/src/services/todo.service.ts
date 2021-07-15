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
                JSON.stringify(model)
            ];
            const sql = `select t.* from public.dmlapi_todo_merge($1::jsonb) t`;
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
            const sql = `select t.* from public.dmlapi_todo_merge($1::jsonb) t`;
            const binds = [
                JSON.stringify(model)
            ];
            const todo: TodoModel = await connection.find<TodoModel>(sql, binds);
            console.log(todo)
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
            const sql = `select t.* from public.dmlapi_todo_purge(fv_id => $1) t`;
            const todo = await connection.execute<TodoModel>(sql, [id]);
            await connection.commit();

            if(!todo?.id) {
                return null;
            }
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