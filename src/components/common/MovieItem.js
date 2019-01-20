import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Movies } from './../../styled'

export default ({ movie }) =>
  <Movies.Item>
    <CardActionArea>
      <Movies.Image
        className='movie__image'
        image={movie.img}
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
      <Button size="small" color="primary">
        Remove
      </Button>
      <Button size="small" color="primary">
        More
      </Button>
    </CardActions>
  </Movies.Item>