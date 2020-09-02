import { GET_CARDS, GET_CATEGORIES } from '../types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_CATEGORIES:
      return { ...state, categories: payload };
    case GET_CARDS:
      return { ...state, cards: payload };
    default:
      return state;
  }
};