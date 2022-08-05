import { ArticleAdd, ArticlesScreen, Article, ArticleByName } from '../views/'
import { ArticlesLayout } from '../layout/ArticlesLayout'
import { Drawer } from '@mui/material'



export const ArticlesPage = () => {
  return (
    <ArticlesLayout>

        {/* Todos los articulos */}
        <ArticlesScreen />

        {/* Article */}
        {/* <Article /> */}

        {/* Nuevo articulo */}
        {/* <ArticleAdd /> */}

        {/* Busca un articulo */}
        {/* <ArticleByName /> */}

    </ArticlesLayout>
  )
}
