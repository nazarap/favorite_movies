import React from 'react'
import Paper from '@material-ui/core/Paper'
import { RegistrationPage } from '../styled'
import Registration from './../components/Registration'

export default () =>
  <RegistrationPage
    className='reg-page'>
    <Paper
      className='content reg-page__content'
      elevation={1}>
      <Registration/>
    </Paper>
  </RegistrationPage>
