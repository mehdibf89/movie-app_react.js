import React from "react";

const SearchBar = (props) => {
    return (
        <form>
            <input 
            className="search-bar" 
            value={props.searchValue} 
            onChange={(event)=> props.setSearchValue(event.target.value)}
            placeholder="Search"
            ></input>
        </form>
    )
}

export default SearchBar;
