import { movies } from "../data/movies";

export const insertmovie = (data) => {
  movies.push({ ...data, id: movies.length + 1 });
};
