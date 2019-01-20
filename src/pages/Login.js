import React from 'react'
import Paper from '@material-ui/core/Paper'
import { LoginPage } from '../styled'
import Login from './../components/Login'

export default () =>
  <LoginPage
    className='login-page'>
    <Paper
      className='content login-page__content'
      elevation={1}>
      <Login/>
    </Paper>
  </LoginPage>
