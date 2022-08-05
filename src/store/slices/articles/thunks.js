import { pokemonApi } from '../../../api/pokemonApi';
import { setArticles, startLoadingArticles } from './articleSlice';


export const getArticles = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingArticles() )

        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${ page * 10 }`);

        dispatch( setArticles({ articles: data.results, page: page + 1 }) );
    }
}