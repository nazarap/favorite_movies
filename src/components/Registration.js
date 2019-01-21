import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { PageTitle, Link, Avatar } from '../styled'
import { connect } from 'react-redux'
import { createUser } from '../actions/users'

class RegistrationContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      favoriteList: [],
      login: '',
      password: '',
      img: ''
    }
    this.create = this.create.bind(this)
    this.typeInput = this.typeInput.bind(this)
  }

  create() {
    const { firstName, lastName, favoriteList, login, password, img } = this.state
    const user = { firstName, lastName, favoriteList, login, password, img }
    this.props.createUser(user)
  }

  typeInput(type, value) {
    this.setState({
      [type]: value
    })
  }

  render() {
    return (
      <div>
        <PageTitle>Create new account</PageTitle>
        <Avatar
          className="reg-page__avatar"
          large
          alt="Avatar"
          src={this.state.img}/>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            item
            xs={12} sm={5}>
            <TextField
              className='reg-page__input'
              label="First Name"
              variant="outlined"
              onChange={e => this.typeInput('firstName', e.target.value)}
            />
            <TextField
              className='reg-page__input'
              label="Last Name"
              variant="outlined"
              onChange={e => this.typeInput('lastName', e.target.value)}
            />
            <TextField
              className='reg-page__input'
              label="Image URL"
              variant="outlined"
              onChange={e => this.typeInput('img', e.target.value)}
            />
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            item
            xs={12} sm={5}>
            <TextField
              className="reg-page__input"
              label="Login"
              variant="outlined"
              onChange={e => this.typeInput('login', e.target.value)}
            />
            <TextField
              className="reg-page__input"
              label="Password"
              type="password"
              variant="outlined"
              onChange={e => this.typeInput('password', e.target.value)}
            />
          </Grid>
        </Grid>

        <Button
          className="reg-page__button"
          variant="contained"
          color="primary"
          onClick={this.create}>
          Create new Account</Button>

        <Typography
          className="reg-page__login"
          variant="h6">
          or
          <Link
            to='/login'>
            <Button
              color="primary">
              login</Button>
          </Link>
        </Typography>
      </div>
    )
  }
}

RegistrationContainer.defaultProps = {}

RegistrationContainer.propTypes = {}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  createUser: user => {
    dispatch(createUser(user))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)
