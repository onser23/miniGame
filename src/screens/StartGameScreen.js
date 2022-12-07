import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { setMyNumber } from "../redux/action";

const StartGameScreen = () => {
  const image = { uri: "https://wallpapercave.com/dwp1x/wp6936119.jpg" };

  const { GeneralResponse } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <View style={styles.startGameMain}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.startGameContainer}>
          <View style={styles.guessMyNumberTextContainer}>
            <Text style={styles.guessMyNumberText}>Rəqəmi Tap</Text>
          </View>
          <View style={styles.inputTextContainer}>
            <Text style={styles.inputTextContainerText}>Ədəd Daxil Edin</Text>
            <TextInput
              onChangeText={(number) => dispatch(setMyNumber(number))}
              keyboardType="number-pad"
              maxLength={2}
              style={styles.inputText}
              value={GeneralResponse.myNumber}
            />
            <View style={styles.primaryButtonContainer}>
              <PrimaryButton buttonName="start">Başla</PrimaryButton>
              <PrimaryButton buttonName="clear">Sıfırla</PrimaryButton>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  startGameMain: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
  },
  startGameContainer: {
    flex: 1,
    marginTop: 90,
    width: "85%",
    alignItems: "center",
  },
  guessMyNumberTextContainer: {
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    width: "80%",
    justifyContent: "center",
  },
  guessMyNumberText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    padding: 10,
  },
  inputTextContainer: {
    marginTop: 50,
    padding: 10,
    backgroundColor: "#41409a",
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
  },
  inputTextContainerText: { color: "#fff", fontSize: 22, marginBottom: 10 },
  inputText: {
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    padding: 2,
    color: "#fff",
    fontSize: 30,
    width: "13%",
    marginBottom: 20,
  },
  primaryButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
