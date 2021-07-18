
import {Request, Response} from "express";
import NoteService from "../services/note.service";

class NoteController {
    
    private service: NoteService;

    constructor() {
        this.service = new NoteService();
    }

    async index(req: Request, res: Response) {
        const all = await this.service.findAll();
        return res.json(all);
    }

    async get(req: Request, res: Response) {
        const id = req.params.id;
        const note = await this.service.findById(id);

        if(!note) {
            res.status(404).send('Note is not found.');
        }

        res.json(note);
    }

    async post(req: Request, res: Response) {
        const note = await this.service.create(req.body);
        res.json(note);
    }

    async put(req: Request, res: Response) {
        const id = req.params.id;
        const Note = await this.service.update(id, req.body);

        if(!Note) {
            res.status(404).send('Note is not found.');
        }

        res.json(Note);
    }

    async delete(req: Request, res: Response) {
        const id = req.params.id;
        const note = await this.service.delete(id);

        if(!note) {
            res.status(404).send('Note is not found.');
        }

        res.json(note);
    }

}

export default NoteController;