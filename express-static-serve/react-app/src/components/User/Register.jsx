import React, { useState } from 'react';
import * as Styled from './User.styles';

const Register = () => {
  const [errorMsg, setErrorMsg] = useState(window.location.href.split('?error=')[1] ? window.location.href.split('?error=')[1].replace(/%20/g, ' ') : null);
  return (
    <Styled.SplitForm action='/register' method='POST' className='rainbow-border-semi-transparent'>
      {errorMsg ? <p className='error'>{errorMsg}</p> : null}
      <Styled.SplitFormRow>
        <label htmlFor='email'>Email</label>
        <input name='email' type='email' id='email' placeholder='email@address.com' required/>
      </Styled.SplitFormRow>
      
      <Styled.SplitFormRow>
        <label htmlFor='name'>Name</label>
        <input name='name' type='text' id='name' placeholder='Cristin O.' required/>
      </Styled.SplitFormRow>
      
      <Styled.SplitFormRow>
        <label htmlFor='username'>Username</label>
        <input name='username' type='text' id='username' placeholder='awesomeUser' required/>
      </Styled.SplitFormRow>
      
      <Styled.SplitFormRow>
        <label htmlFor='password'>Password</label>
        <input name='password' type='password' id='password' required/>
      </Styled.SplitFormRow>
      
      <Styled.SplitFormRow>
        <label htmlFor='password_confirmation'>Confirm Password</label>
        <input name='password_confirmation' type='password' id='password_confirmation' required/>
      </Styled.SplitFormRow>

      <Styled.SplitFormRow>
        <button type='submit'>Submit</button>
      </Styled.SplitFormRow>
    </Styled.SplitForm>
  )
}

export default Register;