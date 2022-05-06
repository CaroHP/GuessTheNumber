import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

function GameOverScreen({rounds}) {
  return (
    <View>
        <Text>The game is over</Text>
        <Text>Took me: {rounds} rounds</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
});

export default GameOverScreen