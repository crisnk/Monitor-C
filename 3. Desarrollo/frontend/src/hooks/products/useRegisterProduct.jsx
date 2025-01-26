import { registerProduct } from "../../services/products.service.js";

const useRegisterProduct = (fetchProducts) => {
    const handleRegister = async (formData) => {
        try {
            const productData = {
                barcode: formData.barcode,
                name: formData.name,
                description: formData.description || '',
                brand: formData.brand,
                stock: parseInt(formData.stock, 10),
                productContent: parseInt(formData.content, 10),
                UOM: formData.UOM,
                purchasePrice: parseInt(formData.purchasePrice, 10),
                sellingPrice: parseInt(formData.sellingPrice, 10),
            };

            const response = await registerProduct(productData);
            if (response.status === 201) {
                // Mostrar alerta con mensaje satisfactorio
                await fetchProducts();
            } else {
                // Mostrar alerta con mensaje de error
                console.error('Error en useRegisterProduct.jsx -> handleRegister():', response);
            }
        } catch (error) {
            console.error('Error al registrar el producto:', error);
            // Mostrar alerta con mensaje de error
        }
    };
    return { handleRegister };
};

export default useRegisterProduct;