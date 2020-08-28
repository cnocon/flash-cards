import React from 'react';

import Deck from './components/Deck/Deck';
import Theme from './Theme';
import ThemeProvider from "./ThemeProvider"
import CardsState from './context/Cards/CardsState';
import * as Styled from './App.styles'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './styles/bootstrap-grid.min.css';

export const App = () => {
  
  return (
    <ThemeProvider theme={Theme}>
      <CardsState>
        <HelmetProvider>
          <Helmet>
            <title>Front End Development Flash Cards</title>
          </Helmet>
          <Styled.Layout>
            <div className='main-wrapper'>
              <header>
                <Styled.SiteHeader>Front End Dev Flash Cards</Styled.SiteHeader>
                <nav>
                  <ul>
                    {/* {categories.map(category=> (
                      <li>{category.name}</li>
                    ))} */}
                  </ul>
                </nav>
              </header>
              <div className='row'>
                <div className='col-sm-12'>
                  <Deck />
                </div>
              </div>
            </div>
          </Styled.Layout>
        </HelmetProvider>
      </CardsState>
    </ThemeProvider>
  );
}

export default App;
