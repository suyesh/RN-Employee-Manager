import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import reducers from './reducers';
import config from '../firebaseConfig'

class App extends Component {
  componentWillMount = () => {
   firebase.initializeApp(config);
  }

  render(){
    return(
      <Provider store={createStore(reducers, { }, applyMiddleware(ReduxThunk))}>
        <View>
            <Header headerText="Employee Manager"/>
            <LoginForm/>
        </View>
      </Provider>
    )
  }
}

export default App;
