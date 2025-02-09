import Product from "../models/products.models.js";

export async function registerProductService(data) {
    try {
        const { barcode } = data;
        const createErrorMessage = (dataInfo, message) => ({
            dataInfo,
            message
        });

        const productFounded = await Product.findOne({ barcode });

        if (productFounded)
            return [null, createErrorMessage(barcode, "Ya existe un producto con ese código")];

        const newProduct = await Product.create(data);

        return [newProduct, null];
    } catch (error) {
        console.log("Error registrando el producto:", error);
        return [null, "Error interno del servidor"];
    }
}

export async function listProductsService() {
    try {
        const products = await Product.find();
        return [products, null];
    } catch (error) {
        console.log("Error intentando mostrar los productos:", error);
        return [null, "Error interno del servidor"];
    }
}

export async function deleteProductService(barcode) {
    try {
        const createErrorMessage = (dataInfo, message) => ({
            dataInfo,
            message
        });

        const productDeleted = await Product.findOneAndDelete({ barcode });

        if (productDeleted) 
            return [productDeleted, null]
        else
            return [null, createErrorMessage(barcode, "No existe un producto con ese código")];
    } catch (error) {
        console.log("Error intentando eliminar el producto:", error);
        return [null, "Error interno del servidor"];
    }
}