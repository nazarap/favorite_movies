import React from 'react'
import Movies from './../components/Movies'
import TextField from '@material-ui/core/TextField'
import InfoMessage from './common/InfoMessage'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMovies } from '../actions/movies'
import auth from './hoc/Auth'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      search: ''
    }
    this.typeSearch = this.typeSearch.bind(this)
  }

  componentDidMount() {
    this.props.getMovies()
  }

  typeSearch(value) {
    this.setState({
      search: value
    })
  }

  render() {
    const searchText = this.state.search.toUpperCase()
    const movies = this.props.list.filter(movie => movie.title.toUpperCase().indexOf(searchText) > -1)
    return (
      <div>
        <TextField
          className="main-page__search"
          label="Type to search movies"
          margin="normal"
          onChange={e => this.typeSearch(e.target.value)}
        />
        <InfoMessage
          show={this.props.isFetching}
          text="Loading..."/>
        <Movies
          cols={4}
          list={movies}/>
      </div>
    )
  }
}

MainContainer.defaultProps = {
  list: []
}

MainContainer.propTypes = {
  list: PropTypes.array
}

const mapStateToProps = state => ({
  list: state.movies.list,
  isFetching: state.movies.isFetching
})

const mapDispatchToProps = dispatch => ({
  getMovies: () => {
    dispatch(getMovies())
  },
})

export default auth(connect(mapStateToProps, mapDispatchToProps)(MainContainer))
