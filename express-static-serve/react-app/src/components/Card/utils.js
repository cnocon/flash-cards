import React from 'react'
import Gist from '../Gist/Gist';
import ReactHtmlParser from 'react-html-parser'
import { Helmet } from 'react-helmet-async'

export const level = difficulty => {
  if (difficulty <= 3) {
    return {
      text: 'Beginner',
      tagClass: 'fa-tachometer-slowest'
    }
  } else if (difficulty > 7) {
    return {
      tagClass: 'fa-tachometer-fastest', 
      text: 'Expert'
    } 
  }
  return {
    tagClass: 'fa-tachometer-average',
    text: 'Mid-Level'
  } 
}

export const getCategoryClass = category => {
  const yellowTags = ['Performance', 'Git']
  const purpleTags = ['Gatsby']
  const royalBlueTags = ['React']
  const blueTags = ['JavaScript']
  const greenTags = ['Node', 'HTML5']
  const redTags = ['CSS']
  const orangeTags = ['Accessibility']

  if (yellowTags.includes(category)) {
    return 'yellow'
  } else if (purpleTags.includes(category)) {
    return 'purple'
  } else if (blueTags.includes(category)) {
    return 'blue'
  } else if (greenTags.includes(category)) {
    return 'green'
  } else if (redTags.includes(category)) {
    return 'red'
  } else if (orangeTags.includes(category)) {
    return 'orange'
  } else if (royalBlueTags.includes(category)) {
    return 'royal-blue'
  } else {
    return 'gray'
  }
}

const Snippet = ({item}) => {
  const { lines, lang } = item;
  const compiledLines = lines.map(line => line).join("\n");

  return (
    <>
      <Helmet>
        <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=doxy"></script>
      </Helmet>
      <pre className="prettyprint"><code className={`lang-${lang}`}>
        {ReactHtmlParser(compiledLines)}
      </code></pre>
    </>
  )
}

const imgClickHandler = e => {
  if (document.querySelector('.overlay')) {
    document.querySelector('.overlay').remove();
    document.querySelector('.lightbox').classList.remove('lightbox')
    e.target.style = {};
  } else {
    const div = document.createElement('div');
    div.classList.add('overlay');
    e.target.parentNode.classList.add('lightbox');
    e.target.parentNode.parentNode.insertBefore(div, e.target.parentNode);
  }
};

export const generateMedia = media => {
  switch (media.type) {
    case 'image':
      return (
        <div className="img-container-outer" key={media.url} onClick={imgClickHandler}>
          <div className='img-container'key={media.url}>
            <img 
              src={media.url}
              alt={media.desc}
              style={{maxWidth: '100%', maxHeight: media.hasOwnProperty('height') ? `${media.height}px` : ``}}
            />
          </div>
          <p className="image-note">Click or tap image to view larger version.</p>
        </div>
      )
    case 'gist':
      return <Gist gist={media.gist} key={media.id}/>;
    case 'snippet':
      return <Snippet item={media} key={Math.random()} />;
    default:  
      // do nothing
  }
}