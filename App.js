import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Header from './components/Header';
import GameScreen from './screems/GameScreen';
import StartGameScreen from './screems/StartGameScreen';
import GameOverScreen from './screems/GameOverScreen';

export default function App() {

//Promise
  /*const thisIsMyPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log('2 seconds later......')
      resolve();

      if(1 != true){
        reject();
      }
    },
    2000);
  })

  const endpoint = fetch('https://pokeapi.co/api/v2/pokemon/123')
  

  const a = endpoint.then(() => {})
  .then((response) => response.json())
  .then((data => console.log('data', data)))


    .then((response) => {
    response.json().then( data =) 
    console.log('data', response)
    console.log('data', data.name)
  })*/

  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [numberofGuesses, setNumberofGueses] = useState(0);

  const gameOverHandler = (rounds) => {
    setNumberofGueses(rounds)
  }

  const StartGameHandler = (number) => {
    setSelectedNumber(number);
  }

  const restartGame = () => {
    setNumberofGueses(0)
    setSelectedNumber(undefined)
  } 

  let content = <StartGameScreen onStartGame={StartGameHandler} />

  if (selectedNumber && numberofGuesses === 0) {
    content = <GameScreen selectedNumber={selectedNumber} onGameOver={gameOverHandler} />
  } else if (selectedNumber && numberofGuesses > 0) {
    content = <GameOverScreen rounds={numberofGuesses} number={selectedNumber} onGameRestart={restartGame}  />
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
