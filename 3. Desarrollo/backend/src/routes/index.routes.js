import { Router } from "express";
import productsRoutes from "./products.routes.js";

const router = Router();

router.get('/');
router.use('/product', productsRoutes);

export default router;