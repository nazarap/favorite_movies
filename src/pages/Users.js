import React from 'react'
import { ContentPage } from '../styled'
import Header from './../components/common/Header'
import Users from './../components/Users'

export default () =>
  <ContentPage>
    <Header/>
    <article
      className="content">
      <Users/>
    </article>
  </ContentPage>
