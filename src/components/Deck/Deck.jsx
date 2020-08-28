import React, { useContext, useEffect, useState } from "react";
import Card from '../Card/Card';
import cardsContext from "../../context/Cards/CardsContext";
import * as Styled from './Deck.styles'

const Deck = () => {
  const CardsContext = useContext(cardsContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavClick = e => {
    const increment = e.target.tagName === 'BUTTON' ? e.target.dataset.increment : e.target.parentNode.dataset.increment;
    const totalQuestions = Object.values(CardsContext.cards).map(c => c.questions).flat().length;
    
      if (increment > 0) {
        // If advancing to next
        setActiveIndex(prevActiveIndex => prevActiveIndex + 1 < totalQuestions ? prevActiveIndex + 1 : 0)
      } else { 
        // If going back to previous
        setActiveIndex(prevActiveIndex => prevActiveIndex - 1 >= 0 ? prevActiveIndex - 1 : totalQuestions - 1) 
      }
    
  }

  useEffect(() => {
    CardsContext.getCards();
  }, []);
  
  return (
    <Styled.Deck>
      {CardsContext.cards
        ? Object.values(CardsContext.cards)
          .flat()
          .map(fullCategory => fullCategory.questions)
          .flat()
          .map((question, i) => {
            return (
              <Card 
                data={question}
                activeSide={`front`}
                key={`${i}-${question._id}`}
                position={i}
                isActive={i === activeIndex}
                navClickHandler={() => handleNavClick} 
              />
            )
          })
        : null}
    </Styled.Deck>
  );
};

export default Deck;