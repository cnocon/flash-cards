import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Deck from './components/Deck/Deck';
import Theme from './Theme';
import CardsState from './context/Cards/CardsState';
import ThemeProvider from "./ThemeProvider"
import * as Styled from './App.styles'
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const App = () => {
  return (
    <CardsState>
      <ThemeProvider theme={Theme}>
        <HelmetProvider>
          <Helmet><title>Front End Development Flash Cards</title></Helmet>
          <Styled.Layout>
            <Styled.MainWrapper className='main-wrapper'>
              <Router>
                <Styled.AppHeader className='rainbow-border-semi-transparent'>
                  {/* <Styled.MainNav> */}
                    {/* {authenticated ? <li><Link to='/logout' onClick={(e) => handleLogoutClick(e) }>Log Out</Link></li> : <li><Link to='/login'>Login</Link></li>}
                    {authenticated ? <li><Link to='/profile'>Profile</Link></li> : <li><Link to='/register'>Register</Link></li>} */}
                    {/* <li><Link to='/'>Home</Link></li> */}
                  {/* </Styled.MainNav> */}
                  <Styled.AppHeading>Front End Flash Cards</Styled.AppHeading>
                </Styled.AppHeader>
                <Styled.Content>
                <Switch>
                  {/* <Route exact={true} path='/register'><Register /></Route>
                  <Route exact={true} path='/profile'><Profile/></Route>
                  <Route exact={true} path='/login'><Login /></Route> */}
                  <Route exact={true} path='/'><Deck /></Route>
                  <Route path="*"><NotFound /></Route>
                </Switch>
                </Styled.Content>
              </Router>
              <Styled.AppFooter>
                <p><b>Copyright &copy;2020</b>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://cristin.io" target="_blank" rel="noreferrer">CRISTIN.IO</a></p>
              </Styled.AppFooter>
            </Styled.MainWrapper>
          </Styled.Layout>
        </HelmetProvider>
      </ThemeProvider>
    </CardsState>
  );
}

export default App;
