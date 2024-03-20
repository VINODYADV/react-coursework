import { ReactElement } from "react";

function Search() {
    return (
        <>
        <label> OrderId </label>
        <input type="text"></input>
        <button id="search">Search</button>
        <select name="countries" id="countries"></select>
        </>
    );
}

export default Search;