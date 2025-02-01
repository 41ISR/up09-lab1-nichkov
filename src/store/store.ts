import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IMovie } from "../shared/api/api";

interface LikedMovies {
  likedMovies: IMovie[];
  addLikedMovies: (movie: IMovie) => void;
  removeLikedMovies: (movie: IMovie) => void;
}

export const LikedMoviesStore = create<LikedMovies>()(
  persist(
    (set) => ({
      likedMovies: [],
      addLikedMovies: (movie) => {
        set((state) => {
          return { ...state, likedMovies: [...state.likedMovies, movie] };
        });
      },
      removeLikedMovies: (movie) => {
        set((state) => {
          return {
            ...state,
            likedMovies: [...state.likedMovies.filter((aId) => aId.imdbID !== movie.imdbID)],
          };
        });
      },
    }),
    {
      name: "likedMovies",
    }
  )
);

//persist(
//     (set, get) => ({
//       LikedMovies: 0,
//       increaseLikedMovies: () => set((state) => ({ Like: state.Like + 1 })),
//       removeLikedMovies: () => set({ Like: state.Like - 1 })
// })))
