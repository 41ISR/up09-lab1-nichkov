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
        <Feed movies={likedMovies}/>
    </div>
    
  );
};
export default LikedMovies;

