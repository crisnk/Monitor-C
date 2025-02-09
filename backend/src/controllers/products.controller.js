import { handleErrorClient, handleErrorServer, handleSuccess } from "../handlers/response.handler.js"
import {
    registerProductService,
    listProductsService,
    deleteProductService
 } from "../services/products.service.js";
import productValidation from "../validations/products.validation.js";

export async function registerProduct(req, res) {
    try {
        const { body } = req;

        const { error } = productValidation.validate(body);

        if (error)
            return handleErrorClient(res, 400, "Error al validar el formato de la solicitud", error.message);

        const [registeredProduct, errorRegisterProduct] = await registerProductService(body);

        if (errorRegisterProduct)
            return handleErrorClient(res, 400, "Error registrando el producto", errorRegisterProduct);

        handleSuccess(res, 201, "Producto registrado", registeredProduct);
    } catch (error) {
        handleErrorServer(res, 500, error.message);
    }
}

export async function listProducts(req, res) {
    try {
        const [products, error] = await listProductsService();

        if (error)
            return handleErrorClient(res, 400, "Error obteniendo los productos", error.message);

        const message = products.length === 0
            ? "No se han encontrado productos"
            : "Productos encontrados"
        
        handleSuccess(res, 201, message, products);
    } catch (error) {
        handleErrorServer(res, 500, error.message);
    }
}

export async function deleteProduct(req, res) {
    try {
        const { barcode } = req.params;

        const [deletedProduct, errorDeletedProduct] = await deleteProductService(barcode);

        if (errorDeletedProduct)
            return handleErrorClient(res, 400, "Error eliminando el producto", errorDeletedProduct);

        handleSuccess(res, 201, "Producto eliminado", deletedProduct);
    } catch (error) {
        handleErrorServer(res, 500, error.message);
    }
}