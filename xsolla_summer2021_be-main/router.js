import Router from "express";
import ProductController from "./controllers/ProductController.js";

const router = new Router();

router.post("/products", ProductController.create);
router.get("/products/:id", ProductController.read);
router.get("/products", ProductController.getAll);
router.put("/products", ProductController.update);
router.delete("/products/:id", ProductController.delete);
router.delete("/products", ProductController.delete);

export default router;
