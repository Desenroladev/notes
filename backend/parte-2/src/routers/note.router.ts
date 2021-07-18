import { Router } from "express";
import NoteController from "../controllers/note.controller";

const router = Router();
const controller = new NoteController();

router.get('/notes', (req, res) => controller.index(req, res));
router.get('/notes/:id', (req, res) => controller.get(req, res));
router.post('/notes', (req, res) => controller.post(req, res));
router.put('/notes/:id', (req, res) => controller.put(req, res));
router.delete('/notes/:id', (req, res) => controller.delete(req, res));


export default router