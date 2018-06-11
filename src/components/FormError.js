import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const FormError = ({ error }) => {
  if (error) {
    return(
      <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.errorTextStyle}>
          {error}
        </Text>
      </View>
    )
  }

  return null
}


const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
})

export default FormError;
