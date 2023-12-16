import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Link, Typography } from "@mui/material"
import { getMoviesByGenre } from "../helpers/getMoviesByGenre"
import { useMemo } from "react";


export const MovieCard = ({ genre }) => {

    const moviesByGenre = useMemo(() => getMoviesByGenre(genre), [genre]);


    return (
        <>
            {
                moviesByGenre.map((movie) => (
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mb: 2,
                            justifyContent: 'space-between',
                            width: { xs: '100px', sm: '110px', md: '150px', lg: '210px' },
                            boxShadow: 6
                        }}
                        key={movie.title}
                    >
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                height="140"
                                // image="/assets/img/imgMovies/car.jpg"
                                image={movie.posterurl}
                                alt={movie.title}
                                sx={{
                                    height: { xs: '140px', md: '190px', lg: '250px' }
                                }}
                            />
                            <CardContent sx={{ p: 1 }}>
                                <Typography gutterBottom variant="h4" fontSize={14} fontWeight={600}>{movie.title}</Typography>
                                {/* <Typography sx={{ display: { sm: 'none', md: 'flex' }, fontSize: { md: '12px' } }}>
                                    {movie.storyline}
                                </Typography> */}
                            </CardContent>
                        </CardActionArea>
                        <CardActions >
                            <Button color="primary" sx={{ fontSize: '10px', p: 0 }}>
                                View more...
                            </Button>
                        </CardActions>
                    </Card>
                ))
            }
        </>
    )
}
