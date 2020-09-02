import React from 'react';

const Register = () => {
  return (
    <form action='/register' method='POST'>
      <label htmlFor='email'>Email:
      <input name='email' type='email' id='email' placeholder='email@address.com'/></label>
      <br/>
      <label htmlFor='name'>Name:
      <input name='name' type='text' id='name' placeholder='Cristin O.'/></label>
      <br/>
      <label htmlFor='username'>Username:
      <input name='username' type='text' id='username' placeholder='awesomeUser'/></label>
      <br/>
      <label htmlFor='password'>Password:
      <input name='password' type='password' id='password'/></label>
      <br/>
      <label htmlFor='password_confirmation'>Confirm Password:
      <input name='password_confirmation' type='password' id='password_confirmation'/></label>
      <br/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Register;