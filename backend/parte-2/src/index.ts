import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";

import noteRouter from './routers/note.router'
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (req:Request, res: Response) => {
    res.send("Ola Dev!");
});

app.use(noteRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(err.message);
});

app.listen(8888, () => {
    console.log('Server rodando: http://localhost:8888');
});
