import { get, post } from './api'

export const getUsersRequest = callback => get('api/users', callback)
export const getUserRequest = (callback, id) => get(`api/user?id=${id}`, callback)
export const loginRequest = (data, callback) => post('api/login', data, callback)