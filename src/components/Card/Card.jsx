import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { level, getCategoryClass, generateMedia } from './utils'
import * as Styled from './Card.styles'

const Card = props => {
  const { difficulty, tags, prompt, prompt_media, answer_media, answer } = props.data
  const { isActive, navClickHandler, position, questionCount } = props;
  const [activeSide, setActiveSide] = useState('front')
  
  const levelData = level(difficulty)
  const categoryClass = getCategoryClass(tags[0] || 'Uncategorized')
  const media = activeSide === 'front'
    ? prompt_media.map(item => generateMedia(item))
    : answer_media.map(item => generateMedia(item))
  
  return (
    <Styled.Card className={isActive ? `${activeSide} current` : `${activeSide}`}>
      <header>
        <div className='subheader'>
          <div><span className="level tag"><i className={`far ${levelData.tagClass}`}></i>&nbsp;&nbsp;{levelData.text}</span></div>
          <div><h3>{activeSide === 'front' ? `Question ${position + 1}/${questionCount}` : `Answer ${position + 1}/${questionCount}`}</h3></div>
          <div>
            {tags && tags.length ? tags.map((tag, i) => (
              <span className={`category tag`} key={`${i}-${tag}`}>{tag}&nbsp;<i className={`fad fa-tags ${categoryClass}`}></i></span>
            )) : null}
          </div>
        </div>
      </header>

      <section className='section-inner'>
        <div className='prompt'>
          { ReactHtmlParser(activeSide === 'front' ? prompt : answer) }
          { media.length ? <div className="media">{ media }</div> : null }
        </div>
      </section>

      <footer>
        <Styled.FooterButton onClick={navClickHandler()} data-increment={-1}>
          <i className="far fa-arrow-left"></i>{`  `}Prev
        </Styled.FooterButton>

        <Styled.FlipButton onClick={() => setActiveSide(prevActiveSide => prevActiveSide === 'front' ? 'back' : 'front')}>
          <i className="far fa-sync-alt"></i>{`  `}Flip
        </Styled.FlipButton>

        <Styled.FooterButton onClick={navClickHandler()} data-increment={1}>
          Next{` `}<i className="far fa-arrow-right"></i>
        </Styled.FooterButton>
      </footer>
    </Styled.Card>
  )
}

export default Card;