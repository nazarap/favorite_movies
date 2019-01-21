import { handleActions } from 'redux-actions'
import _remove from 'lodash/remove'
import {
  updatePersonalGenres,
  updateGenreList,
  addPersonalGenre,
  removePersonalGenre,
  requestData
} from './../actions/genres'

const initialState = {
  list: [],
  personal: [],
  isFetching: false
}

export default handleActions({
  [updateGenreList]: (state, action) => (
    {...state, list: action.payload, isFetching: false}
  ),
  [updatePersonalGenres]: (state, action) => (
    {...state, personal: action.payload}
  ),
  [addPersonalGenre]: (state, action) => (
    {...state, personal: [...state.personal, action.payload]}
  ),
  [removePersonalGenre]: (state, action) => {
    const personal = state.personal
    _remove(personal, {id: action.payload})
    return {...state, personal: [...personal]}
  },
  [requestData]: (state, action) => (
    {...state, isFetching: true}
  ),
}, initialState)