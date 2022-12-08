import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";

import { setMyNumber } from "../redux/action";

const StartGameScreen = () => {
  const { GeneralResponse } = useSelector((state) => state);

  const dispatch = useDispatch();
  const { width, height } = useWindowDimensions();
  const marginTopDistance = height < 395 ? 30 : 100;
  return (
    <View style={styles.startGameMain}>
      <View style={styles.image}>
        <View
          style={[styles.startGameContainer, { marginTop: marginTopDistance }]}
        >
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
      </View>

      {/* </ImageBackground> */}
    </View>
  );
};

export default StartGameScreen;

const deviceWidth = Dimensions.get("window").width;
console.log("width", deviceWidth);
const deviceHeight = Dimensions.get("window").height;
console.log("deviceHeight", deviceHeight);
const styles = StyleSheet.create({
  startGameMain: {
    flex: 1,
  },
  image: {
    flex: 1,
    backgroundColor: "#090854",
    alignItems: "center",
  },
  startGameContainer: {
    flex: 1,
    // marginTop: 90,
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
    fontSize: deviceWidth < 320 ? 21 : 26,
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
