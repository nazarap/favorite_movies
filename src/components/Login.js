import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import { PageTitle, Link } from '../styled'
import { login } from './../actions/users'
import InfoMessage from './common/InfoMessage'

class LoginContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: ''
    }
    this.typeInput = this.typeInput.bind(this)
  }

  typeInput(type, value) {
    this.setState({
      [type]: value
    })
  }

  render() {
    const { login, password } = this.state
    const loginUser = this.props.loginUser
    const error = this.props.error

    return (
      <div>
        <PageTitle>Login</PageTitle>
        <TextField
          className='login-page__input'
          label="Login"
          variant="outlined"
          onChange={e => this.typeInput('login', e.target.value)}
        />
        <TextField
          className='login-page__input'
          type="password"
          label="Password"
          variant="outlined"
          onChange={e => this.typeInput('password', e.target.value)}
        />
        <InfoMessage
          show={error}
          text="Login error"/>
        <Button
          className="login-page__button"
          variant="contained"
          color="primary"
          onClick={() => loginUser({login, password})}
        > Login </Button>
        <Typography
          className="login-page__registration"
          variant="h6"
        >
          or
          <Link
            to='/registration'>
            <Button
              color="primary"
            >Create new Account</Button>
          </Link>
        </Typography>
      </div>
    )
  }
}

LoginContainer.defaultProps = {
  error: false
}

LoginContainer.propTypes = {
  error: PropTypes.bool
}

const mapStateToProps = state => ({
  error: state.users.error
})

const mapDispatchToProps = dispatch => ({
  loginUser: credentials => {
    dispatch(login(credentials))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
