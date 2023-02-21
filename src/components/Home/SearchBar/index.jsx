import React from 'react'
import './style.css';

const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => {
    return (
        <div className='searchBar-wrap'>
            <form onSubmit={formSubmit}>
                <input type="text" onChange={handleSearchKey} placeholder='Buscar por título' value={value} />
                {value && <span onClick={clearSearch}>X</span>}
                <button>Enter</button>
            </form>
        </div>
    )
}

export default SearchBar;

