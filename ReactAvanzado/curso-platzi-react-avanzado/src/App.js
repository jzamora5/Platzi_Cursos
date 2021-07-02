/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { GlobalStyle } from './styles/GlobalStyles'
import { Router } from '@reach/router'
import Context from './Context'

// const UserLogged = ({ children }) => {
//   return children({ isAuth: false })
// }

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />

      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) => (
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
          )
        }
      </Context.Consumer>
      {/* <UserLogged>
        {
          ({ isAuth }) => (
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
          )
        }
      </UserLogged> */}
      <NavBar />
    </div>
  )
}
