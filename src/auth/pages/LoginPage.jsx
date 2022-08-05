import { Box, Button, Grid, TextField } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';


export const LoginPage = () => {
  return (
    <Box>
        <AuthLayout title="Login" >

        <form>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mb: 2 }}>
              <TextField 
                label="Usuario" 
                type="text" 
                placeholder="Nombre de usuario"
                fullWidth 
            />
            </Grid>

            <Grid item xs={ 12 } sx={{ mb: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña"
                fullWidth 
            />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={ 12 } sm={ 12 }>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>

          </form>

        </AuthLayout>
    </Box>
  )
}
