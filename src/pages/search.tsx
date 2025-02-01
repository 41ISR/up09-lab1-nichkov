import React, { useEffect, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import OMDBApi, { IMovie } from "../shared/api/api";
import Movie from "../components/movie";
import { useNavigate } from "react-router-dom";
import Feed from "../components/Feed/Feed";
const Search =()=>{
    const [searchValue, setSearchValue]= useState("")
    const [searchResult, setSearchResult]=useState<IMovie[]>([])
    const navigate = useNavigate();
    const handleClick = async (e: React.FormEvent<HTMLFormElement>    )=>{
        e.preventDefault();
        const res = await OMDBApi.searchMovie(searchValue)
        setSearchResult(res.Search)
    }
    useEffect(()=>{
        console.log(searchValue)
    },[searchValue])
    const goToLikedMovies = () => {
        navigate(`/likedMovies`);
    };
    return(
        <>
            <h1>Search Movie</h1>
            <button onClick={goToLikedMovies}>LikedMovies</button>
            <form onSubmit={handleClick} action="">
                <Input value={searchValue} setValue={setSearchValue}/>
                <Button/>
            </form>
            <Feed movies={searchResult}/>

            {/* {searchResult.map((element) =>
                <Movie key={element.imdbID} {...element}/>
            )} */}
            
        </> 
    )
}
export default Search;