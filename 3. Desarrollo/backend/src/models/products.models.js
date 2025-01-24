import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    barcode: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    brand: { // Marca
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        min: [0, "El stock no puede ser negativo"]
    },
    productContent: {
        type: Number,
        required: true,
        min: [0, "La cantidad no puede ser negativa"]
    },
    UOM: { // Unit Of Measure -> Unidad de medida
        type: String,
        required: true
    },
    purchasePrice: {
        type: Number,
        required: true,
        min: [0, "El precio de compra no puede ser negativo"]
    },
    sellingPrice: {
        type: Number,
        required: true,
        min: [0, "El precio de venta no puede ser negativo"]
    },
    status: {
        type: String,
        required: true,
        enum: ["Activo", "Descontinuado"]
    },

}, { versionKey: false, timestamps: true });

export default mongoose.model("Productos", productSchema);