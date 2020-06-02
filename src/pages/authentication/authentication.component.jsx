import React from 'react';
import './authentication.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';

const AuthenticationPage = () => (
  <div className="authentication">
    <div className="sign-in">
      <SignIn/>
    </div>
  </div>
)

export default AuthenticationPage;