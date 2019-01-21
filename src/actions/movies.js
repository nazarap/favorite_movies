import { createAction } from 'redux-actions'
import { getMoviesRequest } from './../api/movies'
import {
  UPDATE_MOVIE_LIST,
  REQUEST_MOVIE_DATA,
  ADD_MOVIE
} from './../constants/movieActions'
import { addFavorite } from './users'
import generate from './../helpers/generate'
import goTo from './../helpers/goTo'

const updateMovieList = createAction(UPDATE_MOVIE_LIST)
const addMovie = createAction(ADD_MOVIE)
const requestData = createAction(REQUEST_MOVIE_DATA)

const getMovies = () => {
  return (dispatch, getState) => {
    const { movies: { list } } = getState()
    if (list && list.length > 0) return
    dispatch(requestData())
    return getMoviesRequest(data => dispatch(updateMovieList(data)))
  }
}

const createMovie = movie => {
  return dispatch => {
    movie.id = generate()
    dispatch(addFavorite(movie.id))
    dispatch(addMovie(movie))
    goTo('account')
  }
}

export {
  updateMovieList,
  requestData,
  getMovies,
  addMovie,
  createMovie
}
