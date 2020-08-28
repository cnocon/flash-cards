import React, { useContext, useEffect } from "react";

import cardsContext from "../../context/Cards/CardsContext";

const Deck = () => {
  const CardsContext = useContext(cardsContext);

  useEffect(() => {
    CardsContext.getCards();
  }, []);

  return (
    <>
    
      {CardsContext.cards.length
        ? CardsContext.cards.map((card) => (
            <p>
              {card.prompt}
            </p>
          ))
        : null}
    
    </>
  );
};

export default Deck;