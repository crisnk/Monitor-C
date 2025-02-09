import { useState } from 'react';

export default function SearchBar({ data, fields, onFilter }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [barcodeScanned, setBarcodeScanned] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);

        const filteredData = data.filter(item =>
            fields.some(field =>
                item[field]?.toString().toLowerCase().includes(event.target.value.toLowerCase())
            )
        );

        onFilter(filteredData);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita el envío de formulario si está dentro de uno
            setBarcodeScanned(true); // Marca que el último input fue un escaneo
        } else if (barcodeScanned) {
            // Si se presiona cualquier tecla después del Enter
            setSearchTerm(event.key); // Borra el input y escribe la nueva tecla
            setBarcodeScanned(false); // Restablece el estado del escáner
            event.preventDefault(); // Evita que la tecla se duplique
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar"
                className="form-control"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown} // Detecta Enter y otras teclas
            />
        </div>
    );
}
