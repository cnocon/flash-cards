import React, { useState, useEffect, useContext } from 'react';
import cardsContext from "../../context/Cards/CardsContext";
import Card from '../Card/Card';
import * as Styled from './Deck.styles'

const Deck = () => {
  const CardsContext = useContext(cardsContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategorySlug, setActiveCategorySlug] = useState('all');
  const colors = {
    all: 'blue',
    accessibility: 'orange',
    css: 'red',
    gatsby: 'purple',
    git: 'yellow',
    html5: 'green',
    javascript: 'blue',
    node: 'green',
    performance: 'yellow',
    react: 'royal-blue'
  }

  const handleCategoryClick = categorySlug => {
    // Set active index back to 0 since we're switching categories
    setActiveIndex(0)
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

  const loadContent = () => {
    if (CardsContext.cards.length === 0) {
      CardsContext.getCards();
      CardsContext.getCategories();
    }
  }

  useEffect(() => {
    loadContent();
  });
  
  return (
    <Styled.Deck>
      <Styled.Header>
        <Styled.CategoriesNav>
          <button onClick={() => handleCategoryClick('all') } key="all" className={activeCategorySlug === 'all' ? 'white active' : ''}>All</button>
          
          { CardsContext.categories.sort((a, b) => a < b ? -1 : 1)
              .map((fullCategory, i) => {
                if (!fullCategory) {return null}
                return (
                  <button className={fullCategory.slug === activeCategorySlug ? `${colors[activeCategorySlug]} active` : ''} 
                    onClick={() => handleCategoryClick(fullCategory.slug) }
                    key={`${fullCategory._id}-${i}`}>
                    {fullCategory.name}
                  </button>
                )
            })
          }
        </Styled.CategoriesNav>
      </Styled.Header>

      {CardsContext.cards.length === 0 ? <Styled.Loader><h5><i className="fad fa-spinner fa-10x fa-pulse"/>Loading flash cards<small>This takes a minute...</small></h5></Styled.Loader> : null}
      

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
                questionCount={(
                  activeCategorySlug === 'all' 
                  ? Object.values(CardsContext.cards).map(c => c.questions).flat().length
                  : CardsContext.cards[activeCategorySlug].questions.length
                )}
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
              questionCount={(
                activeCategorySlug === 'all' 
                ? Object.values(CardsContext.cards).map(c => c.questions).flat().length
                : CardsContext.cards[activeCategorySlug].questions.length
              )}
              navClickHandler={() => handleNavClick} 
            />
          )
        })
      }
    </Styled.Deck>
  );
};

export default Deck;