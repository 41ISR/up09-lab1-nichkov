import { IMovie } from "../shared/api/api";
import { LikedMoviesStore } from "../store/store";
import { useNavigate } from "react-router-dom";

const Movie = (props: IMovie) => {
  const navigate = useNavigate();
  const likedOrNot=0

  const { addLikedMovies, removeLikedMovies, likedMovies } = LikedMoviesStore((state) => state);
  const likeMovie = () => addLikedMovies(props.imdbID);
  const removeMovie = () => removeLikedMovies(props.imdbID);
  
  return (
    <div className="film_card" >
      <img src={props.Poster} alt="poster"></img>
      <h3>{props.Title}</h3>
      <div className="year_type_cont">
        <h4>{props.Type}</h4>
        <h4>{props.Year}</h4>
      </div>
      <button
        onClick={function () {
          if (likedOrNot){
            removeMovie();
          }else{
            likeMovie();
          }
        }}
      >
        LIKE!!!!!!!
      </button>
    </div>
  );
};
export default Movie;
