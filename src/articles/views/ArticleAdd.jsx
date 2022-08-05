import { Button, Grid, TextField } from "@mui/material"



export const ArticleAdd = () => {
  return ( 

        <form>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mb: 2 }}>
              <TextField 
                label="Nº Lote" 
                type="text" 
                placeholder="Nº de lote"
                fullWidth 
            />
            </Grid>

            <Grid item xs={ 12 } sx={{ mb: 2 }}>
              <TextField 
                label="Referencia" 
                type="text" 
                placeholder="Referencia"       
                // variant="filled"
                fullWidth
                multiline
                minRows={ 5 } 
            />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={ 12 }>
                <Button variant='contained' color="success" fullWidth>
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </Grid>

        </form>

  )
}
