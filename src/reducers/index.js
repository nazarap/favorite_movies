import { combineReducers } from 'redux'
import users from './users'
import genres from './genres'
import movies from './movies'

export default combineReducers({
  users,
  genres,
  movies
})