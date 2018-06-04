import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import { Header } from './components/common';
import reducers from './reducers';
import config from '../firebaseConfig'

class App extends Component {
  componentWillMount = () => {
   firebase.initializeApp(config);
  }

  render(){
    return(
      <Provider store={createStore(reducers)}>
        <View>
            <Header headerText="Manager"/>
        </View>
      </Provider>
    )
  }
}

export default App;
