import { GET_CARDS } from '../types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_CARDS:
      return { ...state, cards: payload };
    // case GET_ACTIVE_CARD:
    //   return {
    //     ...state,
    //     activeNews: payload,
    //   };
    default:
      return state;
  }
};