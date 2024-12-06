import React, { useState } from 'react';
//import './CaseSearchBar.css'; // Optional CSS for the search bar

const CaseSearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);  // Call the parent function with the search term
    };

    return (
        <form className="case-search-bar" onSubmit={handleSearch}>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by case type, location, etc."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default CaseSearchBar;
