import { useState, useEffect } from "react";

import './SearchBar.css'

function SearchBar({ onSubmit, onEnterSubmit }) {

    const handleInputChange = (e) => {
        onSubmit(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log("Enter")
            console.log(e.target.value)
            onEnterSubmit(true)
        }
    };

    return (
        <input
            type="text"
            placeholder="Search..."
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="search-input"
        />
    );
}

export default SearchBar;