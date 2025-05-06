import { useState, useEffect } from "react";

import './SearchBar.css'

function SearchBar({ onSubmit }) {

    const handleInputChange = (e) => {
        onSubmit(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search..."
            onChange={handleInputChange}
            className="search-input"
        />
    );
}

export default SearchBar;