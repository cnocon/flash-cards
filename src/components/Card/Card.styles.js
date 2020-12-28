// import { css } from "@emotion/core"
import Theme from '../../Theme';
import styled from "@emotion/styled"

export const Card = styled.div`
  display: none;
  flex-direction: column;
  width: 95%;
  max-width: 95%;
  padding: 0;
  margin: 20px auto;
  line-height: ${Theme.fonts.sizes.lineHeights.sm};
  border: 1px solid ${Theme.colors.default.gray};
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.075), 
              0 2px 2px rgba(0,0,0,0.075), 
              0 4px 4px rgba(0,0,0,0.075), 
              0 8px 8px rgba(0,0,0,0.075), 
              0 16px 16px rgba(0,0,0,0.075), 
              0 32px 32px rgba(0,0,0,0.075);

  @media screen and (min-width: ${Theme.breakpoints.min.md}) {
    width: 100%;
    height: auto;
    min-width: 500px;
    max-width: 800px;
    margin: 40px auto 0;
    max-height: 66vh;
    /* padding: 0 ${Theme.spacing.default}; */
  }

  &.current { display: flex; }

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
    /* display: block; */
    max-width: 100%;
    overflow: auto;
    /* min-height: 100%; */
    /* min-height: 50vh; */
    /* height: 50vh; */
    
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
    height: 100%;
    min-height: 200px;
    max-height: 70vh;

    @media screen and (min-width: ${Theme.breakpoints.min.xs}) {
      height: 66vh;
      min-height: 300px;
      max-height: 600px;
      padding: 30px 20px;
      /* margin-left: -16px;
      margin-right: -16px; */
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
        border: 2px solid #fff; /* should match background, can't be transparent */
        background-color: rgba(0, 0, 0, .5);
    }

    .gist-file span {
      font-family: 'Courier Prime', 'Fira Code', 'PT Mono', Monaco, Menlo, monospace;
    }

    .gist-meta,
    .gist-meta a {font-size: 13px; background-image: none;}

    .img-container-outer {  
      max-width: 100%;
      overflow-x: scroll;
      margin: 20px auto;

      .img-container { 
        cursor: pointer;
      }
    }

    .prompt { 
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0 20px;
      margin: auto;
      align-items: center;
      max-width: 100%;
      box-sizing: border-box;

      .media {
        width: 100%; 

        pre.prettyprint {
          max-width: 100%; 
          background-color: ${Theme.colors.default.darkest};
        }
      }

      p {
        margin: 0 0 15px;
        font-size: ${Theme.fonts.sizes.md};
        line-height: ${Theme.fonts.sizes.lineHeights.default};
        color: ${Theme.colors.default.base};

        &:not(.image-note) {
          text-align: left;
          align-self: flex-start;  
          font-size: ${Theme.fonts.sizes.md};
          line-height: ${Theme.fonts.sizes.lineHeights.default};
          font-weight: 400;

          &:first-of-type {
            text-align: center;
            align-self: center;
            font-weight: 600;    
            font-size: ${Theme.fonts.sizes.md};
            line-height: ${Theme.fonts.sizes.lineHeights.default};
            margin: 0 0 20px;
          }
        }
      }

      div {
        font-family: ${Theme.fonts.headings.family};
        font-size: 18px;
        line-height: 24px;

        @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
          font-size: 15px;
          line-height: 22px;
        }
      }

      li { 
        font-size: ${Theme.fonts.sizes.md};
        line-height: ${Theme.fonts.sizes.lineHeights.default};
        margin-bottom: 7.5px;
        padding-left: 10px;
        font-family: ${Theme.fonts.headings.family};

        @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
          font-size: 14px;
          line-height: 20px;
        }
      }

      strong, b, em {
        font-weight: 900;
      }

      ol,
      ul {
        text-align: left; 
        list-style-position: outside; 
        margin: 15px 40px 20px;
        padding-left: 0;
      }
    }
  }

  footer {
    max-width: 100%;
    padding: 13px 18px;
    background-color: ${Theme.colors.default.lightGray};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-position: top;
    background-size: 100% 1px;
    padding-top: 17px;
  

    @media screen and (min-width: ${Theme.breakpoints.min.md}) {
      margin: 0;
    }
  }

  header {
    max-width: 100%;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    padding: 0;
    background-size: 100% 1.5px;
    padding-bottom: 5px;
    /* background-color: ${Theme.colors.default.lightGray}; */
    border-bottom-width: 2px;
    border-bottom-style: solid;

    @media screen and (min-width: ${Theme.breakpoints.min.md}) {
      margin: 0;
      padding-left: 18px;
      padding-right: 18px;
    }

    &.white {
      color: #fff;
    }

    &.blue {
      border-bottom-color: ${Theme.colors.accents.vivid.blue};
    }

    &.red {
      border-bottom-color: ${Theme.colors.accents.vivid.red};
    }
  
    &.green {
      border-bottom-color: ${Theme.colors.accents.green};
    }
  
    &.yellow {
      border-bottom-color: ${Theme.colors.accents.dark.yellow};
    }
  
    &.purple {
      border-bottom-color: ${Theme.colors.accents.purple};
    }

    &.royal-blue {
      border-bottom-color: ${Theme.colors.accents.royalBlue};
    }
  
    &.orange {
      border-bottom-color: ${Theme.colors.accents.orange};
    }
  

    .subheader {
      display: flex;
      flex-direction: row;
      flex-basis: auto;
      max-width: 100%;
      padding: 22px 0;
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
        justify-content: space-between;
        justify-items: center;
        height: 100%;

        @media screen and (max-width: ${Theme.breakpoints.max.xs}) {
          i {display: none;}
        }

        &:first-of-type {
          justify-content: flex-start;
          line-height: 2.25rem;

          .level {
            color: #345;            
            vertical-align: middle;
            line-height: 14px;
            font-weight: 400;
            font-family: ${Theme.fonts.headings.family};
            font-size: 14px;         
            text-transform: uppercase;

            i {font-size: 16px; line-height: 14px; margin-left: 3px;}
          }
        }

        &:last-of-type {
          justify-content: flex-end;
          line-height: 2.25rem;

          .tag {
            color: #345;
            vertical-align: middle;
            line-height: 14px;
            font-weight: 400;
            font-family: ${Theme.fonts.headings.family};
            font-size: 14px;         
            text-transform: uppercase;

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

        > span {
          font-size: 14px;
          line-height: 22.5px;
          vertical-align: middle;
          height: auto;
          color: #345;
        }
        
        h3 {
          font-family: ${Theme.fonts.headings.family};
          font-weight: 800;
          vertical-align: middle;
          height: auto;
          margin: 0 auto;
          width: unset;
          font-size: 18px;
          line-height: 24.5px;
          color: #345;

          @media screen and (max-width: ${Theme.breakpoints.max.xs}) {
            font-size: 14px;
            line-height: .5px;
          }
        }
      }
    }
  }

  .blue {
    color: ${Theme.colors.accents.vivid.blue};
  }

  .red {
    color: ${Theme.colors.accents.vivid.red};
  }
  
  .green {
    color: ${Theme.colors.accents.vivid.green};
  }
  
  .yellow {
    color: ${Theme.colors.accents.yellow};
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

  .img-container-outer {
    text-align: center;

    .img-container {
      
      &.lightbox {
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        position: absolute !important;
        z-index: 888;
        left: 0;
        position: absolute !important;

        @media screen and (max-width: 900px) {
          overflow-x: auto;
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
          display: block;
          position: absolute;
          height: auto !important;
          max-height: unset !important;
          min-width: 100%;
          width: 100%;
          max-width: none !important;
          box-shadow: 10px 10px 250px 75px rgba(0,0,0,1);
          left: 0;
          top: 50%;
          z-index: 9999;
          border-radius: 4px;
          transform: translateY(-50%);
          cursor: pointer;

          @media screen and (max-width: 1000px) {

      
          
          }
        }
      }

      img {
        border: 1px solid ${Theme.colors.default.base};
        height: auto;
        width: auto;
        max-width: 100%;
        border-radius: 4px;
      }
    }

    p.image-note {
      display: block;
      text-align: center;
      width: 100%;
      font-size: 12px;
    }
  }
`

export const FooterButton = styled.button`
  background-color: transparent;
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
  background-color: transparent;
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
