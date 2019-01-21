import fetch from 'cross-fetch'
import API from './../constants/api'

export const get = (url, callback) =>
  fetch(`${API}${url}`)
    .then(response => response.json())
    .then(json => callback(json))

export const post = (url, body, callback) =>
  fetch(`${API}${url}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(json => callback(json))
