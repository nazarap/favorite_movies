import React from 'react'
import { GenresPage } from '../styled'
import Genres from './../components/Genres'

export default () =>
  <GenresPage
    className="mention-page">
    <article
      className="content mention-page__content">
      <Genres/>
    </article>
  </GenresPage>