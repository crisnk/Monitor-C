import { useState, useEffect } from "react";
import { getProducts } from "../../services/products.service";

export default function useGetProducts() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await getProducts();
            console.log(response);
            const { data } = response.data;
            setProducts(data);
        } catch (error) {
            console.error("Error al obtener productos:", error);
        }
    };

    return { products, fetchProducts, setProducts };
}