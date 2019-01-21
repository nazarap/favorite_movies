import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Header as StyledHeader, Avatar, Link, UserInfo } from '../../styled'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../actions/users'

const Header = ({ user, logoutUser }) =>
  <StyledHeader
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
            >{user.firstName} {user.lastName}
            </Typography>
            <Avatar
              alt={`${user.firstName} ${user.lastName}`}
              src={user.img} />
          </UserInfo>
        </Link>
        <Button
          className="header__bnt"
          color="primary"
          onClick={logoutUser}
        >logout</Button>
      </section>
    </Paper>
  </StyledHeader>


Header.defaultProps = {
  user: {}
}

Header.propTypes = {
  user: PropTypes.object
}

const mapStateToProps = state => ({
  user: state.users.current
})

const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
