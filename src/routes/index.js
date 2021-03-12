import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import LoginPage from 'pages/loginPage'
import HomePage from 'pages/homePage'
import NotFoundPage from 'pages/notFoundPage'

import { userIsLoggedIn, userIsNotLoggedIn } from 'hoc/authWrapper'

const WrappedLoginPage = userIsNotLoggedIn(LoginPage)
const WrappedHomePage = userIsLoggedIn(HomePage)

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/login" component={WrappedLoginPage} />
      <Route exact path="/home" component={WrappedHomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}


export default Routes