import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { Movies } from './../../styled'

const MovieItem = ({ movie, actionType, action }) => {
  const defaultImage = "https://www.maxim.com/.image/t_share/MTM1MTQ2MDQxMTU4NTA2OTc0/placeholder-title.jpg"
  return (
    <Movies.Item>
      <CardActionArea
        className='movie__action-area'>
        <Movies.Image
          className='movie__image'
          image={movie.img || defaultImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            className='movie__title'
            gutterBottom
            variant="h5"
            component="h2">
            {movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => action(movie)}>
          {actionType(movie.id)}
        </Button>
        <a
          className='movie__more'
          target="_blank"
          href={`https://www.google.com/search?q=${movie.title.split(' ').join('+')}+movie`}>
          <Button size="small" color="primary">
            More
          </Button>
        </a>
      </CardActions>
    </Movies.Item>
  )
}

MovieItem.defaultProps = {
  movie: {},
  actionType: () => 'Remove',
  action: () => {}
}

MovieItem.propTypes = {
  movie: PropTypes.object,
  actionType: PropTypes.func,
  action: PropTypes.func
}

export default MovieItem