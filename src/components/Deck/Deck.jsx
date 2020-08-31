import React, { useState, useEffect, useContext } from 'react';
import cardsContext from "../../context/Cards/CardsContext";
import Card from '../Card/Card';
import * as Styled from './Deck.styles'

const Deck = () => {
  const CardsContext = useContext(cardsContext);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [questionCount, setQuestionCount] = useState(28);
  const [activeCategorySlug, setActiveCategorySlug] = useState('all');

  const handleCategoryClick = categorySlug => {
    // Set active index back to 0 since we're switching categories
    const newQuestionCount = categorySlug === 'all' 
      ? Object.values(CardsContext.cards).map(c => c.questions).flat().length 
      : CardsContext.cards[categorySlug].questions.length;
    
    setActiveIndex(0)
    setQuestionCount(newQuestionCount)
    setActiveCategorySlug(categorySlug)
  }

  const handleNavClick = e => {
    const increment = e.target.tagName === 'BUTTON' ? e.target.dataset.increment : e.target.parentNode.dataset.increment;
    const cards = activeCategorySlug === 'all' ? Object.values(CardsContext.cards).map(c => c.questions).flat() : CardsContext.cards[activeCategorySlug].questions;
    const cardCount = cards.length;
    
    if (increment > 0) {
      setActiveIndex(prevActiveIndex => prevActiveIndex + 1 <= cardCount - 1 ? prevActiveIndex + 1 : 0)
    } else { 
      setActiveIndex(prevActiveIndex => prevActiveIndex - 1 >= 0 ? prevActiveIndex - 1 : cardCount - 1) 
    }
  }

  useEffect(() => {
    CardsContext.getCards();
    CardsContext.getCategories();
  }, [activeCategorySlug, activeIndex]);
  
  return (
    <Styled.Deck>

      <Styled.AppHeader>
        <Styled.AppHeading>Front End Dev Flash Cards</Styled.AppHeading>
        <Styled.CategoriesNav>
          <a onClick={() => handleCategoryClick('all') } key="all" className={activeCategorySlug === 'all' ? 'active' : ''}>All</a>
          
          { CardsContext.categories.sort((a, b) => a < b ? -1 : 1)
              .map((fullCategory, i) => {
                if (!fullCategory) {return null}
                return (
                  <a className={fullCategory.slug === activeCategorySlug ? 'active' : ''} 
                    onClick={() => handleCategoryClick(fullCategory.slug) }
                    key={`${fullCategory._id}-${i}`}>
                    {fullCategory.name}
                  </a>
                )
            })
          }
        </Styled.CategoriesNav>
      </Styled.AppHeader>

      { activeCategorySlug === 'all'
        ? Object.values(CardsContext.cards)
          .map((fullCategory, categoryIndex) => fullCategory.questions)
          .flat()
          .map((question, i) => {
            return (
              <Card 
                data={question}
                activeSide='front'
                key={`${i}-${question._id}`}
                position={i}
                isActive={activeIndex === i}
                questionCount={questionCount}
                navClickHandler={() => handleNavClick}
              />
            )
          })
        
        : CardsContext.cards[activeCategorySlug].questions.map((question, i) => {
          return (
            <Card 
              data={question}
              activeSide='front'
              key={`${i}-${question._id}`}
              position={i}
              isActive={activeIndex === i}
              questionCount={questionCount}
              navClickHandler={() => handleNavClick} 
            />
          )
        })
      }
    </Styled.Deck>
  );
};

export default Deck;