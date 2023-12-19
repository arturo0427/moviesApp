import { movies } from "../data/movies";

export const getMovieById = (id) => {
  const movie = movies.find((movie) => movie.id == id);
  return movie;
};
