import { createAction } from 'redux-actions'
import { getMoviesRequest } from './../api/movies'
import {
  UPDATE_MOVIE_LIST,
  REQUEST_MOVIE_DATA
} from './../constants/movieActions'

const updateMovieList = createAction(UPDATE_MOVIE_LIST)
const requestData = createAction(REQUEST_MOVIE_DATA)
const getMovies = () => {
  return (dispatch, getState) => {
    const { movies: { list } } = getState()
    if (list && list.length > 0) return
    dispatch(requestData())
    return getMoviesRequest(data => dispatch(updateMovieList(data)))
  }
}

export {
  updateMovieList,
  requestData,
  getMovies
}