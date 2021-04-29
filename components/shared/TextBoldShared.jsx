import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
const TextBoldShared = (props) => {
    return (
      <View>        
          <Text style={{color:'#ed3b45',
          fontSize:28, 
          fontWeight:'bold',
          textAlign: 'center',
          alignItems: 'center', 
          }}>{props.text}</Text>
      </View>
    )
}

export default TextBoldShared