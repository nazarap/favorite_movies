import React from 'react'
import { AccountPage } from '../styled'
import Header from './../components/common/Header'
import Movies from './../components/common/Movies'

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
    <AccountPage
      className="acc-page">
      <Header
        className="acc-page__header"/>
      <Movies
        className="content acc-page__content"
        list={tileData}/>
    </AccountPage>
  )
}
