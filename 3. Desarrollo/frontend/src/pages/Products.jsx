import { useState, useEffect } from 'react';
import useGetProducts from '../hooks/products/useGetProducts.jsx';
import SearchBar from '../components/Search.jsx';
import ModalRegisterProduct from '../interface/Products/Register.modal.jsx';
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
            {/* Título */}
            <h1 className='title-table'>Productos</h1>

            {/* Barra de herramientas */}
            <div className='toolsbar-products-table'>
                <SearchBar
                    data={products}
                    onFilter={handleFilter}
                    fields={['name', 'description', 'brand', 'stock', 'productContent', 'sellingPrice', 'purchasePrice', 'status']}
                />
                <button type='button' className='btn btn-primary btn-sm add-products-button' data-bs-toggle='modal' data-bs-target='#register-product-modal'>Agregar producto</button>
            </div>

            {/* Contenido de la tabla */}
            <div className='content-container-table'>
                <table className='products-table'>
                    {/* Encabezado de la tabla*/}
                    <thead>
                        <tr>
                            <th className='th-products-table barcode-products-column'>Código de barras</th>
                            <th className='th-products-table'>Producto</th>
                            <th className='th-products-table'>Descripción</th>
                            <th className='th-products-table'>Marca</th>
                            <th className='th-products-table'>Stock</th>
                            <th className='th-products-table'>Contenido neto</th>
                            <th className='th-products-table'>Precio de venta</th>
                            <th className='th-products-table'>Precio de compra</th>
                        </tr>
                    </thead>

                    {/* Tuplas de la tabla */}
                    {filteredProducts.length === 0 ? (
                        <tbody>
                            <tr>
                                <td colSpan={9} style={{ textAlign: 'center' }}>No se encontraron coincidencias</td>
                            </tr>
                        </tbody>
                    ) : (
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
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
                <ModalRegisterProduct />
            </div>
        </div>
    );
}
