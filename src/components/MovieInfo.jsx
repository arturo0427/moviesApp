import { Box, Chip, Divider, Grid, Rating, Typography } from "@mui/material"

export const MovieInfo = ({ movie }) => {

    return (
        <Grid container sx={{ flexDirection: { md: 'row' }, justifyContent: { xs: 'center', md: 'space-around' }, mt: 2, mb: 2, width: { md: 1000 } }}>
            <Box sx={{ mb: { xs: 1, sm: 2 } }}>
                <img src={movie.posterurl} alt={movie.title} />
            </Box>
            <Box sx={{ width: { md: 600 } }}>
                <Typography variant="h3" sx={{ mb: 2 }}>{movie.title}</Typography>
                <Typography>{movie.storyline}</Typography>

                <Box sx={{ mt: { xs: 2 } }}>
                    <Typography sx={{ mb: 0.5, fontWeight: 600 }} component="legend">Rating</Typography>
                    <Rating name="read-only" value={movie.rating} readOnly />
                </Box>
                <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography sx={{ mb: 0.5, fontWeight: 600 }}>Genres</Typography>
                    <Divider sx={{ mb: 2 }} />
                    {
                        movie.genres.map((genre) => (
                            <Chip key={genre} label={`${genre}`} sx={{ mr: 1 }} />
                        ))
                    }
                </Box>
            </Box>
        </Grid>
    )
}
