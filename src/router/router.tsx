import { createBrowserRouter } from "react-router-dom";
import Movie from "../pages/movie";
import Search from "../pages/search";
import LikedMovies from "../pages/likedMovies";

const router = createBrowserRouter([
    {
        path:"/movie/:imdbID",
        element:<Movie />,
    },{
        index: true,
        element:<Search />,
    },{
        path:"/likedMovies",
        element:<LikedMovies />,
    }
])
export default router;