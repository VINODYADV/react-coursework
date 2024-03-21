import { ChangeEvent, FormEvent, ReactElement, useState } from "react";

const Search = (): JSX.Element =>{

    const [searchTerm, setSearchTerm] = useState("");
const [valid, setValid] = useState<boolean>(false);
const [touched, setTouched] = useState<boolean>(false);
    
const doSearch = (event : FormEvent<HTMLFormElement> ): void=>{
    event.preventDefault();
        console.log(searchTerm);
    } 

    const handelChange = (event :ChangeEvent<HTMLInputElement>) :void=> {
     console.log('ONchange')
     setValid(event.target.value.trim().length > 0);  
     setTouched(true);
        setSearchTerm(event.target.value);
    }
    return (
        <div className="searchBox">
        <form onSubmit={doSearch}>
        <label id="orderId"> OrderId </label>
        <input id="orderId" type="text" value={searchTerm} className={touched && !valid ? 'searchBoxError' :''} onChange={handelChange}></input>
        <button id="search" type="submit" disabled={!valid}>Search</button>
        </form>
        </div>
    );
}

export default Search;