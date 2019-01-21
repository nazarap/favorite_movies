import React from 'react'
import PropTypes from 'prop-types'
import MovieList from './common/Movies'
import { connect } from 'react-redux'
import { addFavorite, removeFavorite } from '../actions/users'

const MoviesContainer = (props) => {
  const hasMovie = id => props.user.favoriteList.includes(id)
  const actionType = id => hasMovie(id) ? 'Remove' : 'Add'
  const action = ({ id }) => hasMovie(id) ? props.removeFavorite(id) : props.addFavorite(id)
  return (
    <MovieList
      {...props}
      actionType={actionType}
      action={action}/>
  )
}

MoviesContainer.defaultProps = {
  user: {}
}

MoviesContainer.propTypes = {
  user: PropTypes.object
}

const mapStateToProps = state => ({
  user: state.users.current
})

const mapDispatchToProps = dispatch => ({
  addFavorite: id => {
    dispatch(addFavorite(id))
  },
  removeFavorite: id => {
    dispatch(removeFavorite(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)
