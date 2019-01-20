import React from 'react'
import { AccountPage } from '../styled'
import Header from './../components/common/Header'
import Account from './../components/Account'

export default () =>
  <AccountPage
    className="acc-page">
    <Header
      className="acc-page__header"/>
    <article className="content acc-page__content">
      <Account/>
    </article>
  </AccountPage>
