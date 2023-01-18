import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { MovieType, MovieDetailType } from '../../Type'
import { RootState } from '../store'
import moveApi from '../../common/apis/MoveApi'
import { APIKey } from '../../common/apis/MoveApiKey'
import axios, { AxiosResponse } from 'axios'
import MovieDetail from '../../components/MovieDetail/MovieDetail'

export const fetchAsyncMovies: any = createAsyncThunk('movies/fetchAsyncMovies', async (todoInputRef:string) => {
    const response: any = await moveApi.get<MovieType[]>(
        `?s=${todoInputRef}&apiKey=${APIKey}`
    )
        .catch((err) => {
            console.log("Err:", err);
        });
    return response.data
})
export const fetchAsyncShows: any = createAsyncThunk('movies/fetchAsyncShows', async (todoInputRef:string) => {
    console.log('>>>>>>TODO REFF',todoInputRef);
    const response: any = await moveApi.get<MovieType[]>(
        `?s=${todoInputRef}&apiKey=${APIKey}`
    )
        .catch((err) => {
            console.log("Err:", err);
        });
    return response.data
})

export const fetchAsyncMovieOrShowDetail: any = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id: any) => {
    console.log('id', id);
    // http://www.omdbapi.com/?i=tt1201607&apikey=490ef0c8&plot=full
    const response: any = await moveApi.get<MovieDetailType[]>(
        `?i=${id}&apiKey=490ef0c8`
    )
        .catch((err) => {
            console.log("Err:", err);
        });
    return response.data
})

export interface MovieStateType1 {
    Response: string
    Search: MovieType[]
    totalResults: string
    movies: MovieType[]
    shows: MovieType[]
    selectMovieOrShow: MovieDetailType[]
}

const initialState: MovieStateType1 = {
    movies: [],
    shows: [],
    Response: '',
    totalResults: '',
    Search: [],
    selectMovieOrShow: []
}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        addMovies: (state, action: PayloadAction<MovieStateType1>) => {
            console.log("REDUCER ADD", action.payload.Response);
            state.movies = action.payload.Search
            state.Response = action.payload.Response
            state.totalResults = action.payload.totalResults
        },
        removeSelectedMovieOrShows: (state) => {

            state.selectMovieOrShow = []
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchAsyncMovies.pending, (state: MovieStateType1, action) => {
            console.log("Pending");
        })
        builder.addCase(fetchAsyncMovies.fulfilled, (state: MovieStateType1, action) => {
            console.log("Fetched Succesfully", action);
            return {
                ...state,
                movies: action.payload.Search,
                Response: action.payload.Response,
                totalResults: action.payload.totalResults,

            }
        })
        builder.addCase(fetchAsyncMovies.rejected, (state: MovieStateType1, action) => {
            console.log("Recjected", action);
            return {
                ...state,
            }
        })
        builder.addCase(fetchAsyncShows.fulfilled, (state: MovieStateType1, action) => {
            console.log("Fetched Succesfully", action);
            return {
                ...state,
                shows: action.payload.Search,
                Response: action.payload.Response,
                totalResults: action.payload.totalResults,
            }
        })
        builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state: MovieStateType1, action) => {
            console.log("Fetched Succesfully", action);
            return {
                ...state,
                selectMovieOrShow: action.payload
            }
        })
    }
})

export const { addMovies, removeSelectedMovieOrShows } = movieSlice.actions
export default movieSlice.reducer
export const getAllMovies = (state: RootState) => state.reducer
export const getAllShows = (state: RootState) => state.reducer
export const getSelectedMovieOrShows = (state: RootState) => state.reducer.selectMovieOrShow

export type MovieSliceActionsType = typeof movieSlice.actions
export type MovieSliceReducerType = typeof movieSlice.reducer


/* 

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MovieType } from '../../Type'
import { RootState } from '../store'

export interface MovieStateType1 {
    Response:string
    Search:MovieType[]
    totalResults:string
}
export interface MovieStateType {
    movies:Object
    Response:string
    Search:MovieType[]
    totalResults:string
}

const initialState:MovieStateType = {
    movies: {},
    Response:'',
    Search:[],
    totalResults:''
}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        addMovies: (state, action:PayloadAction<MovieStateType>) => {
            console.log("REDUCER ADD",action.payload);
            state.movies = action.payload.Search
            
        }
    }

})

export const { addMovies } = movieSlice.actions
export default movieSlice.reducer
export const getAllMovies = (state:RootState) => state.reducer.movies

export type MovieSliceActionsType = typeof movieSlice.actions
export type MovieSliceReducerType = typeof movieSlice.reducer
*/