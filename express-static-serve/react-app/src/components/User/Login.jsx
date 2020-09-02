import React from 'react';
import * as Styled from './User.styles';

const Login = () => {
  return (
    <Styled.Form action='/login' method='POST' className="rainbow-border-all">
      <Styled.FormRow>
        <label htmlFor='email'>Email</label>
        <input name='email' type='email' id='email' placeholder='email@address.com'/>
      </Styled.FormRow>

      <Styled.FormRow>
        <label htmlFor='password'>Password</label>
        <input name='password' type='password' id='password'/>
      </Styled.FormRow>

      <Styled.FormRow>
        <button type='submit'>Submit</button>
      </Styled.FormRow>
    </Styled.Form>
  )
}

export default Login;