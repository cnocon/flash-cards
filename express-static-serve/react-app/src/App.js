import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Register from './components/User/Register';
import Login from './components/User/Login';
import Profile from './components/User/Profile';
import Deck from './components/Deck/Deck';
import Theme from './Theme';
import CardsState from './context/Cards/CardsState';
import ThemeProvider from "./ThemeProvider"
import * as Styled from './App.styles'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import cookie from 'react-cookies'

export const App = () => {
  const [authenticated, setAuthenticated] = useState(!!cookie.load('userId'));
  
  const handleLogoutClick = e => {
    e.preventDefault();
    cookie.remove('userId');
    setAuthenticated(!!cookie.load('userId'));
    window.location.href = '/login';
  }

  return (
    <CardsState>
      <ThemeProvider theme={Theme}>
        <HelmetProvider>
          <Helmet><title>Front End Development Flash Cards</title></Helmet>
          <Styled.Layout>
            <div className='main-wrapper'>
              
              <Router>
                <Styled.AppHeader>
                  <Styled.MainNav>
                    {authenticated ? <li><Link to='/logout' onClick={(e) => handleLogoutClick(e) }>Log Out</Link></li> : <li><Link to='/login'>Login</Link></li>}
                    {authenticated ? <li><Link to='/profile'>Profile</Link></li> : <li><Link to='/register'>Register</Link></li>}
                    <li><Link to='/'>Flash Cards</Link></li>
                  </Styled.MainNav>
                  <Styled.AppHeading>Front End Flash Cards</Styled.AppHeading>
                </Styled.AppHeader>
                <Switch>
                  <Route exact={true} path='/register'><Register /></Route>
                  <Route exact={true} path='/profile'><Profile/></Route>
                  <Route exact={true} path='/login'><Login /></Route>
                  <Route exact={true} path='/'><Deck /></Route>
                  <Route path="*"><NotFound /></Route>
                </Switch>
              </Router>
            </div>
          </Styled.Layout>
        </HelmetProvider>
      </ThemeProvider>
    </CardsState>
  );
}

export default App;
