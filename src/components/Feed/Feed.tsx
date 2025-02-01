import { IMovie } from "../../shared/api/api";
import Movie from "../movie";

interface FeedProps {
    movies: IMovie[];
}

const Feed = ({ movies }: FeedProps) => {
    return (
        <div className="feed">
            {movies.map((element) => (
                <Movie key={element.imdbID} {...element} />
            ))}
        </div>
    );
}

export default Feed;
