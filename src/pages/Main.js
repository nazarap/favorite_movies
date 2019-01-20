import React from 'react'
import { MainPage } from '../styled'
import Header from './../components/common/Header'
import Main from './../components/Main'

export default () =>
  <MainPage
    className="main-page">
    <Header/>
    <article
      className="content main-page__content">
      <Main/>
    </article>
  </MainPage>