import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { AboutPage, Link } from '../styled'

export default () =>
  <AboutPage
    className='about-page'>
    <Paper
      className='about-page__content'
      elevation={1}
    >
      <Typography
        variant="h2"
        component="h2"
      >Hello. It`s a social network to people who loves movies or series
      </Typography>

      <Typography
        className='about-page__text--description'
        variant="h5"
      >Here you can watch what other users are watching, search for interesting movies and series by category,
        and create your own list. You can not find a movie or series you like, create it yourself.
      </Typography>

      <Typography
        variant="h5"
      >
        If you have account
        <Link
          to='/login'>
          <Button
            className="about-page__button"
            color="primary"
          >Login</Button>
        </Link>

        or create a new one
        <Link
          to='/registration'>
          <Button
            className="about-page__button"
            color="primary"
          >Create account</Button>
        </Link>
      </Typography>
    </Paper>
  </AboutPage>
