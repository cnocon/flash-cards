import React, { useReducer } from 'react';
import axios from 'axios';
import CardsContext from './CardsContext';
import CardsReducer from './CardsReducer';
import { GET_CARDS } from '../types';

const CardsState = (props) => {
  let initialState = {
    cards: [],
  };

  const [ state, dispatch ] = useReducer(CardsReducer, initialState);
  
  const getCards = async () => {
    try {
      const res = await axios.get("https://arcane-stream-45843.herokuapp.com/populated-categories");
      const { data } = res
      
      dispatch({ type: GET_CARDS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CardsContext.Provider
      value={{
        cards: state.cards,
        getCards,
      }}
    >
      {props.children}
    </CardsContext.Provider>
  );
}

export default CardsState;