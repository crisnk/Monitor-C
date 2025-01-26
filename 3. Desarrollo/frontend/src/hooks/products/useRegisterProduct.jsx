import { registerProduct } from "../../services/products.service.js";

const useRegisterProduct = (fetchProducts) => {
    const handleRegister = async (newProductData) => {
        try {
            const response = await registerProduct(newProductData);
            if (response.status === 201) {
                // Mostrar alerta con mensaje satisfactorio
                fetchProducts();
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