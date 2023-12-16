import { movies } from "../data/movies";

export const getMovieByTitle = (title = "") => {
  return movies.filter((movie) => movie.title.includes(title));
};
