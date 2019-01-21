import { handleActions } from 'redux-actions'
import {
  updateMovieList,
  requestData,
  addMovie
} from './../actions/movies'

const initialState = {
  list: [],
  isFetching: false
}

export default handleActions({
  [updateMovieList]: (state, action) => (
    {...state, list: action.payload, isFetching: false}
  ),
  [requestData]: (state, action) => (
    {...state, isFetching: true}
  ),
  [addMovie]: (state, action) => (
    {...state, list: [...state.list, action.payload]}
  ),
}, initialState)
