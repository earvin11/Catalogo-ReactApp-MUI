import { createSlice } from '@reduxjs/toolkit';

export const articleSlice = createSlice({
    name: 'article',
    initialState: {
        isLoading: false,
        page: 0,
        articles: []
    },
    reducers: {
        startLoadingArticles: (state) => {
            state.isLoading = true;
        },
        setArticles: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.articles = action.payload.articles;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingArticles, setArticles } = articleSlice.actions;