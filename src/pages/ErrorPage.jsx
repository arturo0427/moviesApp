import { Button, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"


export const ErrorPage = () => {

    const navigate = useNavigate()

    const onBack = () => {
        navigate('/');
    }

    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <Typography sx={{ fontWeight: 700, fontSize: 60 }}>Not Found</Typography>
            <Button size="large" variant='contained' color="error" onClick={onBack} sx={{ width: 200 }}>Back</Button>
        </Grid>
    )
}
