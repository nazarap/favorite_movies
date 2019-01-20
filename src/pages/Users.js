import React from 'react'
import { ContentPage } from '../styled'
import Header from './../components/common/Header'
import Users from './../components/common/Users'

export default () => {
  const users = [
    {
      "firstName": "Nazar",
      "lastName": "Oryschuk",
      "img": "https://material-ui.com/static/images/grid-list/vegetables.jpg",
      "login": "link",
      "password": "link"
    },
    {
      "firstName": "Nazar",
      "lastName": "Oryschuk",
      "img": "https://material-ui.com/static/images/grid-list/vegetables.jpg",
      "login": "link",
      "password": "link"
    }
  ]
  return (
    <ContentPage>
      <Header/>
      <article
        className="content">
        <Users list={users}/>
      </article>
    </ContentPage>
  )
}
