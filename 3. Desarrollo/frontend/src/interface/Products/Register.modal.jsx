import { useRef } from 'react';

export default function ModalRegisterProduct() {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = formRef.current;

        if (!form.checkValidity()) {
            event.stopPropagation();
        }

        form.classList.add('was-validated');
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
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="barcode-product" placeholder="Código de barras" required />
                                <label for="barcode-product">Código de barras</label>
                                <div className="invalid-feedback">Este campo es obligatorio</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="name-product" placeholder="Nombre del producto" required />
                                <label for="name-product">Nombre del producto</label>
                                <div className="invalid-feedback">Este campo es obligatorio</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="description-product" placeholder="Nombre del producto" />
                                <label for="description-product">Descripción</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="brand-product" placeholder="Marca" required />
                                <label for="brand-product">Marca</label>
                                <div className="invalid-feedback">Este campo es obligatorio</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="stock-product" placeholder="Stock" required />
                                <label for="stock-product">Stock</label>
                                <div className="invalid-feedback">Este campo es obligatorio</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="content-product" placeholder="Contenido neto" required />
                                <label for="content-product">Contenido neto</label>
                                <div className="invalid-feedback">Este campo es obligatorio</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="purchase-price-product" placeholder="Precio de compra" required />
                                <label for="purchase-price-product">Precio de compra</label>
                                <div className="invalid-feedback">Este campo es obligatorio</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="selling-price-product" placeholder="Precio de venta" required />
                                <label for="selling-price-product">Precio de venta</label>
                                <div className="invalid-feedback">Este campo es obligatorio</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="status-product" placeholder="Estado" required />
                                <label for="status-product">Estado</label>
                                <div className="invalid-feedback">Este campo es obligatorio</div>
                            </div>
                        </form>
                    </div>
                    {/* Footer */}
                    <div className="modal-footer">
                        <button className="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button className="btn btn-primary" type="submit" form="register-product-form">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}