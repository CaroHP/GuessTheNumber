import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Header from './components/Header';
import GameScreen from './screems/GameScreen';
import StartGameScreen from './screems/StartGameScreen';
import GameOverScreen from './screems/GameOverScreen';

export default function App() {

  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [numberofGuesses, setNumberofGueses] = useState(0);

  const gameOverHandler = (rounds) => {
    setNumberofGueses(rounds)
  }

  const StartGameHandler = (number) => {
    setSelectedNumber(number);
  }

  let content = <StartGameScreen onStartGame={StartGameHandler} />

  if (selectedNumber && numberofGuesses === 0) {
    content = <GameScreen selectedNumber={selectedNumber} onGameOver={gameOverHandler} />
  } else if (selectedNumber && numberofGuesses > 0) {
    content = <GameOverScreen rounds={numberofGuesses} />
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess the number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
