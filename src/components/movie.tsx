import { IMovie } from "../shared/api/api";
import { LikedMoviesStore } from "../store/store";
import { useNavigate } from "react-router-dom";
import moviePoster from "./img.jpg"
const Movie = (props: IMovie) => {
  const navigate = useNavigate();

  const { addLikedMovies, removeLikedMovies, likedMovies } = LikedMoviesStore((state) => state);
  const likeMovie = () => addLikedMovies(props);
  const removeMovie = () => removeLikedMovies(props);
  const isLiked = likedMovies.some(liked => liked.imdbID === props.imdbID);
  const goToMoviePage = () => {
    navigate(`/movie/${props.imdbID}`);
  };
  return (
    <div className="film_card" onClick={goToMoviePage} style={{cursor:'pointer'}}>
      <img src={moviePoster} alt="poster"></img>
      <h3>{props.Title}</h3>
      <div className="year_type_cont">
        <h4>Type: {props.Type}</h4>
        <h4>Year: {props.Year}</h4>
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
