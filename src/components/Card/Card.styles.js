import { css } from "@emotion/core"
import Theme from '../../Theme';
import styled from "@emotion/styled"

export const Card = styled.div`
  display: none;
  width: 100%;
  max-width: 650px;
  line-height: ${Theme.fonts.sizes.lineHeights.sm};
  border-bottom-width: 2px;
  border-radius: 4px;
  padding: 0 ${Theme.spacing.default};
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);

  @media screen and (min-width: 1000px) {
    position: absolute;
    left: 50%;
    top: 52.5vh;
    transform: translate(-50%, -50%);
  }
  

  &.front .section-inner .prompt {
    p, 
    .text {
      @media screen and (min-width: 900px) {
        font-size: 24px; 
        line-height: 32px; 
        font-weight: 400;
      }
    }
  }
  
  &.back .prompt {
    p:not(.image-note), 
    .text {
      text-align: left;
      align-self: flex-start;

      &:first-of-type:not(div) {
        text-align: center;
        align-self: center;
        font-weight: 600;
        font-size: 24px; 
        line-height: 28px;
      }
    }
  }
  
  &.current { 
    display: flex;
    flex-direction: column;
  }

  .section-inner {
    overflow-y: scroll;
    padding: 20px 0;
    margin-right: -11px;
    padding-right: 11px;
    min-height: 200px;
    max-height: 325px;
    height: 50vh;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }

    &::-webkit-scrollbar:vertical {
        width: 11px;
    }

    &::-webkit-scrollbar:horizontal {
        height: 11px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid #fff; /* should match background, can't be transparent */
        background-color: rgba(0, 0, 0, .5);
    }

  }


  .img-container { 
    cursor: pointer;
    // max-width: 100%; 
    // overflow: scroll;

    img {
      // min-width: 500px;
      border: 1px solid #345;
      max-width: 100%;
    }
  }

  
  div:not(.media) a,
  div:not(.media) p a {
    color: ${Theme.colors.default.base};
    background-image: linear-gradient(90deg, 
      ${Theme.colors.accents.vivid.red} 5%,
      ${Theme.colors.accents.vivid.yellow} 20%, 
      ${Theme.colors.accents.vivid.green} 40%, 
      ${Theme.colors.accents.vivid.green} 50%, 
      ${Theme.colors.accents.text.blue} 65%,
      ${Theme.colors.accents.vivid.blue} 80%,
      ${Theme.colors.accents.vivid.purple} 100%);
    background-size: 100% 2px;
    padding-bottom: .75px;
    font-weight: 600;
    background-position: bottom;
    background-repeat: no-repeat; 
    transition: background-image .4s;

    &:hover {
      background-image: linear-gradient(225deg, 
      ${Theme.colors.accents.green} 0, 
      ${Theme.colors.accents.blue} 25%, 
      ${Theme.colors.accents.purple} 50%,
      ${Theme.colors.accents.vivid.red} 70%,
      ${Theme.colors.accents.background.yellow} 85%,
      ${Theme.colors.accents.yellow} 100%);
    }
  }
  
  .section-inner .prompt .gist-meta,
  .section-inner .prompt .gist-meta a {font-size: 13px; background-image: none;}

  pre:not(.prettyprint) {
    display: inline-block;
    line-height: inherit;
    background-color: ${Theme.colors.grays.background};
    padding: 1px 6px;
    margin: 0;
    text-align: left;
  }

  pre.prettyprint {
    text-align: left;
    border-radius: 4px;
  
    code {
      padding: 0;
      background-color: inherit;
    }

    span {
      font-size: 13px;
      font-weight: 500;
      text-align: left;
    }
  }

  

  code,
  pre:not(.prettyprint) {
    padding: 0 3px;
    background-color: ${Theme.colors.codeBg};
    display: inline-block;
    border-radius: 4px;
    margin: 0 1px;
    line-height: 1.3em;
    font-family: 'Menlo', 'monaco', monospace;

    pre & {
      background-color: inherit;
      padding: 0;
    }
  }

  .section-inner {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    // background-color: ${Theme.colors.grays.backgroundAlt};
    margin-left: -16px;
    margin-right: -16px;

    .img-container-outer {  
      max-width: 100%;
      overflow-x: scroll;
      margin: 20px auto;
    }

    .prompt  { 
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 0 0 20px;
      margin: auto;
      align-items: center;

      .media {
        width: 100%; 

        pre.prettyprint {
          width: 100%; 
          background-color: ${Theme.colors.default.darkest};
        }
      }

      ul, ol {
        text-align: left; 
        list-style-position: outside; 
        padding-left: 0;
      }

      li, p:not(.image-note), div, td, th {
        font-family: ${Theme.fonts.headings.family};
        font-size: 18px;
        line-height: 26px;

        @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
          font-size: 15px;
          line-height: 22px;
        }
      }

      li { 
        font-size: 17px;
        margin-bottom: 5px;

        @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
          font-size: 13px;
          line-height: 20px;
        }
      }

      p {
        margin: 0 0 15px;
      }

      ol,
      ul {
        margin: 15px auto 20px;
        padding-left: 0;
      }

      p:first-of-type {
        margin: 0 0 25px;
        text-align: center;

        strong, b, em {font-weight: 900;}
      }
    }
  }

  footer {
    padding: 13px 18px;
    border-top: 2px solid ${Theme.colors.default.darkest};
    margin: 0 -16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header {
    margin: 0 -16px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    padding: 0;
    background-color: ${Theme.colors.default.darkest};

    .subheader {
      display: flex;
      flex-direction: row;
      flex-basis: auto;
      width: 100%;
      padding: 22px 20px;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      height: 100%;

      @media screen and (max-width: ${Theme.breakpoints.max.xs}) {
        padding: 20px 10px;
      }

      > div {
        flex-basis: auto;
        width: 33.333%;
        display: flex;
        align-self: center;
        justify-content: center;
        justify-items: center;
        height: 100%;

        @media screen and (max-width: ${Theme.breakpoints.max.xs}) {
          i {display: none;}
        }

        &:first-of-type {
          justify-content: flex-start;
          line-height: 2.25rem;

          .level {
            color: ${Theme.colors.grays.textOnDark};
            vertical-align: middle;
            line-height: 14px;
            font-weight: 900;
            font-family: ${Theme.fonts.headings.family};
            font-size: 14px;         

            i {font-size: 16px; line-height: 14px; margin-left: 3px;}
          }
        }

        &:last-of-type {
          justify-content: flex-end;
          line-height: 2.25rem;

          .tag {
            color: ${Theme.colors.grays.textOnDark};
            vertical-align: middle;
            line-height: 14px;
            font-weight: 900;
            font-family: ${Theme.fonts.headings.family};
            font-size: 14px;

            @media screen and (max-width: ${Theme.breakpoints.max.xs}) {
              font-size: 12px;
              letter-spacing: -.5px;
            }

            i {
              font-size: 16px; 
              margin-left: 5px;
              transform: translateY(1px);
            }
          }
        }

        h3,
        > span {
          font-size: 14px;
          line-height: 22.5px;
          vertical-align: middle;
          height: auto;color: #fff;
        }
        
        h3 {
          font-family: ${Theme.fonts.headings.family};
          font-weight: 800;
          margin: 0 auto;
          width: unset;

          @media screen and (max-width: ${Theme.breakpoints.max.xs}) {
            font-size: 13px;
          }
        }
      }
    }
  }

  .blue {
    color: ${Theme.colors.accents.blue};
  }

  .red {
    color: ${Theme.colors.accents.vivid.red};
  }
  
  .green {
    color: ${Theme.colors.accents.vivid.green};
  }
  
  .yellow {
    color: ${Theme.colors.accents.background.yellow};
  }
  
  .purple {
    color: ${Theme.colors.accents.vivid.purple};
  }

  .royal-blue {
    color: ${Theme.colors.accents.royalBlue};
  }
  
  .orange {
    color: ${Theme.colors.accents.orange};
  }
  
  p,
  .text { 
    font-size: ${Theme.fonts.sizes.default};
    line-height: ${Theme.fonts.sizes.lineHeights.default};
    color: ${Theme.colors.default.base};
  }

  .img-container-outer { text-align: center; }
  .image-note {
    display: none;

    @media screen and (max-width: 600px) {
      display: block;
      text-align: center;
      width: 100%;
      font-size: 12px;
    }
  }
`

