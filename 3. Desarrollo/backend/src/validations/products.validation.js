import Joi from "joi";

const productValidationSchema = Joi.object({
    barcode: Joi.string()
        .required()
        .messages({
            "string.base": "El código de barras debe ser de tipo texto",
            "string.empty": "El código de barras no puede estar vacío",
            "any.required": "El código de barras es obligatorio",
        }),

    name: Joi.string()
        .required()
        .max(100)
        .messages({
            "string.base": "El nombre debe ser de tipo texto",
            "string.empty": "El nombre no puede estar vacío",
            "string.max": "El nombre no puede tener más de 100 caracteres",
            "any.required": "El nombre es obligatorio",
        }),

    description: Joi.string()
        .optional()
        .allow("")
        .max(500)
        .messages({
            "string.base": "La descripción debe ser de tipo texto",
            "string.max": "La descripción no puede tener más de 500 caracteres",
        }),

    brand: Joi.string()
        .required()
        .max(50)
        .messages({
            "string.base": "La marca debe ser de tipo texto",
            "string.empty": "La marca no puede estar vacía",
            "string.max": "La marca no puede tener más de 50 caracteres",
            "any.required": "La marca es obligatoria",
        }),

    stock: Joi.number()
        .required()
        .min(0)
        .max(100000)
        .messages({
            "number.base": "El stock debe ser un número",
            "number.min": "El stock no puede ser negativo",
            "number.max": "El stock no puede superar los 100.000",
            "any.required": "El stock es obligatorio",
        }),

    productContent: Joi.number()
        .required()
        .min(1)
        .max(10000)
        .messages({
            "number.base": "El contenido del producto debe ser un número",
            "number.min": "El contenido del producto no puede ser menor a 1",
            "number.max": "El contenido del producto no puede superar los 10.000",
            "any.required": "El contenido del producto es obligatorio",
        }),

    UOM: Joi.string()
        .required()
        .max(20)
        .messages({
            "string.base": "La unidad de medida debe ser de tipo texto",
            "string.empty": "La unidad de medida no puede estar vacía",
            "string.max": "La unidad de medida no puede tener más de 20 caracteres",
            "any.required": "La unidad de medida es obligatoria",
        }),

    purchasePrice: Joi.number()
        .required()
        .min(1)
        .max(1000000)
        .messages({
            "number.base": "El precio de compra debe ser un número",
            "number.min": "El precio de compra no puede ser menor a 1",
            "number.max": "El precio de compra no puede superar los 1.000.000",
            "any.required": "El precio de compra es obligatorio",
        }),

    sellingPrice: Joi.number()
        .required()
        .min(1)
        .max(1000000)
        .messages({
            "number.base": "El precio de venta debe ser un número",
            "number.min": "El precio de venta no puede ser menor a 1",
            "number.max": "El precio de venta no puede superar los 1.000.000",
            "any.required": "El precio de venta es obligatorio",
        }),

    status: Joi.string()
        .valid("Activo", "Sin stock", "Descontinuado")
        .required()
        .messages({
            "string.base": "El estado debe ser de tipo texto",
            "any.only": "El estado debe ser uno de los siguientes valores: Activo, Sin stock, Descontinuado",
            "any.required": "El estado es obligatorio",
        }),

    location: Joi.string()
        .optional()
        .allow("")
        .max(100)
        .messages({
            "string.base": "La ubicación debe ser de tipo texto",
            "string.empty": "La ubicación no puede estar vacía",
            "string.max": "La ubicación no puede tener más de 100 caracteres",
        }),
});

export default productValidationSchema;