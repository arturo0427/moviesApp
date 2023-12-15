import { Divider, Grid, Typography } from '@mui/material'
import { MovieCard } from './'

export const MoviesCategories = ({ genre }) => {
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
            <Typography component='h2' fontWeight={700} fontSize={25}>{genre}</Typography>
            <Divider />
            <Grid
                item
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',                   
                    gap: 2,
                    mt: 2
                }}
            >
                <MovieCard genre={genre} />
            </Grid>
        </Grid>
    )
}
