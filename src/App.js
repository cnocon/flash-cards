import React, { useState, useEffect, useContext } from 'react';
import Deck from './components/Deck/Deck';
import Theme from './Theme';
import CardsState from './context/Cards/CardsState';
import ThemeProvider from "./ThemeProvider"
import * as Styled from './App.styles'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CardsContext from './context/Cards/CardsContext';

export const App = () => {
  return (
    <CardsState category_id={''}>
      <ThemeProvider theme={Theme}>
        <HelmetProvider>
          <Helmet><title>Front End Development Flash Cards</title></Helmet>
          <Styled.Layout>
            <Styled.MainWrapper>
              <Deck cards={CardsContext.activeCards} />
            </Styled.MainWrapper>
          </Styled.Layout>
        </HelmetProvider>
      </ThemeProvider>
    </CardsState>
  );
}

export default App;
