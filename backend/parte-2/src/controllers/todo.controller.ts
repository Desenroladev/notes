
import {Request, Response} from "express";
import TodoService from "../services/todo.service";

class TodoController {
    
    private service: TodoService;

    constructor() {
        this.service = new TodoService();
    }

    async index(req: Request, res: Response) {
        const all = await this.service.findAll();
        return res.json(all);
    }

    async get(req: Request, res: Response) {
        const id = req.params.id;
        const todo = await this.service.findById(id);

        if(!todo) {
            return res.status(404).send('Todo is not found.');
        }

        res.json(todo);
    }

    async post(req: Request, res: Response) {
        const todo = await this.service.create(req.body);
        res.json(todo);
    }

    async put(req: Request, res: Response) {
        const id = req.params.id;
        const todo = await this.service.update(id, req.body);

        if(!todo) {
            return res.status(404).send('Todo is not found.');
        }

        res.json(todo);
    }

    async delete(req: Request, res: Response) {
        const id = req.params.id;
        const todo = await this.service.delete(id);

        if(!todo) {
            return res.status(404).send('Todo is not found.');
        }

        res.json(todo);
    }

}

export default TodoController;