import { get } from './api'

export const getGenresRequest = callback => get('api/genres', callback)
