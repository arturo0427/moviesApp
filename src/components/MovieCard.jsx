import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { getMoviesByGenre } from "../helpers/getMoviesByGenre"
import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import queryString from 'query-string';


export const MovieCard = ({ genre }) => {

    const navigate = useNavigate();
    const location = useLocation();


    const { q = '' } = queryString.parse(location.search);

    const moviesByGenre = useMemo(() => getMoviesByGenre(genre), [genre]);


    const onViewMore = (id) => {
        

        navigate(`movie/${id}`);
    }


    return (
        <>
            {
                moviesByGenre.map((movie, index) => (
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mb: 2,
                            justifyContent: 'space-between',
                            width: { xs: '100px', sm: '110px', md: '150px', lg: '210px' },
                            boxShadow: 6
                        }}
                        key={index}
                    >
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                height="140"
                                image={movie.posterurl}
                                alt={movie.title}
                                sx={{
                                    height: { xs: '140px', md: '190px', lg: '250px' }
                                }}
                            />
                            <CardContent sx={{ p: 1 }}>
                                <Typography gutterBottom variant="h4" fontSize={14} fontWeight={600}>{movie.title}</Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions >
                            <Button onClick={() => onViewMore(movie.id)} color="primary" sx={{ fontSize: '10px', p: 0 }}>
                                View more...
                            </Button>
                        </CardActions>
                    </Card >
                ))
            }
        </>
    )
}
