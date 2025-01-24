import useGetProducts from '../hooks/products/useGetProducts.jsx';
import SearchBar from '../components/Search.jsx';
import { useState, useEffect } from 'react';
import '../styles/products.css';

export default function Products() {
    const { products, isLoading } = useGetProducts();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (products) {
            setFilteredProducts(products);
        }
    }, [products]);

    const handleFilter = (filteredData) => {
        setFilteredProducts(filteredData);
    };

    if (isLoading) {
        return;
    }

    return (
        <div className='container-table'>
            <h1 className='title-table'>Productos</h1>
            <SearchBar
                data={products}
                onFilter={handleFilter}
                placeholder={'Buscar... '}
                fields={['name', 'description', 'brand', 'stock', 'productContent', 'sellingPrice', 'purchasePrice', 'status']}
            />
            <div className='content-container-table'>
                <table className='products-table'>
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
                        {filteredProducts.map((product) => (
                            <tr key={product._id}>
                                <td style={{ textAlign: 'center' }}>{product.barcode}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.brand}</td>
                                <td>{product.stock}</td>
                                <td>{product.productContent + product.UOM}</td>
                                <td>{'$' + product.sellingPrice}</td>
                                <td>{'$' + product.purchasePrice}</td>
                                <td>{product.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
