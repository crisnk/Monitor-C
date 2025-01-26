import { useRef, useState } from 'react';
import useRegisterProduct from '../../hooks/products/useRegisterProduct';

export default function ModalRegisterProduct({ fetchProducts }) {
    const [purchasePrice, setPurchasePrice] = useState('');
    const [profitMargin, setProfitMargin] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const formRef = useRef(null);

    const { handleRegister } = useRegisterProduct(fetchProducts);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = formRef.current;

        if (!form.checkValidity()) {
            event.stopPropagation();
        }

        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());
        handleRegister(formObject);

        form.reset();
        setPurchasePrice('');
        setProfitMargin('');
        setSellingPrice('');

        form.classList.add('was-validated');
        document.getElementById('register-product-modal').click();
    };

    const handlePurchasePriceChange = (event) => {
        const value = event.target.value;
        if (value === '') {
            setPurchasePrice('');
            setSellingPrice('');
        } else {
            // Asegurarse de que el precio de compra sea un número entero
            const parsedValue = Math.floor(parseInt(value, 10) || 0);
            setPurchasePrice(parsedValue);

            // Si el porcentaje de ganancia está presente, calcular el precio de venta sugerido
            if (profitMargin) {
                const suggestedPrice = Math.floor(parsedValue * (1 + parseInt(profitMargin, 10) / 100));
                setSellingPrice(suggestedPrice);
            }
        }

    };

    const handleProfitMarginChange = (event) => {
        const value = event.target.value;
        if (value === '') {
            setProfitMargin('');
            setSellingPrice(purchasePrice);  // Si no hay ganancia, el precio de venta es igual al precio de compra
        } else {
            // Asegurarse de que el porcentaje de ganancia sea un número entero
            const parsedValue = Math.floor(parseInt(value, 10) || 0);
            setProfitMargin(parsedValue);

            // Si el precio de compra está presente, calcular el precio de venta sugerido
            if (purchasePrice) {
                const suggestedPrice = Math.floor(purchasePrice * (1 + parsedValue / 100));
                setSellingPrice(suggestedPrice);
            }
        }

    };

    return (
        <div className="modal fade" id="register-product-modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* Encabezado */}
                    <div className="modal-header">
                        <h3 className="modal-title">Registrar producto</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    {/* Contenido */}
                    <div className="modal-body">
                        <form id="register-product-form" className="needs-validation" noValidate ref={formRef} onSubmit={handleSubmit}>

                            {/* Código de barras */}
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="barcode-product" placeholder="Código de barras" name="barcode" required />
                                <label htmlFor="barcode-product">Código de barras</label>
                                <div className="invalid-feedback">Este campo es obligatorio</div>
                            </div>

                            {/* Nombre del producto */}
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="name-product" placeholder="Nombre del producto" name="name" required />
                                <label htmlFor="name-product">Nombre del producto</label>
                                <div className="invalid-feedback">Este campo es obligatorio</div>
                            </div>

                            {/* Descripción */}
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="description-product" placeholder="Nombre del producto" name="description" />
                                <label htmlFor="description-product">Descripción</label>
                            </div>

                            {/* Marca */}
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="brand-product" placeholder="Marca" name="brand" required />
                                <label htmlFor="brand-product">Marca</label>
                                <div className="invalid-feedback">Este campo es obligatorio</div>
                            </div>

                            {/* Stock */}
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="stock-product" placeholder="Stock" name="stock" required />
                                <label htmlFor="stock-product">Stock</label>
                                <div className="invalid-feedback">Este campo es obligatorio</div>
                            </div>

                            {/* Contenido neto */}
                            <div className="row g-2">
                                <div className="col-md">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="content-product" placeholder="Contenido neto" name="content" required />
                                        <label htmlFor="content-product">Contenido neto</label>
                                        <div className="invalid-feedback">Este campo es obligatorio</div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <select className="form-select" id="UOM-product" name="UOM" required>
                                                <option value="" selected disabled>Seleccione una opción</option>
                                                <option value="g">Gramos (g)</option>
                                                <option value="kg">Kilogramos (kg)</option>
                                                <option value="ml">Mililitros (ml)</option>
                                                <option value="l">Litros (L)</option>
                                                <option value="u">Unidades (u)</option>
                                            </select>
                                            <label htmlFor="UOM-product">Unidad de medida</label>
                                            <div className="invalid-feedback">Este campo es obligatorio</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Precio de compra */}
                            <div className="row g-2">
                                <div className="col-md-8">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">$</span>
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="purchase-price-product" placeholder="Precio de compra" value={purchasePrice} onChange={handlePurchasePriceChange} name="purchasePrice" required />
                                            <label htmlFor="purchase-price-product">Precio de compra</label>
                                            <div className="invalid-feedback">Este campo es obligatorio</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="profit-margin-product" placeholder="Ganancia" value={profitMargin} onChange={handleProfitMarginChange} />
                                            <label htmlFor="profit-margin-product">Ganancia</label>
                                        </div>
                                        <span className="input-group-text">%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Precio de venta */}
                            <div className="input-group mb-3">
                                <span className="input-group-text">$</span>
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="selling-price-product" placeholder="Precio de venta" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} name="sellingPrice" required />
                                    <label htmlFor="selling-price-product">Precio de venta</label>
                                    <div className="invalid-feedback">Este campo es obligatorio</div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Footer */}
                    <div className="modal-footer">
                        <button className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button className="btn btn-primary" type="submit" form="register-product-form">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}