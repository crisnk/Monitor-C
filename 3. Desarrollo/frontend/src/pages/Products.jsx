import { useEffect, useState, useRef } from 'react';
import DataTable from 'datatables.net-dt';
import useGetProducts from '../hooks/products/useGetProducts';
import 'datatables.net-responsive-dt';
import '../styles/table.css';

export default function Products() {
    const { products, isLoading } = useGetProducts();
    const tableRef = useRef(null);

    useEffect(() => {
        new DataTable(tableRef.current);
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
