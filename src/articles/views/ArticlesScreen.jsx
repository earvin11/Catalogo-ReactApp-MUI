import { 
        Button,
        Card,
        CardActions,
        CardContent,
        Grid,
        Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../store/slices/articles/thunks';


export const ArticlesScreen = () => {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( getArticles() )
  }, [])

  const { articles = [], page, isLoading } = useSelector( state => state.article );

  return (
    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1, px: 6 }}>
          {
            articles.map( ({ name, url }) =>(
              <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } key={ url }>
                <Card sx={{ }}>
                <CardContent>
                  {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                  </Typography> */}
                  <Typography variant="h5" component="div">
                    { name }
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    { name }
                  </Typography>
                  <Typography variant="body2">
                    Url: { url }
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    variant="contained"
                    color="info"
                    fullWidth
                  >
                    Mas...
                  </Button>
                </CardActions>
                </Card>
              </Grid>
            ))
          }
          
          <Grid container my={ 8 } spacing={ 2 }>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                disabled={ isLoading ? true : (page === 1 ) ? true : false }
                onClick={ () => dispatch( getArticles(page) ) }
              >
                Anterior
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
            <Button
                fullWidth
                variant="contained"
                color="success"
                onClick={ () => dispatch( getArticles(page) ) }
                disabled={ isLoading }
              >
                Siguiente
              </Button>
            </Grid>
            
          </Grid>

        </Grid>
  );
}

