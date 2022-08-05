
import { ThemeProvider } from '@mui/material';
import { AppRouter } from './router/AppRouter';

import { theme } from './theme';

export const App = () => {
  return (
    <ThemeProvider theme={ theme }>

        <AppRouter />

    </ThemeProvider>
  )
}

