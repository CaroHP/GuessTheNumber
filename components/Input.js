import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native';

const Input = (props) => {
  return (
    <TextInput 
     {...props} style={[styles.input, props.style]}
    />
  )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'gray',
        marginVertical: 10,
        borderBottomWidth: 1

    }

});

export default Input