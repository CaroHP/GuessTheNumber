import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import Card from '../components/Card';
import { NumberContainer } from '../components/NumberContainer';

function GameOverScreen({ rounds, onGameRestart, number }) {
  return (
    <View style={styles.screen}>
      <Card>
        <Text style={styles.title}>The game is over!!</Text>
        <Text style={styles.subtitle}>The number was: </Text>
          <NumberContainer>{number}</NumberContainer>
        <Text style={styles.subtitle}>Took me: {rounds} rounds</Text>
        <Button title='Play Again?' onPress={onGameRestart} />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  subtitle: {
    flex: 1,
    //textAlign: 'justify',
    marginBottom: 10,
  },
});

export default GameOverScreen