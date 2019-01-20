import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  AboutPage,
  LoginPage,
  RegistrationPage,
  AccountPage,
  GenresPage,
  MainPage,
  UsersPage,
  CreatePage
} from './pages'
// import { Redirect } from 'react-router'

export default () =>
  <Router>
    <div>
      <Route exact path="/" component={AboutPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/registration" component={RegistrationPage} />
      <Route path="/account" component={AccountPage} />
      <Route path="/genres" component={GenresPage} />
      <Route path="/main" component={MainPage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/create" component={CreatePage} />

      {/*<Redirect from="/" to="about"/>*/}
    </div>
  </Router>