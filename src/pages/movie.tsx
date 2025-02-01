import { useParams } from 'react-router-dom';
import OMDBApi, { SingleMovie } from "../shared/api/api";
import { LikedMoviesStore } from "../store/store";
import { useEffect, useState } from "react";
import moviePoster from "./img.jpg";
import ButtonBack from '../components/buttonBack';


const MoviePage = () => {
  const {imdbID} = useParams();
  const [searchResult, setSearchResult]=useState<SingleMovie | undefined>(undefined)
  useEffect(() => {
    const fetchMovie = async () => {
      if (imdbID) {
        console.log("ID:", imdbID);
        const res = await OMDBApi.searchSingleMovie(imdbID);
        console.log("res:", res);
        setSearchResult(res.Search);
        console.log("Search result:", res.Search);
      } else {
        console.log("ID undef");
      }
    };
    fetchMovie();
  }, [imdbID]);
  useEffect(() => {
    console.log("Updated:", searchResult);
  }, [searchResult]);
  //const { addLikedMovies, removeLikedMovies, likedMovies } = LikedMoviesStore((state) => state);
  // const likeMovie = () => addLikedMovies(imdbID);
  // const removeMovie = () => removeLikedMovies(imdbID);
  // const isLiked = likedMovies.includes(imdbID);

  return (
    <>
      <ButtonBack />
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