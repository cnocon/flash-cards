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

  @media screen and (min-width: ${Theme.breakpoints.min.lg}) {
    position: absolute;
    left: 50%;
    top: 60px;
    transform: translate(-50%, 0);
  }
  
  
  &.current { 
    display: flex;
    flex-direction: column;
  }


  header {
    margin: 0 -17px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    padding: 0;
    background-color: ${Theme.colors.default.darkest};

    .subheader {
      display: flex;
      flex-direction: row;
      flex-basis: auto;
      max-width: 100%;
      padding: 22px 20px;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      /* height: 100%; */

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
        /* height: 100%; */

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

  pre:not(.prettyprint) {
    display: inline-block;
    line-height: inherit;
    background-color: ${Theme.colors.grays.background};
    padding: 1px 6px;
    margin: 0;
    text-align: left;
    font-weight: 400;
    font-family: 'Courier Prime', 'Fira Code', 'PT Mono', Monaco, Menlo, monospace;
  }

  pre.prettyprint {
    text-align: left;
    border-radius: 4px;
    padding: 20px;
    font-size: 15px;
    text-align: left;
    line-height: 24px;
    font-weight: 400;
    font-family: 'Courier Prime', 'Fira Code', 'PT Mono', Monaco, Menlo, monospace;
  
    code,
    span {
      padding: 0;
      background-color: inherit;
      font-size: inherit;
      text-align: inherit;
      line-height: inherit;
      font-weight: inherit;
      font-family: inherit;
    }
  }

  code,
  pre:not(.prettyprint) {
    display: inline-block;
    padding: 0 3px;
    margin: 0 1px;
    line-height: 1.25;
    font-weight: 400;
    font-family: 'Courier Prime', 'Fira Code', 'PT Mono', Monaco, Menlo, monospace;
    background-color: ${Theme.colors.codeBg};
    border-radius: 4px;

    pre & {
      background-color: inherit;
      padding: 0;
    }
  }

  .section-inner {
    overflow-y: auto;
    padding: 20px;
    /* min-height: 300px; */
    /* height: 50vh; */
    /* min-height: 100%; */
    display: flex;
    flex-direction: column;
    text-align: center;
    /* margin-left: -16px; */
    /* margin-right: -16px; */

    @media screen and (min-width: ${Theme.breakpoints.min.md}) {
      min-height: 450px;
    }

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
         /* should match background, can't be transparent */
        border: 2px solid ${Theme.colors.accents.purple};
        background-color: rgba(0, 0, 0, .5);
    }

    .gist-meta,
    .gist-meta a {font-size: 13px; background-image: none;}

    .prompt { 
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 0 0 20px;
      margin: auto;
      align-items: center;

      .media {
        /* max-width: 100%;  */
        /* overflow: auto; */

        pre.prettyprint {
          width: 100%; 
          background-color: ${Theme.colors.default.darkest};
        }
      }

      p:not(.image-note) {
        text-align: left;
        align-self: flex-start;
        
        @media screen and (min-width: 900px) {
          font-size: 24px; 
          line-height: 32px; 
          font-weight: 400;
        }

        &:first-of-type {
          text-align: center;
          align-self: center;
          font-weight: 600;
          font-size: 24px; 
          line-height: 28px;
        }
      }

      ul, ol {
        text-align: left; 
        list-style-position: outside; 
        padding-left: 0;
      }

      p:not(.image-note), 
      div, 
      td, 
      th {
        font-family: ${Theme.fonts.headings.family};
        font-size: 18px;
        line-height: 26px;

        @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
          font-size: 15px;
          line-height: 22px;
        }
      }

      li { 
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 7.5px;
        padding-left: 10px;
        font-family: ${Theme.fonts.headings.family};

        @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
          font-size: 14px;
          line-height: 20px;
        }
      }

      p {
        margin: 0 0 15px;
        font-size: ${Theme.fonts.sizes.default};
        line-height: ${Theme.fonts.sizes.lineHeights.default};
        color: ${Theme.colors.default.base};

        &:first-of-type:not(.image-note) {
          margin: 0 0 20px;
          text-align: center;
          font-weight: 900;
        }
      }

      strong, b, em {
        font-weight: 700;
      }

      ol,
      ul {
        margin: 15px auto 20px;
        padding-left: 0;
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

  .overlay {
    display: block;
    position: absolute;
    top: calc(50% + 80px);
    left: 50%;
    content: '';
    width: 100vw;
    height: 100vh;
    z-index: 1;
    transform: translate(-50%,-50%);
    background-color: hsl(0deg 0% 0% / 88%);

    @media screen and (min-width: ${Theme.breakpoints.min.lg}) {
      top: 0;
      left: 0;
      transform: none; 
    }
  }

  .img-container-outer {
    text-align: center;
    margin: 20px auto;
    max-width: 100%;
    height: auto;

    .img-container {
      cursor: pointer;
    
      p.image-note {
        display: block;
        text-align: center;
        width: 100%;
        font-size: 12px;
      }

      &.lightbox {  
        display: block;
        position: absolute;
        z-index: 9999999;
        overflow: auto;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        @media screen and (max-width: ${Theme.breakpoints.max.lg}) {
          /* Always show scrollbars */
          &::-webkit-scrollbar {-webkit-appearance: none;}
          &::-webkit-scrollbar:vertical {width: 11px;}
          &::-webkit-scrollbar:horizontal {height: 11px;}

          &::-webkit-scrollbar-thumb {
            border-radius: 8px;
            border: 2px solid rgba(0, 0, 0, .5);
            background-color: ${Theme.colors.accents.vivid.purple};
          }
        }


        img {
          position: absolute;
          z-index: 99999;
          top: 50%;
          left: 0;
          max-width: 800px;
          height: auto;
          min-width: 100%;
          display: block;
          transform: translateY(calc(-50% + 80px));
        }
      }
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
