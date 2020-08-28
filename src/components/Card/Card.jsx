import React from 'react';
import ReactHtmlParser from 'react-html-parser'
import Gist from '../Gist/Gist'

const level = difficulty => {
  if (difficulty <= 3) {
    return {
      text: 'Easy',
      tagClass: 'fa-tachometer-slowest'
    }
  } else if (difficulty > 7) {
    return {
      tagClass: 'fa-tachometer-fastest', 
      text: 'Hard'
    } 
  }
  return {
    tagClass: 'fa-tachometer-average',
    text: 'Mid-Level'
  } 
}

const Card = props => {
  const { difficulty, tags, prompt } = props.data;
  const side = props.side;
  const levelData = level(difficulty)

  return (
    <section className={side}>
      <header className='rainbow-border'>
        <div className='subheader'>
          <div>
            <span className="level tag">
              <i className={`fas ${levelData.tagClass}`}></i>
              &nbsp;{levelData.text}
            </span>
          </div>
          <div>
            <h3>{side === 'front' ? `Question` : `Answer`}</h3>
          </div>

          <div>            
            {
              tags && tags.length
              ? tags.map((tag, i) => (
                <span className={`category tag`} key={`${i}-${tag}`}>
                  <i className={`fad fa-tag`}></i>
                  &nbsp;{tag}
                </span>
              ))
              : null
            }
          </div>
        </div>
      </header>
      
      {ReactHtmlParser(prompt)}
      
    </section>
  )
}

export default Card;