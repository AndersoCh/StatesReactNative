/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet,Text,TouchableOpacity,View, YellowBox,  } from 'react-native';

/*
function App()  {
 
  return (
  <View style={{flex: 1, backgroundColor: 'white' }}>
    <View style={{flex:3, backgroundColor:'orange'}}></View>
    <View style={{flex:1,backgroundColor: 'purple' }}></View>

  </View>);
   

}
*/
class App extends Component {
  constructor(props) {
   super(props);

   this.state ={
    counter:0,
   };
   // se esta bandenado para que no hayan problemas cuando la función se salga de sus parametros
  this.handleUp = this.handleUp.bind(this);
  this.handleDown = this.handleDown.bind(this);

  }

  handleUp() {
    const { counter: ct} = this.state;
    this.setState({counter:ct+1});
  }

  handleDown() {
    const { counter: ct} = this.state;
    this.setState({counter: ct - 1 },);
  }

  render() {
    const {counter} = this.state;
    return(
      <View style={styles.container}>
       <View style={styles.subcontainer}>
        <TouchableOpacity 
         style={styles.btn}
         onPress={this.handleDown}
         >
          <Text style={styles.btnTxt}>-</Text>
        </TouchableOpacity>
        <View style={styles.counterContainer}>
         <Text style={styles.counter}>{counter}</Text>
        </View> 

        <TouchableOpacity
         style={styles.btn}
         onPress={this.handleUp}
         >
          <Text style={styles.btnTxt}>+</Text>
        </TouchableOpacity>

       </View>
      </View>
    )
    
  }
}

const styles = StyleSheet.create({
 container:{
  flex: 1,
  backgroundColor:'#e056fd',
  justifyContent:'center',
 },
 subcontainer:{
  height: 50,
  width:'100%',
  paddingHorizontal:10,
  flexDirection:'row',
 },
 btn:{
   width:50,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'#ecf0f1',
 },
 btnTxt:{
  fontSize:25,
  color: '#34495e',
  fontWeight:'bold',
  
 },
 counterContainer:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
},
counter:{
  fontSize:40,
  color:'#FFFF',
  fontWeight:'bold',
}

 
});

export default App;
