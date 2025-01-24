import { useEffect, useState, useRef } from 'react';
import DataTable from 'datatables.net-dt';
import useGetProducts from '../hooks/products/useGetProducts';
import 'datatables.net-responsive-dt';
import '../styles/table.css';

export default function Products() {
    const { products, fetchProducts } = useGetProducts();
    const [isLoading, setIsLoading] = useState(true); // Estado para saber si los datos están cargando
    const tableRef = useRef(null); // Referencia para la tabla

    useEffect(() => {
        fetchProducts().finally(() => setIsLoading(false)); // Cambia el estado de carga cuando los productos se hayan cargado
    }, []);

    useEffect(() => {
        if (products.length > 0 && tableRef.current) {
            new DataTable(tableRef.current); // Inicializa DataTable solo cuando haya productos
        }
    }, [products]);

    if (isLoading) {
        return;
    }

    return (
        <div>
            <h1>Productos</h1>
            <table ref={tableRef} id="productsTable" className="display">
                <thead>
                    <tr>
                        <th>Código de barras</th>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Marca</th>
                        <th>Stock</th>
                        <th>Contenido neto</th>
                        <th>Precio de venta</th>
                        <th>Precio de compra</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.barcode}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.brand}</td>
                            <td>{product.stock}</td>
                            <td>{product.productContent + product.UOM}</td>
                            <td>{'$'+product.sellingPrice}</td>
                            <td>{'$'+product.purchasePrice}</td>
                            <td>{product.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
