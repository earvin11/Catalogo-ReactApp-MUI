import { Search } from "@mui/icons-material"
import { Button, Divider, Grid, TextField, Typography } from "@mui/material"

export const ArticleByName = () => {
  return (
    <Grid container direction='column' justifyContent='space-around' alignItems='center' sx={{ mb: 1 }}>
        <Grid item>
            <TextField 
                label="Busqueda" 
                type="text" 
                placeholder="Busca un artículo"
                fullWidth 
            />
            <Button color='info' variant="contained" fullWidth sx={{ padding: 1, my: 2 }}>
                <Search />
                Buscar
            </Button>
        </Grid>
            
        <Grid item>
            <Typography>Resultados:</Typography>
        </Grid>
    </Grid>
  )
}
