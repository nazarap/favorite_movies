import { createAction } from 'redux-actions'
import { getGenresRequest } from './../api/genres'
import {
  UPDATE_PERSONAL_GENRES,
  UPDATE_GENRE_LIST,
  REQUEST_GENRES_DATA,
  ADD_PERSONAL_GENRE,
  REMOVE_PERSONAL_GENRE
} from './../constants/genreActions'

const updatePersonalGenres = createAction(UPDATE_PERSONAL_GENRES)
const updateGenreList = createAction(UPDATE_GENRE_LIST)
const requestData = createAction(REQUEST_GENRES_DATA)
const addPersonalGenre = createAction(ADD_PERSONAL_GENRE)
const removePersonalGenre = createAction(REMOVE_PERSONAL_GENRE)
const getGenres = () => {
  return (dispatch, getState) => {
    const { genres: { list } } = getState()
    if (list && list.length > 0) return
    dispatch(requestData())
    return getGenresRequest(data => dispatch(updateGenreList(data)))
  }
}

export {
  updatePersonalGenres,
  updateGenreList,
  requestData,
  addPersonalGenre,
  removePersonalGenre,
  getGenres
}