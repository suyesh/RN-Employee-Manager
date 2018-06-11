import React, { Fragment } from 'react';
import { CardSection, Input } from './common';
import FormError from './FormError';

const EmailPassword = ({ onEmailChange, email, onPasswordChange, password, error }) => (
  <Fragment>
    <CardSection>
       <Input
         label="Email"
         placeholder="email@gmail.com"
         onChangeText={onEmailChange}
         value={ email }
       />
    </CardSection>

    <CardSection>
      <Input
        secureTextEntry
        label="Password"
        placeholder="password"
        onChangeText={onPasswordChange}
        value={ password }
      />
    </CardSection>
    <FormError error={error}/>
  </Fragment>
);

export default EmailPassword
