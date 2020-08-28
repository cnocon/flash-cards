import React, { useContext, useEffect } from "react";
import Card from '../Card/Card';
import cardsContext from "../../context/Cards/CardsContext";

const Deck = () => {
  const CardsContext = useContext(cardsContext);

  useEffect(() => {
    CardsContext.getCards();
  }, []);

  return (
    <>
      {
        CardsContext.cards.length
        ? CardsContext.cards.map(card => (
          <Card data={card} side='front' key={card._id}/>
        ))
        : null
      }
    </>
  );
};

export default Deck;