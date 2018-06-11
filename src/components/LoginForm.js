import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import { Card, CardSection, Button, Spinner } from './common';
import EmailPassword from './EmailPassword';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text)
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text)
  }

  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password })
  }

  renderButton = () => {
    if (this.props.loading){
      return <Spinner size="large"/>
    }

    return (
      <Button onPress={this.onButtonPress}>
        Login In
      </Button>
    )
  }

  render(){
    return(
      <Card>
       <EmailPassword
         onEmailChange={ this.onEmailChange }
         onPasswordChange={ this.onPasswordChange }
         password={ this.props.password }
         email={ this.props.email }
         error={ this.props.error }
       />


        <CardSection>
         { this.renderButton() }
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  email: auth.email,
  password: auth.password,
  error: auth.error,
  loading: auth.loading
})


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
