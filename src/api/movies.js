import { get } from './api'

export const getMoviesRequest = callback => get('api/movies', callback)
