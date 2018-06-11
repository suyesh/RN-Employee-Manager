import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import RouterComponent from './Router';
import reducers from './reducers';
import config from '../firebaseConfig'

class App extends Component {
  componentWillMount = () => {
   firebase.initializeApp(config);
  }

  render(){
    return(
      <Provider store={createStore(reducers, { }, applyMiddleware(ReduxThunk))}>
        <RouterComponent/>
      </Provider>
    )
  }
}

export default App;
