import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Users from './../components/common/Users'
import { getUsers } from './../actions/users'
import { getMovies } from './../actions/movies'
import auth from './hoc/Auth'

class UsersContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getUsers()
    this.props.getMovies()
  }
  render() {
    return (
      <Users list={this.props.users}/>
    )
  }
}

UsersContainer.defaultProps = {
  users: []
}

UsersContainer.propTypes = {
  users: PropTypes.array
}

const mapStateToProps = state => ({
  users: state.users.list
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    dispatch(getUsers())
  },
  getMovies: () => {
    dispatch(getMovies())
  }
})

export default auth(connect(mapStateToProps, mapDispatchToProps)(UsersContainer))