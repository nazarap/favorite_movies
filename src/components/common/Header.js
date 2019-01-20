import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Header, Avatar, Link } from '../../styled'

export default () =>
  <Header
    className="header">
    <Paper
      className="header__content"
      elevation={1}
    >
      <Link
        to='/account'>
        <article
          className="user-info">
          <Typography
            className="user-info__name"
            variant="h6"
          >Nazar Oryshcuk
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg" />
        </article>
      </Link>
      <Link
        to='/login'>
        <Button
          className="header__bnt"
          color="primary"
        >logout</Button>
      </Link>
    </Paper>
  </Header>
