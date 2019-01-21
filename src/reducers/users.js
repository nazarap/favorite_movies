import { handleActions } from 'redux-actions'
import _remove from 'lodash/remove'
import {
  updateCurrentUser,
  updateUserList,
  requestData,
  loginError,
  addFavorite,
  removeFavorite
} from './../actions/users'

const initialState = {
  list: [],
  current: {
    firstName: null,
    lastName: null,
    favoriteList: [],
    genresList: []
  },
  isFetching: false,
  error: null
}

export default handleActions({
  [updateUserList]: (state, action) => (
    {...state, list: action.payload, isFetching: false}
  ),
  [updateCurrentUser]: (state, action) => (
    {...state, current: action.payload, error: null, isFetching: false}
  ),
  [requestData]: (state, action) => (
    {...state, isFetching: true}
  ),
  [loginError]: (state, action) => (
    {...state, error: true}
  ),
  [addFavorite]: (state, action) => {
    state.current.favoriteList.push(action.payload)
    return {...state, current: {...state.current}}
  },
  [removeFavorite]: (state, action) => {
    _remove(state.current.favoriteList, id => id === action.payload)
    return {...state, current: {...state.current}}
  },
}, initialState)