import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  input: {
    fontSize: 30,
    padding: 20,
    textAlign: 'center'
  }
})

export default class Input extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <View>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          placeholder={this.props.placeholder}
          onChangeText={this.props.change}
        />
      </View>
    )
  }
}