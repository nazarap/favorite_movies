import React from 'react'
import PropTypes from 'prop-types'
import { getUser } from '../../actions/users'
import { connect } from 'react-redux'
import goTo from './../../helpers/goTo'
import session from './../../helpers/session'

export default ProtectedRoute => {
  class Auth extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      const sessionUserId = session.get()
      if (!this.props.user.id) {
        if (sessionUserId) {
          this.props.getUser(+sessionUserId)
        } else {
          goTo('login')
        }
      }
    }

    render() {
      return (
        <ProtectedRoute
          {...this.props}
        />
      )
    }
  }

  Auth.defaultProps = {
    user: {},
    isFetching: false
  }

  Auth.propTypes = {
    user: PropTypes.object,
    isFetching: PropTypes.bool
  }

  const mapStateToProps = state => ({
    user: state.users.current,
    isFetching: state.users.isFetching
  })

  const mapDispatchToProps = dispatch => ({
    getUser: id => {
      dispatch(getUser(id))
    },
  })

  return connect(mapStateToProps, mapDispatchToProps)(Auth)
}