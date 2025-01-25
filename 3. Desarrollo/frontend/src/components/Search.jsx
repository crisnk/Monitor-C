import { useState } from 'react';

export default function SearchBar({ data, fields, onFilter }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        const filteredData = data.filter(item => {
            return fields.some(field =>
                item[field].toString().toLowerCase().includes(searchTerm.toLowerCase())
            );
        });

        onFilter(filteredData);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar"
                className="form-control"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
}
