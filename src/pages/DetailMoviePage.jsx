import { useNavigate, useParams } from 'react-router-dom'
import { getMovieById } from '../helpers/getMovieById';
import { RootLayout } from '../layout'
import { MovieInfo } from '../components';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

export const DetailMoviePage = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const movie = getMovieById(id);

    const onBack = () => {
        navigate('/moviesApp');
    }


    return (
        <RootLayout>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <IconButton onClick={onBack}>
                    <ArrowBack />
                </IconButton>
                <Typography component='h2'
                    sx={{
                        fontWeight: 600,
                        fontSize: 30,
                        ml: 2
                    }}
                >
                    Movie
                </Typography>
            </Box>
            <MovieInfo movie={movie} />
        </RootLayout>
    )
}
