import React from 'react'
import './style.css';

const SearchBar = ({value, handleSeachKey, clearSearch, formSubmit}) => {
    return (
        <div className='searchBar-wrap'>
            <form onSubmit={formSubmit}>
                <input type="text" onChange={{ handleSeachKey }} placeholder='Buscar por categoría' value={value} />
                {value && <span onClick={clearSearch}>X</span>}
                <button>Go</button>
            </form>
        </div>
    )
}

export default SearchBar;

