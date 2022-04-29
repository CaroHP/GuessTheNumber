import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screems/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header style={styles.screen} title={"Hello There"}/>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
