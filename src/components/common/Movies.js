import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'
import _take from 'lodash/take'
import { Movies } from './../../styled'

const MovieList = ({ list, cols, count, actionType, action, ...props }) => {
  const takeCount = count || list.length

  return (
    <Movies.List
      className="movies"
      {...props}>
      <GridList
        className="movies__list"
        cellHeight="auto"
        cols={cols}
        spacing={10}>
        {
          _take(list, takeCount).map((movie, index) => (
            <GridListTile key={index}>
              <MovieItem
                movie={movie}
                actionType={actionType}
                action={action}/>
            </GridListTile>
          ))
        }
      </GridList>
    </Movies.List>
  )
}


MovieList.defaultProps = {
  list: [],
  count: 0,
  cols: 3
}

MovieList.propTypes = {
  list: PropTypes.array,
  count: PropTypes.number,
  cols: PropTypes.number
}

export default MovieList