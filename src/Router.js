import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AboutPage, LoginPage, RegistrationPage, AccountPage, GenresPage } from './pages'
// import { Redirect } from 'react-router'

export default () =>
  <Router>
    <div>
      <Route exact path="/about" component={AboutPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/registration" component={RegistrationPage} />
      <Route path="/account" component={AccountPage} />
      <Route path="/genres" component={GenresPage} />

      {/*<Redirect from="/" to="about"/>*/}
    </div>
  </Router>