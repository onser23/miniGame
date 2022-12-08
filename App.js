import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import GameScreen from "./src/screens/GameScreen";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducers from "./src/redux";
import StackNavigation from "./src/navigation/StackNavigation";

export default function App() {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StackNavigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000000",
  },
});
