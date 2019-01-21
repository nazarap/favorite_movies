import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Genres from '../components/common/Genres'
import PropTypes from 'prop-types'
import _find from 'lodash/find'
import { Link } from '../styled'
import { getGenres, addPersonalGenre, removePersonalGenre } from '../actions/genres'
import { connect } from 'react-redux'
import auth from './hoc/Auth'

class GenresContainer extends React.Component {
  constructor(props) {
    super(props)
    this.disable = this.disable.bind(this)
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
  }

  componentDidMount() {
    this.props.getGenres()
  }

  disable(genre) {
    return !_find(this.props.personal, {id: genre.id})
  }

  add(genre) {
    this.props.list.forEach(genres => {
      const findGenre = _find(genres.list, {id: genre.id})
      findGenre && this.props.addPersonalGenre(findGenre)
    })
  }

  remove(genre) {
    this.props.removePersonalGenre(genre.id)
  }

  render() {
    const { add, remove, disable } = this
    const list = this.props.list
    const personal = this.props.personal
    return (
      <div>
        <Paper
          className="mention-page__inner"
          elevation={1}>
          <Genres
            className="mention-page__my-list"
            list={personal}
            onDelete={remove}
            header='Your genres:'/>
          <Genres
            onClick={add}
            disable={disable}
            group={list}/>
          <Link
            to='/account'>
            <Button
              className="mention-page__button"
              color="primary"
            >Next</Button>
          </Link>
        </Paper>
      </div>
    )
  }
}

GenresContainer.defaultProps = {
  list: [],
  personal: []
}

GenresContainer.propTypes = {
  list: PropTypes.array,
  personal: PropTypes.array
}

const mapStateToProps = state => ({
  list: state.genres.list,
  personal: state.genres.personal
})

const mapDispatchToProps = dispatch => ({
  getGenres: () => {
    dispatch(getGenres())
  },
  addPersonalGenre: payload => {
    dispatch(addPersonalGenre(payload))
  },
  removePersonalGenre: payload => {
    dispatch(removePersonalGenre(payload))
  }
})

export default auth(connect(mapStateToProps, mapDispatchToProps)(GenresContainer))