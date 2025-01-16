import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface LikedMovies {
  likedMovies: string[];
  addLikedMovies: (id: string) => void;
  removeLikedMovies: (id: string) => void;
}

export const LikedMoviesStore = create<LikedMovies>()(
  persist(
    (set) => ({
      likedMovies: [],
      addLikedMovies: (id) => {
        set((state) => {
          return { ...state, likedMovies: [...state.likedMovies, id] };
        });
      },
      removeLikedMovies: (id) => {
        set((state) => {
          return {
            ...state,
            likedMovies: [...state.likedMovies.filter((aId) => aId !== id)],
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
