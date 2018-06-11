import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';

import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={ this.props.name }
            onChangeText={(value) => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={ this.props.phone }
            onChangeText={(value) => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerTextStyle}>
            Choose Shift
          </Text>
        </CardSection>

        <CardSection>
          <Picker
            selectedValue={ this.props.shift }
            onValueChange={ value => this.props.employeeUpdate({ prop: 'shift', value })}
            style={{ flex: 1 }}
           >
            <Picker.Item label="Sunday" value="sunday"/>
            <Picker.Item label="Monday" value="monday"/>
            <Picker.Item label="Tuesday" value="tuesday"/>
            <Picker.Item label="Wednesday" value="wednesday"/>
            <Picker.Item label="Thursday" value="thursday"/>
            <Picker.Item label="Friday" value="friday"/>
            <Picker.Item label="Saturday" value="saturday"/>
          </Picker>
        </CardSection>
        <CardSection>
         <Button>
           Create
         </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = ({ employeeForm }) => {
   const { name, phone, shift } = employeeForm;
   return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
