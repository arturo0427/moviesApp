import { Alert, Autocomplete, Box, Button, Divider, Snackbar, TextField, Typography } from '@mui/material'
import { RootLayout } from '../layout/RootLayout'
import { genres } from '../data/genres'
import { Controller, useForm } from 'react-hook-form'
import { insertmovie } from '../helpers/insertMovie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const AddMoviePage = () => {


    const { register, handleSubmit, control, formState: { errors }, reset } = useForm();

    const [openSnackBar, setOpenSnackBar] = useState(false);

    const navigate = useNavigate();


    const onSubmit = (data) => {
        insertmovie(data);
        setOpenSnackBar(true);

        reset();

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
        navigate('/')
    };


    return (
        <RootLayout>
            <Typography component='h2'
                sx={{
                    fontWeight: 600,
                    fontSize: 30,
                    mb: 1
                }}
            >
                Add Movie
            </Typography>

            <Box
                component='form'
                onSubmit={handleSubmit(onSubmit)}
                sx={{ display: 'flex', flexDirection: 'column', height: 400, width: { md: 700 }, justifyContent: 'space-around' }}
            >
                <TextField label='Title' {...register('title', { required: 'Title is required' })} error={!!errors.title} helperText={errors.title?.message} />

                <TextField
                    defaultValue={'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg'}
                    label='Image Url' {...register('posterurl', { required: 'Image url is required' })}
                    error={!!errors.posterurl} helperText={errors.posterurl?.message}
                />
                <TextField label='Story' multiline rows={4} {...register('storyline', { required: 'Title is required' })}
                    error={!!errors.storyline} helperText={errors.storyline?.message}
                />
                <Controller
                    name="genres"
                    control={control}
                    defaultValue={[]}
                    rules={{ required: 'Genres is required' }}
                    render={({ field }) => (
                        <Autocomplete
                            {...field}
                            multiple
                            options={genres}
                            getOptionLabel={(option) => option}
                            onChange={(_, selectedOptions) => field.onChange(selectedOptions)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Select Genres"
                                    variant="outlined"
                                    error={!!errors.genres}
                                    helperText={errors.genres?.message}
                                />
                            )}
                        />
                    )}
                />
                <Button type='submit' variant='contained' size='large' sx={{ width: { md: 300 } }}>Save</Button>

            </Box>

            <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    A movie has been inserted!
                </Alert>
            </Snackbar>

        </RootLayout>
    )
}
