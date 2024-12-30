import { Router } from "express";
import {
    registerProduct,
    listProducts,
    deleteProduct
} from "../controllers/products.controller.js";

const router = Router();

router.post('/register', registerProduct);
router.get('/list', listProducts);
router.delete('/delete/:barcode', deleteProduct);

export default router;