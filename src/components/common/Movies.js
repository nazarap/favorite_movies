import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'
import _take from 'lodash/take'
import { Movies } from './../../styled'

const MovieList = ({ list, cols, count, ...props }) => {
  const takeCount = count || list.length

  return (
    <Movies.List {...props}>
      <GridList
        className="acc-page__list"
        cellHeight="auto"
        cols={cols}
        spacing={10}>
        {_take(list, takeCount).map((tile, index) => (
          <GridListTile key={index}>
            <MovieItem movie={tile}/>
          </GridListTile>
        ))}
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