import React from "react";
import styles from "./SearchInput.module.css";

const SearchInput = ({ value, onChange, onSearch }) => {
    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Buscar cidade..."
                value={value}
                onChange={onChange}
                className={styles.searchInput}
            />
            <button onClick={onSearch} className={styles.searchButton}>
                🔍
            </button>
        </div>
    );
};

export default SearchInput;
