import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies'
import * as Styled from './User.styles';

const Profile = () => {
  const userCookieData = {
    userId: cookie.load('userId').match(/s:j:"(.*)"\..*/)[1],
    username: cookie.load('username'),
    email: cookie.load('email'),
    name: cookie.load('name')
  };
  const [user, setUser] = useState(userCookieData);

  useEffect(() => {
    console.log(cookie.loadAll());
  })

  return (
    <Styled.ProfileWrapper>
      <h2>About {user.name}</h2>
      <ul>
        <li><strong>Username</strong> {user.username}</li>
        <li><strong>Email</strong> {user.email}</li>
        <li><strong>Name</strong> {user.name}</li>
      </ul>
    </Styled.ProfileWrapper>
  )
}

export default Profile;