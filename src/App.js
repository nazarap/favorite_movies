import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Router from './Router'
import { Provider } from 'react-redux'
import store from './store/index'

render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('root')
)
