import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Genres from '../components/common/Genres'
import _remove from 'lodash/remove'
import _find from 'lodash/find'
import { GenresPage, Link } from '../styled'

export default () => {
  const all = [
    {
      header: 'Literary genres',
      list: [
        {name: "Absurdist/surreal/whimsical", id: 2}
        ,{name: "Action", id: 3}
        ,{name: "Adventure", id: 4}
        ,{name: "Comedy", id: 5}
        ,{name: "Crime", id: 6}
        ,{name: "Drama", id: 7}
        ,{name: "Fantasy", id: 8}
        ,{name: "Historical", id: 9}
        ,{name: "Historical fiction", id: 10}
        ,{name: "Horror", id: 11}
        ,{name: "Magical realism", id: 12}
        ,{name: "Mystery", id: 13}
        ,{name: "Paranoid Fiction", id: 14}
        ,{name: "Philosophical", id: 15}
        ,{name: "Political", id: 16}
        ,{name: "Romance", id: 17}
        ,{name: "Saga", id: 18}
        ,{name: "Satire", id: 19}
        ,{name: "Science fiction", id: 20}
        ,{name: "Social", id: 21}
        ,{name: "Speculative", id: 22}
        ,{name: "Thriller", id: 23}
        ,{name: "Urban", id: 24}
        ,{name: "Western", id: 25}
      ]
    },
    {
      header: 'Video game genres',
      list: [
        {name: "Video game", id: 31}
      ]
    },
    {
      header: 'Music genres',
      list: [
        {name: "Music", id: 31}
      ]
    },
    {
      header: 'Film and television formats and genres',
      list: [
        ,{name: "Animation", id: 27}
        ,{name: "Live-action scripted", id: 28}
        ,{name: "Live-action unscripted", id: 29}
        ,{name: "Other television-related topics", id: 30}
      ]
    }
  ]
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
    <GenresPage
      className="mention-page">
      <article
        className="content mention-page__content"
      >
        <Paper
          className="mention-page__inner"
          elevation={1}
        >
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
      </article>
    </GenresPage>
  )
}
