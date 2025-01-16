import { useEffect, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import OMDBApi, { IMovie } from "../shared/api/api";
import Movie from "../components/movie";

const Search =()=>{
    const [searchValue, setSearchValue]= useState("")
    const [searchResult, setSearchResult]=useState<IMovie[]>([])
    const handleClick = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const res = await OMDBApi.searchMovie(searchValue)
        setSearchResult(res.Search)
    }
    useEffect(()=>{
        console.log(searchValue)
    },[searchValue])
    return(
        <>
            <h1>Search Movie</h1>
            <form onSubmit={handleClick} action="">
                <Input value={searchValue} setValue={setSearchValue}/>
                <Button/>
            </form>
            {searchResult.map((element) =>
                <Movie key={element.imdbID} {...element}/>
            )}
            
        </> 
    )
}
export default Search;