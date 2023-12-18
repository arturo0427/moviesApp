import { useState } from 'react';
import { movies } from '../data/movies';
import { RootLayout } from '../layout';
import { Autocomplete, Divider, TextField, Typography } from '@mui/material';
import { getMovieByTitle } from '../helpers/getMovieByTitle';
import { MovieInfo } from '../components/';


export const SearchPage = () => {

  const [valueSearch, setValueSearch] = useState(movies[1].title);

  const getMovie = getMovieByTitle(valueSearch);

  return (
    <RootLayout>
      <Typography component='h2'
        sx={{
          fontWeight: 600,
          fontSize: 30,
          mb: 2
        }}
      >
        Search Movie
      </Typography>
      <Autocomplete
        disablePortal
        id="combo-box-movies"
        options={movies.map((option) => option.title)}
        sx={{ width: { xs: 'auto' }, mb: 2 }}
        renderInput={(params) => <TextField {...params} label="Search movie" />}
        value={valueSearch}
        onChange={(event, newValue) => { setValueSearch(newValue) }}
      />
      <Divider />

      {
        getMovie.map((movie) => (
          <MovieInfo key={movie.title} movie={movie} />
        ))
      }

    </RootLayout>
  )
}
