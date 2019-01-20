import React from 'react'
import PropTypes from 'prop-types'
import _isFunction from 'lodash/isFunction'
import bindCallback from '../../helpers/bindCallback'
import { Genres, Chip } from '../../styled'

const GenresGroup = props => {
  /**
   * @function buildList - to create dom list of chips elements by list
   * @param {Array} list -
   * [
   *  { name: String }
   * ]
   * @return {JSX}
   */
  const buildList = list =>
    <Genres.List>
      {
        list && list.map((genre, index) => (
          <Chip
            label={ genre.name }
            component="a"
            clickable={props.disable(genre, index) && _isFunction(props.onClick)}
            onClick={bindCallback(props.onClick, genre, index)}
            onDelete={bindCallback(props.onDelete, genre, index)}
            key={genre.id}
          />
        ))
      }
    </Genres.List>
  /**
   * @function buildGroup - to create dom group of genres elements by group
   * @param {Array} group -
   * [{
   *  header: String,
   *  list: [
   *    { name: String }
   *  ]
   * }]
   * @return {JSX}
   */
  const buildGroup = group =>
    <Genres.Group>
      {
        group && group.map((genres, index) => (
          <div
            key={index}>
            <Genres.Header>{ genres.header }</Genres.Header>
            { buildList(genres.list) }
          </div>
        ))
      }
    </Genres.Group>

  return (
    <div
      className={props.className}>
      <Genres.Header>{props.header}</Genres.Header>
      { buildList(props.list) }
      { buildGroup(props.group) }
    </div>
  )
}

GenresGroup.defaultProps = {
  group: null,
  list: [],
  disable: () => true,
  header: '',
  className: '',
  onClick: null,
  onDelete: null
}

GenresGroup.propTypes = {
  group: PropTypes.array,
  list: PropTypes.array,
  header: PropTypes.string,
  className: PropTypes.string,
  disable: PropTypes.func,
  onClick: PropTypes.func,
  onDelete: PropTypes.func
}

export default GenresGroup

