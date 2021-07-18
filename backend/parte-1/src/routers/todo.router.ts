import { Router } from "express";
import TodoController from "../controllers/todo.controller";

const router = Router();
const controller = new TodoController();

router.get('/todos', (req, res) => controller.index(req, res));
router.get('/todos/:id', (req, res) => controller.get(req, res));
router.post('/todos', (req, res) => controller.post(req, res));
router.put('/todos/:id', (req, res) => controller.put(req, res));
router.delete('/todos/:id', (req, res) => controller.delete(req, res));


export default router