import { IMovie } from "../shared/api/api";
import { LikedMoviesStore } from "../store/store";
import moviePoster from "./img.jpg"
const MoviePage = (props: IMovie) => {

  const { addLikedMovies, removeLikedMovies, likedMovies } = LikedMoviesStore((state) => state);
  const likeMovie = () => addLikedMovies(props.imdbID);
  const removeMovie = () => removeLikedMovies(props.imdbID);
  const isLiked = likedMovies.includes(props.imdbID);
  return (
    <div className="film_card">
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
export default MoviePage;
