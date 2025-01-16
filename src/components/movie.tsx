import { IMovie } from "../shared/api/api";
import { LikedMoviesStore } from "../store/store";
import { useNavigate } from "react-router-dom";
import moviePoster from "./img.jpg"
const Movie = (props: IMovie) => {
  const navigate = useNavigate();
  const likedOrNot=0

  const { addLikedMovies, removeLikedMovies, likedMovies } = LikedMoviesStore((state) => state);
  const likeMovie = () => addLikedMovies(props.imdbID);
  const removeMovie = () => removeLikedMovies(props.imdbID);
  const isLiked = likedMovies.includes(props.imdbID);
  const goToMoviePage = () => {
    navigate(`/movie/${props.imdbID}`);
  };
  return (
    <div className="film_card" onClick={goToMoviePage} style={{cursor:'pointer'}}>
      <img src={moviePoster} alt="poster"></img>
      <h3>{props.Title}</h3>
      <div className="year_type_cont">
        <h4>{props.Type}</h4>
        <h4>{props.Year}</h4>
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
  );
};
export default Movie;
