import useGetProducts from '../hooks/products/useGetProducts';

export default function Products() {
    const { products, isLoading } = useGetProducts();

    if (isLoading) {
        return;
    }

    return (
        <div>
            <h1>Productos</h1>
            <table>
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
