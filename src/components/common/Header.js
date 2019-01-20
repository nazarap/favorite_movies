import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Header, Avatar, Link, UserInfo } from '../../styled'

export default () =>
  <Header
    className="header">
    <Paper
      className="header__content"
      elevation={1}>
      <section
        className="header__panel">
        <Link
          to='/create'>
          <Button
            className="header__bnt"
            color="primary"
          >Create</Button>
        </Link>
        <Link
          to='/main'>
          <Button
            className="header__bnt"
            color="primary"
          >List of movies and series</Button>
        </Link>
        <Link
          to='/users'>
          <Button
            className="header__bnt"
            color="primary"
          >List of users</Button>
        </Link>
      </section>
      <section
        className="header__panel">
        <Link
          to='/account'>
          <UserInfo
            className="user-info">
            <Typography
              className="user-info__name"
              variant="h6"
            >Nazar Oryshcuk
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg" />
          </UserInfo>
        </Link>
        <Link
          to='/login'>
          <Button
            className="header__bnt"
            color="primary"
          >logout</Button>
        </Link>
      </section>
    </Paper>
  </Header>
