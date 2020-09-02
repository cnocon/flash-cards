import { css } from '@emotion/core'
import Theme from './Theme'

export default {styles: css`
  html {
    font-size: 10px;
    height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    position: relative;
  }

  .overlay {
    display: block;
    position: absolute;
    top: -60px;
    left: 0;
    content: '';
    min-height: 200vh;
    width: 200vw;
    min-width: 100vw;
    max-height: 100vh;
    z-index: 1;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,.875);
  }


  body {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${Theme.fonts.body.family};
    height: 100%;
    max-width: 100%;
    margin: 0;
    overflow-x: hidden;

    @media screen and (min-width: 1200px) {
      overflow-x: hidden;
    }
  }

  main {height: 100%;}

  .wrapper-outer {
    padding: ${Theme.spacing.xs} ${Theme.spacing.default} ${Theme.spacing.xl};
    font-size: 1.4rem;
  }

  /* COLOR HELPER CLASSES */
  .text-shadow-purple {
    text-shadow: 1px 2px 1px ${Theme.colors.accents.purple};
  }

  .text-shadow-red {
    text-shadow: 1px 2px 1px ${Theme.colors.accents.background.red};
  }

  .text-shadow-yellow {
    text-shadow: 1px 2px 1px ${Theme.colors.accents.background.yellow};
  }

  .text-shadow-blue {
    text-shadow: 1px 2px 1px ${Theme.colors.accents.blue};
  }
  
  .text-shadow-green {
    text-shadow: 1px 2px 1px ${Theme.colors.accents.background.green};
  }

  .color-purple {
    color: ${Theme.colors.accents.text.purple};
  }

  .color-red {
    color: ${Theme.colors.accents.text.red};
  }

  .color-yellow {
    color: ${Theme.colors.accents.text.yellow};
  }

  .color-blue {
    color: ${Theme.colors.accents.text.blue};
  }
  
  .color-green {
    color: ${Theme.colors.accents.text.green};
  }



  .background-color-purple {
    padding: 1px 3px;
    border-radius: 1px;
    background-color: ${Theme.colors.accents.background.purple};
  }

  .background-color-red {
    padding: 1px 3px;
    border-radius: 1px;
    background-color: ${Theme.colors.accents.background.red};
  }

  .background-color-yellow {
    padding: 1px 3px;
    border-radius: 1px;
    background-color: ${Theme.colors.accents.background.yellow};
  }

  .background-color-blue {
    padding: 1px 3px;
    border-radius: 1px;
    background-color: ${Theme.colors.accents.background.blue};
  }
  
  .background-color-green {
    padding: 1px 3px;
    border-radius: 1px;
    background-color: ${Theme.colors.accents.background.green};
  }

  .box-shadow-purple {
    padding-bottom: 1px;
    box-shadow: 0 3px 0 ${Theme.colors.accents.purple};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 3px 0 ${Theme.colors.accents.text.purple};
    }
  }

  .box-shadow-red {
    padding-bottom: 1px;
    box-shadow: 0 3px 0 ${Theme.colors.accents.red};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 3px 0 ${Theme.colors.accents.text.red};
    }
  }

  .box-shadow-yellow {
    padding-bottom: 1px;
    box-shadow: 0 3px 0 ${Theme.colors.accents.yellow};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 3px 0 ${Theme.colors.accents.text.yellow};
    }
  }

  .box-shadow-blue {
    padding-bottom: 1px;
    box-shadow: 0 3px 0 ${Theme.colors.accents.blue};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 3px 0 ${Theme.colors.accents.text.blue};
    }
  }
  
  .box-shadow-green {
    padding-bottom: 1px;
    box-shadow: 0 3px 0 ${Theme.colors.accents.green};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 3px 0 ${Theme.colors.accents.text.green};
    }
  }

  .background-accent-purple {
    background: ${Theme.colors.accents.purple};
    color: #000;
    border: 1px solid ${Theme.colors.accents.purple};
  }
  
  .background-accent-red {
    background: ${Theme.colors.accents.red};
    color: #000;
    border: 1px solid ${Theme.colors.accents.red};
  }

  .background-accent-yellow {
    background: ${Theme.colors.accents.yellow};
    color: #000;
    border: 1px solid ${Theme.colors.accents.yellow};
  }

  .background-accent-blue {
    background: ${Theme.colors.accents.blue};
    color: #000;
    border: 1px solid ${Theme.colors.accents.blue};
  }

  .background-accent-green {
    background: ${Theme.colors.accents.green};
    color: #000;
    border: 1px solid ${Theme.colors.accents.green};
  }

  .border-accent-purple {
    border: 2px solid ${Theme.colors.accents.background.purple};
    padding: 1px 2px;
    border-radius: 4px;
    
    &a:hover {
      border: 2px solid ${Theme.colors.accents.text.purple};
    }
  }
  
  .border-accent-red {
    border: 2px solid ${Theme.colors.accents.background.red};
    padding: 1px 2px;
    border-radius: 4px;
    
    &a:hover {
      border: 2px solid ${Theme.colors.accents.text.red};
    }
  }
    
  .border-accent-yellow {
    border: 2px solid ${Theme.colors.accents.background.yellow};
    padding: 1px 2px;
    border-radius: 4px;
    
    &a:hover {
      border: 2px solid ${Theme.colors.accents.yellow};
    }
  }

  .border-accent-blue {
    border: 2px solid ${Theme.colors.accents.background.blue};
    padding: 1px 2px;
    border-radius: 4px;
    
    &a:hover {
      border: 2px solid ${Theme.colors.accents.text.blue};
    }
  }

  .border-accent-green {
    border: 2px solid ${Theme.colors.accents.background.green};
    padding: 1px 2px;
    border-radius: 4px;
    
    &a:hover {
      border: 2px solid ${Theme.colors.accents.text.green};
    }
  }

  .border-radius {
    border-radius: 50%;
    line-height: 1;
  }

  .rainbow-background {
    background-image: linear-gradient(140deg, 
    ${Theme.colors.accents.yellow} 0%,
    ${Theme.colors.accents.background.green} 35%, 
    ${Theme.colors.accents.blue} 55%, 
    ${Theme.colors.accents.background.purple} 75%,
    ${Theme.colors.accents.red} 95%,
    ${Theme.colors.accents.red} 100%);
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    transition: background-image .4s;
  }


  .rainbow-background-skewed {
    background-image: linear-gradient(25deg, 
    ${Theme.colors.accents.background.yellow} 0%,
    ${Theme.colors.accents.green} 35%, 
    ${Theme.colors.accents.blue} 52%, 
    ${Theme.colors.accents.purple} 75%,
    ${Theme.colors.accents.red} 100%);
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    transition: background-image .4s;
  }
  .rainbow-background-vivid {
    background-image: linear-gradient(90deg, 
    ${Theme.colors.accents.green} 0, 
    ${Theme.colors.accents.blue} 25%, 
    ${Theme.colors.accents.purple} 50%,
    ${Theme.colors.accents.red} 70%,
    ${Theme.colors.accents.yellow} 85%,
    ${Theme.colors.accents.yellow} 100%);
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    transition: background-image .4s;
  }
  .rainbow-background-vivid-skewed {
    background-image: linear-gradient(205deg, 
    ${Theme.colors.accents.green} 0, 
    ${Theme.colors.accents.blue} 25%, 
    ${Theme.colors.accents.purple} 50%,
    ${Theme.colors.accents.red} 70%,
    ${Theme.colors.accents.background.yellow} 85%,
    ${Theme.colors.accents.yellow} 100%);
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    transition: background-image .4s;
  }

  .rainbow-border-all {

    background-image: linear-gradient(205deg, 
    ${Theme.colors.accents.yellow} 10%,
    ${Theme.colors.accents.green} 30%, 
    ${Theme.colors.accents.green} 40%, 
    ${Theme.colors.accents.blue} 52%, 
    ${Theme.colors.accents.blue} 62%, 
    ${Theme.colors.accents.purple} 70%,
    ${Theme.colors.accents.red} 90%), 
    linear-gradient(80deg, 
    ${Theme.colors.accents.yellow} 10%,
    ${Theme.colors.accents.green} 30%, 
    ${Theme.colors.accents.green} 40%, 
    ${Theme.colors.accents.blue} 52%, 
    ${Theme.colors.accents.blue} 62%, 
    ${Theme.colors.accents.purple} 70%,
    ${Theme.colors.accents.red} 90%);
    background-size: 100% 2px;
    background-position: center bottom;
    background-repeat: no-repeat;
    transition: background-image .4s;
  }

  .rainbow-border,
  .rainbow-border-sm {
    background-image: linear-gradient(205deg, 
    ${Theme.colors.accents.yellow} 10%,
    ${Theme.colors.accents.green} 30%, 
    ${Theme.colors.accents.green} 40%, 
    ${Theme.colors.accents.blue} 52%, 
    ${Theme.colors.accents.blue} 62%, 
    ${Theme.colors.accents.purple} 70%,
    ${Theme.colors.accents.red} 90%);
    background-size: 100% 2px;
    background-position: center bottom;
    background-repeat: no-repeat;
    transition: background-image .4s;

    &-sm { background-size: 100% 1.5px; }

    &a:hover {
    background-image: linear-gradient(90deg, 
      ${Theme.colors.accents.vivid.red} 5%,
      ${Theme.colors.accents.vivid.yellow} 20%, 
      ${Theme.colors.accents.vivid.green} 40%, 
      ${Theme.colors.accents.vivid.green} 50%, 
      ${Theme.colors.accents.text.blue} 65%,
      ${Theme.colors.accents.vivid.blue} 80%,
      ${Theme.colors.accents.vivid.purple} 100%);
    }
  }

  .rainbow-border-top-left {
    background: linear-gradient(-295deg, 
    ${Theme.colors.accents.background.yellow} 10%,
    ${Theme.colors.accents.vivid.green} 30%, 
    ${Theme.colors.accents.green} 40%, 
    ${Theme.colors.accents.blue} 52%, 
    ${Theme.colors.accents.blue} 62%, 
    ${Theme.colors.accents.purple} 70%,
    ${Theme.colors.accents.red} 90%);
    background-size: 100% 3px;
    background-position: center top;
    background-repeat: no-repeat;
  }


  .rainbow-border-top-right {
    background-image: linear-gradient(-105deg, 
    ${Theme.colors.accents.yellow} 5%,
    ${Theme.colors.accents.green} 30%, 
    ${Theme.colors.accents.green} 40%, 
    ${Theme.colors.accents.blue} 52%, 
    ${Theme.colors.accents.blue} 62%, 
    ${Theme.colors.accents.purple} 70%,
    ${Theme.colors.accents.red} 90%);
    background-size: 100% 3px;
    background-position: center top;
    background-repeat: no-repeat;
  }

  .rainbow-box-shadow-rounded { 
    border-radius: 50%;
    box-shadow: 0 1.75px 1px ${Theme.colors.accents.green},       
                -1.75px 0 1px ${Theme.colors.accents.yellow},
                1.75px 0 1px ${Theme.colors.accents.text.purple},
                0 -1.75px 1px ${Theme.colors.accents.text.red};
    
    &-thick {
      border-radius: 50%;
      box-shadow: 0 4px 1.5px ${Theme.colors.accents.green},       
                -4px 0 2.5px ${Theme.colors.accents.yellow},
                4px 0 2.5px ${Theme.colors.accents.vivid.purple},
                0 -4px 1.5px ${Theme.colors.accents.vivid.red};
    }
  }

  .rainbow-box-shadow { 
    border-radius: 4px;
    box-shadow: 0 1.75px 1px ${Theme.colors.accents.green},       
                -1.75px 0 1px ${Theme.colors.accents.yellow},
                1.75px 0 1px ${Theme.colors.accents.text.purple},
                0 -1.75px 1px ${Theme.colors.accents.text.red};
    
    &-thick {
      box-shadow: inset 0 2px 1px ${Theme.colors.accents.green},       
      inset -2px 0 1px ${Theme.colors.accents.vivid.yellow},
      inset 2px 0 1px ${Theme.colors.accents.vivid.purple},
      inset 0 -1.5px 1px ${Theme.colors.accents.vivid.red};
    }

    &-thickest {
      box-shadow: inset 0 4px 2px ${Theme.colors.accents.vivid.green},       
      inset -4px 0 2px ${Theme.colors.accents.vivid.yellow},
      inset 4px 0 2px ${Theme.colors.accents.vivid.purple},
      inset 0 -3.5px 2px ${Theme.colors.accents.vivid.red};

    }
  }

  .rainbow {
    &-icon {
      position: relative;
      border-radius: 50%;
      display: inline-block;
      z-index: 1000;
      background-color: none;
      
      &:before {
        font-weight: 100;
        position: absolute;
        width: 66px;
        height: 66px;
        z-index: 3;
        left: 50%;
        border-radius: 50%;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        transform: translate(-50%, 0);
        content: '';
        background-color: rgb(245,237,0);
        background-image: linear-gradient(90deg, 
                                        ${Theme.colors.accents.text.yellow} 10.5%,
                                        ${Theme.colors.accents.text.green} 39.5%, 
                                        ${Theme.colors.accents.text.blue} 50%, 
                                        ${Theme.colors.accents.text.purple} 67.5%,
                                        ${Theme.colors.accents.text.red} 82.5%,
                                        ${Theme.colors.accents.text.yellow} 95%);
      }

      &-narrow {
        display: inline-block;

        &::before {
            opacity: 1;
            z-index: 0;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            background-image: linear-gradient(90deg,
                      ${Theme.colors.accents.red} 0%,                   
                      ${Theme.colors.accents.yellow} 20%,
                      ${Theme.colors.accents.text.green} 50%, 
                      ${Theme.colors.accents.text.blue} 60%, 
                      ${Theme.colors.accents.text.purple} 87%);
            
          
        }
      }
    }
  }
    
  .rainbow-text {
    z-index: 0;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(90deg,
                      ${Theme.colors.accents.text.yellow} 0%,
                      ${Theme.colors.accents.text.green} 10%, 
                      ${Theme.colors.accents.text.blue} 30%, 
                      ${Theme.colors.accents.text.purple} 50%,
                      ${Theme.colors.accents.text.red} 65%,
                      ${Theme.colors.accents.text.yellow} 80%);
    }

    
  .rainbow-text-skewed {
    z-index: 0;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(205deg,
                      ${Theme.colors.accents.text.yellow} 0%,
                      ${Theme.colors.accents.text.green} 10%, 
                      ${Theme.colors.accents.text.blue} 30%, 
                      ${Theme.colors.accents.text.purple} 50%,
                      ${Theme.colors.accents.text.red} 65%,
                      ${Theme.colors.accents.text.yellow} 80%);
    }
    
  .rainbow-text-narrow {
    z-index: 0;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(90deg,
                      ${Theme.colors.accents.text.yellow} 10%,
                      ${Theme.colors.accents.text.green} 20%, 
                      ${Theme.colors.accents.text.blue} 40%, 
                      ${Theme.colors.accents.text.purple} 50%,
                      ${Theme.colors.accents.text.red} 60%,
                      ${Theme.colors.accents.text.yellow} 70%);
    }
  }  


  .peach-bg-gradient {
    background-image: linear-gradient(45deg, #DE6262 10%, #FFB88C 90%);
  }
`}
