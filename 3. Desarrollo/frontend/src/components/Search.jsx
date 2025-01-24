import { useState } from 'react';
import '../styles/searchbar.css';

export default function SearchBar({ data, fields, onFilter, placeholder }) {
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
        <div className="searchbar-container">
            <div className='searchbar-input-container'>
                Buscar: 
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input-table"
                />
            </div>
        </div>
    );
}
