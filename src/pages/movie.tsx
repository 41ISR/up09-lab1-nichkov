import { useParams } from 'react-router-dom';
import OMDBApi, { SingleMovie } from "../shared/api/api";
import { LikedMoviesStore } from "../store/store";
import { useEffect, useState } from "react";
import moviePoster from "./img.jpg";


const MoviePage = () => {
  const {imdbID} = useParams();
  const [searchResult, setSearchResult]=useState<SingleMovie | undefined>(undefined)
  useEffect(() => {
    const fetchMovie = async () => {
      if (imdbID){
        console.log(imdbID)
        const res = await OMDBApi.searchSingleMovie(imdbID)
        setSearchResult(res.Search)
      }else{
        console.log("андафайнед")
      }
    }
    fetchMovie();
    console.log(searchResult)
  }, [])
  //const { addLikedMovies, removeLikedMovies, likedMovies } = LikedMoviesStore((state) => state);
  // const likeMovie = () => addLikedMovies(imdbID);
  // const removeMovie = () => removeLikedMovies(imdbID);
  // const isLiked = likedMovies.includes(imdbID);

  return (
    <>
      {searchResult && (
        <div className="film_card">
          <img src={moviePoster} alt="poster"></img>
          <h3>{searchResult.Title}</h3>
          <div className="year_type_cont">
            <h4>{searchResult.Year}</h4>
            <h4>{searchResult.Type}</h4>
          </div>
        </div>
      )}
    </>
      
      
    
  );
};
export default MoviePage;
//   onClick={(e) => {
      //     e.stopPropagation();
      //     if (isLiked) {
      //       removeMovie();
      //     } else {
      //       likeMovie();
      //     }
      //   }}
      // >
       //</div> {isLiked ? "DISLIKE!!!!!!!" : "LIKE!!!!!!!"}
      //</button>