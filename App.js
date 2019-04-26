import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input';

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {reps: '', work: '', rest: ''}
  }

  render() {
    return (
      <View style={styles.container}>
        <Input placeholder='Repetitions' change={text => this.setState({reps: text})}/>
        <Input placeholder='Work time' change={text => this.setState({work: text})}/>
        <Input placeholder='Rest time' change={text => this.setState({rest: text})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
