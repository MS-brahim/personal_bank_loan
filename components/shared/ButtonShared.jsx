import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
const ButtonShared = (props) => {
    return (
      <View>            
          <TouchableOpacity
          style={styles.button}
          onPress={props.onPress}
          >
          <Text style={{color:'white',fontSize:16}}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default ButtonShared

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "#ed3b45",
      padding: 10,
      marginTop: 25,
      marginBottom:20,
      borderRadius: 30,
      width:200,
      marginLeft:20,
      textAlign: 'center',
      alignItems: 'center',   
    }
});