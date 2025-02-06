import { useParams } from 'react-router-dom';
import OMDBApi, { SingleMovie } from "../shared/api/api";
import { LikedMoviesStore } from "../store/store";
import { useEffect, useState } from "react";
import moviePoster from "./img.jpg";
import ButtonBack from '../components/buttonBack';


const MoviePage = () => {
  const { imdbID } = useParams();
  const [searchResult, setSearchResult] = useState<SingleMovie | undefined>(undefined);
  const { addLikedMovies, removeLikedMovies, likedMovies } = LikedMoviesStore((state) => state);

  const likeMovie = () => {
    if (searchResult) {
      addLikedMovies(searchResult);
    }
  };

  const removeMovie = () => {
    if (searchResult) {
      removeLikedMovies(searchResult);
    }
  };

  const isLiked = likedMovies.some(liked => liked.imdbID === imdbID);

  useEffect(() => {
    const fetchMovie = async () => {
      if (imdbID) {
        console.log("ID:", imdbID);
        const res = await OMDBApi.searchSingleMovie(imdbID);
        console.log("res:", res);
        setSearchResult(res);
        console.log("Search result:", res);
      } else {
        console.log("ID undef");
      }
    };
    fetchMovie();
  }, [imdbID]);

  useEffect(() => {
    console.log("Updated:", searchResult);
  }, [searchResult]);

  return (
    <>
      <ButtonBack />
      {searchResult && (
        <div className="film_card">
          <img src={moviePoster} alt="poster"></img>
          <h3>{searchResult.Title}</h3>
          <div className="year_type_cont">
            <h4>Year: {searchResult.Year}</h4>
            <h4>Type: {searchResult.Type}</h4>
            <h4>Genre: {searchResult.Genre}</h4>
            <h4>Actors: {searchResult.Actors}</h4>
            <h4>Director: {searchResult.Director}</h4>
            <h4>Rating: {searchResult.Rated}</h4>
            <h4>Description:</h4><h5>{searchResult.Plot}</h5>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (isLiked) {
                removeMovie();
              } else {
                likeMovie();
              }
            }}
          >
            {isLiked ? "DISLIKE!!!!!!!" : "LIKE!!!!!!!"}
          </button>
        </div>
      )}
    </>
  );
};

export default MoviePage;
