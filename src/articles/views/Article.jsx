import { AddOutlined, ArrowBack, Delete } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Toolbar, Tooltip, Typography } from "@mui/material"
import { ImageGallery } from "../components";

const user = {
    id: '1',
    nombre: 'Earvin',
    apellido: 'Gómez',
    edad: 25
};

export const Article = () => {
  return (
    <Grid container direction='row' justifyContent='end' alignItems='center' sx={{ mb: 1 }}>
        <Grid item>
            <Button color='success' variant="contained" sx={{ padding: 1, mx: 2 }}>
                <ArrowBack sx={{ fontSize: 30 }} />
                Regresar
            </Button>
        </Grid>

        <Grid item>
            <Button color='error' variant="contained" sx={{ padding: 1 }}>
                <Delete sx={{ fontSize: 30 }} />
                Eliminar
            </Button>
        </Grid>
        <Toolbar />
        <Grid container direction='column'>
            <Typography fontSize={ 39 } fontWeight='light' >{ user.nombre }</Typography>
            <Typography>
                Referencia: { user.apellido }
            </Typography>

            
        </Grid>
        
        <ImageGallery />

        <Tooltip
            title="Agregar otra imagen"
        >
            <IconButton
            size='large'
            sx={{ 
            color: 'white',
            backgroundColor: 'secondary.main',
            ':hover': { backgroundColor: 'secondary.light', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50 
            }}
            >

                <AddOutlined sx={{ fontSize: 30 }} />

            </IconButton>

        </Tooltip>    

    </Grid>
  )
}