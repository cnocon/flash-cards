import React, { useReducer } from 'react';
import axios from 'axios';
import CardsContext from './CardsContext';
import CardsReducer from './CardsReducer';
// import { GET_CARDS, GET_ACTIVE_CARD } from '../types';
import { GET_CARDS } from '../types';

const CardsState = (props) => {
  let initialState = {
    cards: [],
    activeCard: null,
  };

  const [ state, dispatch ] = useReducer(CardsReducer, initialState);

  const getCards = async () => {
    try {
      let res = await axios.get("https://arcane-stream-45843.herokuapp.com/questions");
      let { data } = res;

      dispatch({ type: GET_CARDS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  // const getActiveCard = async (id) => {
  //   try {
  //     let res = await axios.get(`https://node-hnapi.herokuapp.com/item/${id}`);
  //     let { data } = res;

  //     dispatch({ type: GET_ACTIVE_CARD, payload: data });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
  // return (
  //   <CardsContext.Provider
  //     value={{
  //       cards: state.cards,
  //       getCards,
  //       activeCard: state.activeCard,
  //       getActiveCard,
  //     }}
  //   >
  //     {props.children}
  //   </CardsContext.Provider>
  // );
};

export default CardsState;