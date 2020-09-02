import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import Theme from '../../Theme'

export const Form = styled.form`
  width: 95%;
  max-width: 400px;
  margin: 60px auto 30px;
  background-color: #fff;
  /* box-shadow: 0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 8px 8px rgba(0,0,0,0.11), 0 16px 16px rgba(0,0,0,0.11), 0 32px 32px rgba(0,0,0,0.11); */
  /* border: 2px solid ${Theme.colors.grays.borderMedium}; */
  /* border-top: 0; */
  background-position: top;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-size: 100% 6px;
  border-radius: 3px;

  box-shadow: 0 1px 2px rgba(0,0,0,0.075), 
              0 2px 2px rgba(0,0,0,0.075), 
              0 4px 4px rgba(0,0,0,0.075), 
              0 8px 8px rgba(0,0,0,0.075), 
              0 16px 16px rgba(0,0,0,0.075), 
              0 32px 32px rgba(0,0,0,0.075);
  
  .error {
    color: ${Theme.colors.accents.dark.red};
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    font-family: ${Theme.fonts.headings.family};
  }
`

export const SplitForm = styled.form`
  width: 95%;
  max-width: 600px;
  margin: 60px auto 30px;
  background-color: #fff;
  background-position: top;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-size: 100% 6px;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.075), 
              0 2px 2px rgba(0,0,0,0.075), 
              0 4px 4px rgba(0,0,0,0.075), 
              0 8px 8px rgba(0,0,0,0.075), 
              0 16px 16px rgba(0,0,0,0.075), 
              0 32px 32px rgba(0,0,0,0.075);
  
  .error {
    color: ${Theme.colors.accents.dark.red};
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    font-family: ${Theme.fonts.headings.family};
  }
`


export const SplitFormRow = styled.div`
  display: inline-block;
  width: 45%;
  margin: 15px 5% 15px 0;

  &::nth-of-type(even) {
    margin-right: 0;
  }

  &:last-of-type {
    width: 100%;
    margin: 15px 0;
  }

  label {
    display: block;
    font-weight: 900;
    font-family: ${Theme.fonts.accent.family};
    font-size: 16px;
    padding-bottom: 3px;
  }

  input {
    display: block;
    width: 100%;
    background-color: #fff !important;
    border: 2px solid ${Theme.colors.default.base};
    border-radius: 4px;
    line-height: 30px;
    padding: 5px 10px;
    box-sizing: border-box;
    outline: 0;
    color: ${Theme.colors.default.darkest}
    font-family: ${Theme.fonts.headings.family};
  }

  &:last-of-type {
    text-align: center;
  }

  button {
    display: block;
    text-align: center;
    background-color: hsl(210deg 25% 27%);
    height: 40px;
    border: 2px solid hsl(210deg 25% 27%);
    border-radius: 4px;
    color: hsl(0deg 0% 100%);
    font-weight: 700;
    font-family: Lato;
    width: 50%;
    margin: 0 auto;
  }
`

export const FormRow = styled.div`
  display: block;
  width: 100%;
  margin: 15px auto;

  label {
    display: block;
    font-weight: 900;
    font-family: ${Theme.fonts.accent.family};
    font-size: 16px;
    padding-bottom: 3px;
  }

  input {
    display: block;
    width: 100%;
    background-color: #fff !important;
    border: 2px solid ${Theme.colors.default.base};
    border-radius: 4px;
    line-height: 30px;
    padding: 5px 10px;
    box-sizing: border-box;
    outline: 0;
    color: ${Theme.colors.default.darkest}
    font-family: ${Theme.fonts.headings.family};
  }

  &:last-of-type {
    text-align: center;
  }

  button {
    display: block;
    text-align: center;
    background-color: hsl(210deg 25% 27%);
    height: 40px;
    border: 2px solid hsl(210deg 25% 27%);
    border-radius: 4px;
    color: hsl(0deg 0% 100%);
    font-weight: 700;
    font-family: Lato;
    width: 50%;
    margin: 0 auto;
  }
`

export const ProfileWrapper = styled.div`
  width: 95%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  h2, h4 {
    color: ${Theme.colors.default.darkest};
    font-family: ${Theme.fonts.headings.family};
  }

  h2 {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 40px;
    color: ${Theme.colors.default.base};
  }

  h4 {
    font-size: 28px;
    font-weight: 600;
  }

  ul {
    padding-left: 0;
  }

  li {
    list-style-type: none;
    font-size: 18px;
    line-height: 24px;
    color: ${Theme.colors.default.darkest};
    margin-bottom: 20px;

    strong {
      text-transform: uppercase;
      display: block;
      
    }
  }
`