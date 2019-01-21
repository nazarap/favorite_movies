import { handleActions } from 'redux-actions'
import {
  updateMovieList,
  requestData
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
}, initialState)