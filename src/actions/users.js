import { createAction } from 'redux-actions'
import { getUsersRequest, getUserRequest, loginRequest } from './../api/users'
import {
  UPDATE_CURRENT_USER,
  UPDATE_USER_LIST,
  REQUEST_USER_DATA,
  LOGIN_ERROR,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ADD_USER
} from './../constants/userActions'
import goTo from './../helpers/goTo'
import session from './../helpers/session'
import generate from './../helpers/generate'

const addFavorite = createAction(ADD_FAVORITE)
const removeFavorite = createAction(REMOVE_FAVORITE)
const updateCurrentUser = createAction(UPDATE_CURRENT_USER)
const updateUserList = createAction(UPDATE_USER_LIST)
const requestData = createAction(REQUEST_USER_DATA)
const loginError = createAction(LOGIN_ERROR)
const addUser = createAction(ADD_USER)
const getUsers = () => {
  return (dispatch, getState) => {
    const { users: { list } } = getState()
    if (list && list.length > 0) return
    dispatch(requestData())
    return getUsersRequest(data => dispatch(updateUserList(data)))
  }
}
const login = credentials => {
  return dispatch => {
    dispatch(requestData())
    return loginRequest(credentials, data => {
      const user = data.user
      if (user) {
        session.set(user.id)
        dispatch(updateCurrentUser(user))
        goTo('genres')
        return user
      }
      goTo('login')
      dispatch(loginError(data.error))
    })
  }
}
const logout = () => {
  return dispatch => {
    session.set(null)
    dispatch(updateCurrentUser(null))
    goTo()
  }
}
const getUser = id => {
  return dispatch => {
    dispatch(requestData())
    return getUserRequest(data => {
      const user = data.user
      if (user) {
        session.set(user.id)
        dispatch(updateCurrentUser(user))
        return user
      }
      goTo('login')
    }, id)
  }
}
const createUser = user => {
  return dispatch => {
    user.id = generate()
    session.set(user.id)
    dispatch(addUser(user))
    dispatch(updateCurrentUser(user))
    goTo('genres')
  }
}

export {
  updateCurrentUser,
  updateUserList,
  requestData,
  addFavorite,
  removeFavorite,
  loginError,
  getUsers,
  addUser,
  createUser,
  getUser,
  logout,
  login
}
