import React, { useReducer } from 'react';
import axios from 'axios';

import { GET_CARDS, GET_CATEGORIES } from '../types';
import CardsContext from './CardsContext';
import CardsReducer from './CardsReducer';

const CardsState = (props) => {
  let initialState = {
    cards: [],
    categories: [],
  };

  const [ state, dispatch ] = useReducer(CardsReducer, initialState);
  
  const getCards = async () => {
    try {
      const res = await axios.get("https://arcane-stream-45843.herokuapp.com/populated-categories");
      dispatch({ type: GET_CARDS, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await axios.get(`https://arcane-stream-45843.herokuapp.com/categories`);
      dispatch({ type: GET_CATEGORIES, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <CardsContext.Provider
      value={{
        categories: state.categories,
        cards: state.cards,
        getCategories,
        getCards,
      }}
    >
      {props.children}
    </CardsContext.Provider>
  );
}

export default CardsState;