import { IMovie } from "../shared/api/api";
import { LikedMoviesStore } from "../store/store";
import Feed from "../components/Feed/Feed";
import ButtonBack from "../components/buttonBack";

const LikedMovies = () => {
  const { likedMovies } = LikedMoviesStore((state) => state);
  console.log(likedMovies);

  return (
    <div>
      <ButtonBack />
      {likedMovies.length === 0 ? (
        <h1>У вас нет лайкнутых фильмов</h1>
      ) : (
        <Feed movies={likedMovies} />
      )}
    </div>
  );
};

export default LikedMovies;
