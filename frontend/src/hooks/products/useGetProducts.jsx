import { useState, useEffect } from "react";
import { getProducts } from "../../services/products.service";

export default function useGetProducts() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await getProducts();
            const { data } = response.data;
            setProducts(data);
        } catch (error) {
            console.error("Error al obtener productos:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, fetchProducts, isLoading };
}