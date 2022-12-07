import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  setMyNumber,
  setSystemChoiceNumber,
  setSystemWrongNumbers,
} from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const PrimaryButton = ({
  children,
  buttonName,
  myNumberIsLow,
  myNumberIsHigth,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);

  const buttonHandler = (buttonName) => {
    if (buttonName === "clear") {
      dispatch(setMyNumber(""));
    }
    if (buttonName === "start") {
      navigation.navigate("GameScreen");
    }

    // if (
    //   GeneralResponse.myNumber !== GeneralResponse.systemChoiceNumber &&
    //   GeneralResponse.systemChoiceNumber !== ""
    // ) {
    //   dispatch(
    //     setSystemWrongNumbers({
    //       key: "n",
    //       wrongnumber: GeneralResponse.systemChoiceNumber,
    //     })
    //   );
    // }
  };
  return (
    <TouchableOpacity
      onPress={() => buttonHandler(buttonName, myNumberIsLow, myNumberIsHigth)}
      style={styles.primaryButtonContainer}
    >
      <Text style={styles.primaryButtonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  primaryButtonContainer: {
    backgroundColor: "#5250cf",
    width: "45%",
    alignItems: "center",
    padding: 6,
    borderRadius: 15,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
