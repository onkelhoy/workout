import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  timer: {
    textAlign: 'center',
    fontsize: 50
  },
  name: {
    textAlign: 'center',
    fontSize: 14
  }
})

export default class Input extends Component {
  constructor (props) {
    super(props);
    this.state = {counter: props.start, timer: null}
  }

  componentDidMount () {
    let timer = setInterval(this.tick, 1000)¨
    this.setState({timer})
  }

  componentWillUnmount () {
    this.clearInterval(this.state.timer)
  }

  tick = () => {
    let counter = this.state.counter - 1 
    
    if (counter < 1)
    {
      // reset 
      this.props.done()
    }
    
    this.setState({counter})
  }

  render () {
    return (
      <View>
        <Text style={styles.timer}>{this.state.counter}</Text>
        <Text style={styles.name}>{this.props.name}</Text>
      </View>
    )
  }
}