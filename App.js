import React, { Component } from 'react';
import api from './Utilities/api';

import {
  StyleSheet,
  View,Text
} from 'react-native';

//left max = 370
//top max = 590
var x= .1;
var y= .3;
var z= .2;

var xR=.4;
var yR=.4;
var zR=z;

/*
        "val_horizontal": 0.54,
        "val_vertical": 0.69,
        "longitud": 0.2
*/
var valTop= ((y*100)*590)/100;
var valLeft= ((x*100)*370)/100;
var valW= ((z*100)*370)/100;
var valH= ((z*100)*590)/100;

var valTopR;
var valLeftR;
var valWR;
var valHR;

      valTopR= ((yR*100)*590)/100;
      valLeftR= ((xR*100)*370)/100;
      valWR= ((zR*100)*370)/100;
      valHR= ((zR*100)*590)/100;

export default class AlignItems extends Component {
  constructor(props){
      super(props);
      this.state={
        data:[],
        alto:'aaaa',
        ancho:'',
        long:''
      }
    }
  componentDidMount(){
      let data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        x:x,
        y:y,
        z:z
      }),
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    }
    fetch('https://retonodejs.herokuapp.com/cuadro ', data)
            .then(response => response.json())  // promise
            .then((responseData) => {
              JSON.stringify(responseData)
              this.setState({
                data: responseData.cuadro,
                alto: responseData.cuadro.val_horizontal,
                ancho: responseData.cuadro.val_vertical,
                long: responseData.cuadro.longitud
              })
          })
          .catch(error=> console.log("Error"))
          .done();
      
      xR= parseFloat(this.state.alto);
      yR= parseFloat(this.state.ancho);
      zR= parseFloat(this.state.long);
      
      valTopR= ((yR*100)*590)/100;
      valLeftR= ((xR*100)*370)/100;
      valWR= ((zR*100)*370)/100;
      valHR= ((zR*100)*590)/100;
  } 

  render() {
    return (
      <View>
        <View style={styles.wrapper}>
          <View style={styles.container}>
              <View style={[styles.box1]}></View>
          </View>
        </View>
         <View style={styles.wrapper}>
            <View style={styles.container}>
              <View style={[styles.box2]}></View>
                <Text>
                 {this.state.alto}
              </Text>
            </View>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: .5,
    flexDirection: 'row'
  },
  box1: {
    position: 'relative',
    backgroundColor: 'red',
    top: valTop,
    left: valLeft,
    width: valW,
    height: valH
  },

  box2: {
    position: 'relative',
    backgroundColor: 'blue',
    top: valTopR,
    left: valLeftR,
    width: valWR,
    height: valHR
  }
});
