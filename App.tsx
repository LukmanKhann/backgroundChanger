import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
  const [randomBackground, setRandomBackground] = useState('#ffffff');
  const generateColor = ()=>{
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i<6; i++) {
     color +=hexRange[Math.floor(Math.random() * 16)]    
    }
    setRandomBackground(color)
  }
  return (
   <>
   <StatusBar backgroundColor={randomBackground} />
   <View style = {[styles.container, {backgroundColor : randomBackground} ]} >
    <TouchableOpacity
    onPress={generateColor}
    >
      <View style = {styles.actionBtn} >

        <Text>
         Change color
        </Text>
      </View>
    </TouchableOpacity>
   </View>
   </>
  )
}

export default App

const styles = StyleSheet.create({

  container:{
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',  
  },
  actionBtn : {
    borderRadius : 12,
    backgroundColor : 'red',
    paddingHorizontal : 10,
    paddingVertical : 40,
  }
})