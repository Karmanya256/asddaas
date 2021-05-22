import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class AnyColorButton extends Component {
  displayAlert=()=>{
    alert('leave this site');

  }

  render(){
    return(
      <Button color="lime" title="Click Me" onPress={this.displayAlert}/>
      <Button color="yellow" title="Click Me" onPress={this.displayAlert}/>
       
      
    )
    
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <AnyColorButton />
        
        <View style={{marginTop: 150}}>
        <AnyColorButton />
        <Text>My First React Component</Text>
      </View>
    );
  }
}