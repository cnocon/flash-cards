import React from 'react';

import Deck from './components/Deck/Deck';

import CardsState from './context/Cards/CardsState';

import './App.css';

export const App = () => {
  
  return (
    <CardsState>
      <div className='row'>
        <div className='col-sm-12 col-lg-9'>
          <Deck />
        </div>
      </div>
    </CardsState>
  );
}

export default App;
