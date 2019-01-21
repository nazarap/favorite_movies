import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Avatar, PageTitle } from '../styled'
import { connect } from 'react-redux'
import { getMovies, createMovie } from '../actions/movies'
import auth from './hoc/Auth'
import TextField from "@material-ui/core/TextField/TextField";

class CreateContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      img: ''
    }
    this.add = this.add.bind(this)
    this.typeInput = this.typeInput.bind(this)
  }

  componentDidMount() {
    this.props.getMovies()
  }

  add() {
    const { title, img } = this.state
    const movie = { title, img }
    this.props.createMovie(movie)
  }

  typeInput(type, value) {
    this.setState({
      [type]: value
    })
  }

  render() {
    return (
      <div>
        <Paper
          className="create-page__content"
          elevation={1}>
          <PageTitle>Create</PageTitle>
          <Avatar
            className="create-page__avatar"
            large
            alt="Avatar"
            src={this.state.img}/>
          <TextField
            className='create-page__input'
            label="Movie or serial name"
            variant="outlined"
            onChange={e => this.typeInput('title', e.target.value)}
          />
          <TextField
            className='create-page__input'
            label="Image URL"
            variant="outlined"
            onChange={e => this.typeInput('img', e.target.value)}
          />
          <Button
            className='create-page__btn'
            color="primary"
            variant="contained"
            onClick={this.add}
          >Save</Button>
        </Paper>
      </div>
    )
  }
}

CreateContainer.defaultProps = {}

CreateContainer.propTypes = {}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  createMovie: payload => {
    dispatch(createMovie(payload))
  },
  getMovies: () => {
    dispatch(getMovies())
  },
})

export default auth(connect(mapStateToProps, mapDispatchToProps)(CreateContainer))
