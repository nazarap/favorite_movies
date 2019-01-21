import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Movies from './../components/Movies'
import Genres from '../components/common/Genres'
import InfoMessage from './common/InfoMessage'
import { Link } from '../styled'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removePersonalGenre } from '../actions/genres'
import { getMovies } from '../actions/movies'
import auth from './hoc/Auth'
import filterBy from './../helpers/filterBy'

class Account extends React.Component {
  constructor(props) {
    super(props)

    this.remove = this.remove.bind(this)
  }

  componentDidMount() {
    this.props.getMovies()
  }

  remove(genre) {
    this.props.removePersonalGenre(genre.id)
  }

  render() {
    const user = this.props.user
    const movies = filterBy(this.props.movies, user.favoriteList)

    return (
      <div>
        <Paper
          className="acc-page__genres"
          elevation={1}>
          <Genres
            list={this.props.personal}
            onDelete={this.remove}
            header='Your genres:'/>
          <Link
            to='/genres'>
            <Button
              color="primary"
            >Edit</Button>
          </Link>
        </Paper>
        <InfoMessage
          show={this.props.isFetching}
          text="Loading..."/>
        <Movies
          list={movies}/>
      </div>
    )
  }
}

Account.defaultProps = {
  movies: [],
  personal: [],
  user: {},
  isFetching: false
}

Account.propTypes = {
  movies: PropTypes.array,
  personal: PropTypes.array,
  user: PropTypes.object,
  isFetching: PropTypes.bool
}

const mapStateToProps = state => ({
  movies: state.movies.list,
  personal: state.genres.personal,
  user: state.users.current,
  isFetching: state.movies.isFetching
})

const mapDispatchToProps = dispatch => ({
  removePersonalGenre: payload => {
    dispatch(removePersonalGenre(payload))
  },
  getMovies: () => {
    dispatch(getMovies())
  },
})

export default auth(connect(mapStateToProps, mapDispatchToProps)(Account))