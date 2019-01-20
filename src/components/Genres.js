import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Genres from '../components/common/Genres'
import _remove from 'lodash/remove'
import _find from 'lodash/find'
import { Link } from '../styled'
import all from './../../data/genres'

export default () => {
  let mine = []
  const disable = genre => {
    return !_find(mine, {id: genre.id})
  }
  const add = genre =>
    all.forEach(genres => {
      const findGenre = _find(genres.list, {id: genre.id})
      findGenre && mine.push(findGenre)
    })
  const remove = genre => _remove(mine, {id: genre.id})
  return (
    <div>
      <Paper
        className="mention-page__inner"
        elevation={1}>
        <Genres
          className="mention-page__my-list"
          list={mine}
          onDelete={remove}
          header='Your genres:'/>
        <Genres
          onClick={add}
          disable={disable}
          group={all}/>
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
