import { movies } from "../data/movies";

export const getMoviesByGenre = (genre = "") => {
  if (genre.length === 0) return [];

  return movies.filter((movie) => movie.genres.includes(genre));
};
