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
                            <th className='th-products-table'>Código de barras</th>
                            <th className='th-products-table'>Producto</th>
                            <th className='th-products-table'>Descripción</th>
                            <th className='th-products-table'>Marca</th>
                            <th className='th-products-table'>Stock</th>
                            <th className='th-products-table'>Contenido neto</th>
                            <th className='th-products-table'>Precio de venta</th>
                            <th className='th-products-table'>Precio de compra</th>
                            <th className='th-products-table'>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr key={product._id}>
                                <td className='td-products-table' style={{ textAlign: 'center' }}>{product.barcode}</td>
                                <td className='td-products-table'>{product.name}</td>
                                <td className='td-products-table'>{product.description}</td>
                                <td className='td-products-table'>{product.brand}</td>
                                <td className='td-products-table'>{product.stock}</td>
                                <td className='td-products-table'>{product.productContent + product.UOM}</td>
                                <td className='td-products-table'>{'$' + product.sellingPrice}</td>
                                <td className='td-products-table'>{'$' + product.purchasePrice}</td>
                                <td className='td-products-table'>{product.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
