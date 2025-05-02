import { useState,useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import './SearchBar.css'

function SearchBar() {

    const [inputValue, setInputValue] = useState(""); // estado de lo que se escribe en la input

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <section className="search">
            <article className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={inputValue}
                    onChange={handleInputChange}
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    <SearchOutlinedIcon fontSize="small" />
                </button>
            </article>
        </section>
    );
}

export default SearchBar;