import express from "express";

import { ProductosController } from "../controllers/productosController";

export const router = express.Router();

const pc = new ProductosController();

router.get("/", pc.getAll);
router.get("/:id", pc.getById);
router.put("/:id", pc.update);
router.post("/", pc.create);
router.delete("/:id", pc.deleteById);

export default router;