import React from 'react'
import Movies from './../components/common/Movies'
import TextField from '@material-ui/core/TextField'

export default () => {
  const tileData = [
    { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 1', author: 'Author 1'},
    { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 2', author: 'Author 2'},
    { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 3', author: 'Author 3'},
    { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 4', author: 'Author 4'},
    { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 5', author: 'Author 5'},
    { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 6', author: 'Author 6'},
  ]
  return (
    <div>
      <TextField
        className="main-page__search"
        label="Type to search movies"
        margin="normal"
      />
      <Movies
        cols={4}
        list={tileData}/>
    </div>
  )
}
