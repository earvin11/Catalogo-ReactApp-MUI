import { Routes, Route } from 'react-router-dom';

import { ArticlesPage } from '../articles/pages/ArticlesPage';
import { LoginPage } from '../auth/pages/';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <ArticlesPage /> } />

        <Route path='/auth' element={ <LoginPage /> } />
    </Routes>
  )
}