export const FooterButton = styled.button`
  background-color: #fff;
  color: ${Theme.colors.default.base};
  font-size: 18px;
  padding: 5px 10px;
  margin: 0 10px;
  width: 90px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  font-weight: 900;
  font-family: ${Theme.fonts.accent.family};
  cursor: pointer;
  text-transform: uppercase;
  transition: transform .3s;

  @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
    font-size: 15px;
    width: 60px; 
    i { display: none; }
  }

  &:hover {
    transform: scale(1.15);
  }
  &:hover, &:focus { outline: 0; }
  &:last-of-type {margin-right: 0;}
  &:first-of-type {margin-left: 0;}
`

export const FlipButton = styled.button`
  background-color: #fff;
  border: 2px solid ${Theme.colors.default.darkest};
  color: ${Theme.colors.default.base};
  font-size: 18px;
  padding: 5px 10px;
  margin: 0 10px;
  width: 90px;
  height: 40px;
  border-radius: 4px;
  font-weight: 900;
  font-family: ${Theme.fonts.accent.family};
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color .3s, color .3s;
  /* letter-spacing: -.5px; */

  @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
    font-size: 15px;
    i { display: none; }
  }

  &:hover,
  &:focus {
    background-color: ${Theme.colors.default.base};
    color: #fff;
  }

  &:last-of-type {margin-right: 0;}
  &:first-of-type {margin-left: 0;}
`
