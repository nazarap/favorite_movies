import React from 'react'
import Paper from '@material-ui/core/Paper'
import Movies from './../components/common/Movies'
import Genres from '../components/common/Genres'
import _remove from "lodash/remove";

export default () => {
  let mine = [
    {"name": "Absurdist/surreal/whimsical", "id": 2}
    ,{"name": "Action", "id": 3}
    ,{"name": "Adventure", "id": 4}
    ,{"name": "Comedy", "id": 5}
    ,{"name": "Crime", "id": 6}
    ,{"name": "Drama", "id": 7}
    ,{"name": "Fantasy", "id": 8}
    ,{"name": "Historical", "id": 9}
    ,{"name": "Historical fiction", "id": 10}
    ,{"name": "Horror", "id": 11}
    ,{"name": "Magical realism", "id": 12}
    ,{"name": "Mystery", "id": 13}
    ,{"name": "Paranoid Fiction", "id": 14}
    ,{"name": "Philosophical", "id": 15}
    ,{"name": "Political", "id": 16}
    ,{"name": "Romance", "id": 17}
  ]
  const movies = [
    { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 1', author: 'Author 1'},
    { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 2', author: 'Author 2'},
    { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 3', author: 'Author 3'},
    { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 4', author: 'Author 4'},
    { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 5', author: 'Author 5'},
    { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 6', author: 'Author 6'},
  ]
  const remove = genre => _remove(mine, {id: genre.id})

  return (
    <div>
      <Paper
        className="acc-page__genres"
        elevation={1}>
        <Genres
          list={mine}
          onDelete={remove}
          header='Your genres:'/>
      </Paper>
      <Movies
        list={movies}/>
    </div>
  )
}
