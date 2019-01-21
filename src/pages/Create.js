import React from 'react'
import { CreatePage } from '../styled'
import Header from './../components/common/Header'
import Create from './../components/Create'

export default () => {
  return (
    <CreatePage>
      <Header/>
      <article
        className="content">
        <Create/>
      </article>
    </CreatePage>
  )
}
