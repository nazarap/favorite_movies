import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { RegistrationPage, PageTitle, Link, Avatar } from '../styled'

export default () =>
  <RegistrationPage
    className='reg-page'>
    <Paper
      className='content reg-page__content'
      elevation={1}
    >
      <PageTitle>Create new account</PageTitle>
      <Avatar
        className="reg-page__avatar"
        large
        alt="Avatar"
        src="https://material-ui.com/static/images/avatar/1.jpg"/>

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          item
          xs={12} sm={5}
        >
          <TextField
            className='reg-page__input'
            label="First Name"
            variant="outlined"
          />
          <TextField
            className='reg-page__input'
            label="Last Name"
            variant="outlined"
          />
          <TextField
            className='reg-page__input'
            label="Image URL"
            variant="outlined"
          />
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          item
          xs={12} sm={5}
        >
          <TextField
            className="reg-page__input"
            label="Login"
            variant="outlined"
          />
          <TextField
            className="reg-page__input"
            label="Password"
            type="password"
            variant="outlined"
          />
          <TextField
            className="reg-page__input"
            label="Password"
            type="password"
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Button
        className="reg-page__button"
        variant="contained"
        color="primary"
      >Create new Account</Button>
      <Typography
        className="reg-page__login"
        variant="h6"
      >
        or
        <Link
          to='/login'>
          <Button
            color="primary"
          >login</Button>
        </Link>
      </Typography>
    </Paper>
  </RegistrationPage>
