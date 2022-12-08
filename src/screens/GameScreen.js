import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React, { useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";

import {
  setSystemChoiceNumber,
  setSystemWrongNumbers,
  setMinNumber,
  setMaxNumber,
  setSystemRound,
} from "../redux/action";

const GameScreen = () => {
  useEffect(() => {
    generateNumber();
  }, []);

  // const image = { uri: "https://wallpapercave.com/dwp1x/wp6936119.jpg" };

  const { GeneralResponse } = useSelector((state) => state);

  const dispatch = useDispatch();
  let systemRound = GeneralResponse.systemRound + 1;
  const generateNumber = () => {
    const generateANumber =
      Math.floor(
        Math.random() *
          (GeneralResponse.maxNumber - GeneralResponse.minNumber + 1)
      ) + GeneralResponse.minNumber;

    dispatch(setSystemChoiceNumber(generateANumber));

    if (GeneralResponse.myNumber !== generateANumber) {
      dispatch(
        setSystemWrongNumbers({
          key: Math.random(),
          systemRound: systemRound,
          wrongnumber: generateANumber,
        })
      );
      dispatch(setSystemRound(systemRound));
    }
  };

  const myNumberIsHigth = () => {
    const maxNumber = GeneralResponse.maxNumber;
    const minNumber =
      GeneralResponse.systemChoiceNumber[
        GeneralResponse.systemChoiceNumber.length - 1
      ];
    const generateANumber =
      Math.floor(Math.random() * (maxNumber - 1 - minNumber + 1)) + minNumber;

    dispatch(setSystemChoiceNumber(generateANumber));
    dispatch(setMinNumber(minNumber));

    if (GeneralResponse.myNumber !== generateANumber) {
      dispatch(
        setSystemWrongNumbers({
          key: Math.random(),
          systemRound: systemRound,
          wrongnumber: generateANumber,
        })
      );
      dispatch(setSystemRound(systemRound));
    }
  };

  const myNumberIslow = () => {
    const maxNumber =
      GeneralResponse.systemChoiceNumber[
        GeneralResponse.systemChoiceNumber.length - 1
      ];

    const minNumber = GeneralResponse.minNumber;
    const generateANumber =
      Math.floor(Math.random() * (maxNumber - 1 - minNumber + 1)) + minNumber;
    const test = Math.floor(Math.random() * (10 - 1 - 7 + 1)) + 7;
    console.log(test);
    dispatch(setSystemChoiceNumber(generateANumber));
    dispatch(setMaxNumber(maxNumber));
    if (GeneralResponse.myNumber !== generateANumber) {
      dispatch(
        setSystemWrongNumbers({
          key: Math.random(),
          systemRound: systemRound,
          wrongnumber: generateANumber,
        })
      );
      dispatch(setSystemRound(systemRound));
    }
  };
  const { width, height } = useWindowDimensions();

  let content = (
    <View style={styles.image}>
      <View style={styles.startGameContainer}>
        <View style={styles.guessMyNumberTextContainer}>
          <Text style={styles.guessMyNumberText}>Proqramın Seçimi</Text>
        </View>
        <View style={styles.guessProgramNumberTextContainer}>
          <Text style={styles.guessProgramNumberText}>
            {GeneralResponse.systemChoiceNumber.slice(-1)}
          </Text>
        </View>
        <View style={styles.inputTextContainer}>
          <Text style={styles.inputTextContainerText}>
            Rəqəmin böyükdür ya kiçik?
          </Text>

          <View style={styles.primaryButtonContainer}>
            <TouchableOpacity
              onPress={() => myNumberIsHigth()}
              style={styles.primaryButtonContainerOwn}
            >
              <Text style={styles.primaryButtonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => myNumberIslow()}
              style={styles.primaryButtonContainerOwn}
            >
              <Text style={styles.primaryButtonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={GeneralResponse.systemWrongNumbers}
            renderItem={({ item }) => (
              <View style={styles.previouseChoiceContainer}>
                <Text style={styles.previouseChoiceText}>
                  #{item.systemRound}
                </Text>
                <Text style={styles.previouseChoiceText}>
                  Proqramın səhv seçimi: {item.wrongnumber}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
      </View>
    </View>
  );

  if (width > 395) {
    content = (
      <View style={styles.image}>
        <View style={styles.startGameContainer}>
          <View style={styles.guessMyNumberTextContainer}>
            <Text style={styles.guessMyNumberText}>Proqramın Seçimi</Text>
          </View>
          <View style={styles.guessProgramNumberTextContainer}>
            <Text style={styles.guessProgramNumberText}>
              {GeneralResponse.systemChoiceNumber.slice(-1)}
            </Text>
          </View>
          <View style={styles.inputTextContainer}>
            <View style={styles.primaryButtonContainer}>
              <TouchableOpacity
                onPress={() => myNumberIsHigth()}
                style={styles.primaryButtonContainerOwn}
              >
                <Text style={styles.primaryButtonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => myNumberIslow()}
                style={styles.primaryButtonContainerOwn}
              >
                <Text style={styles.primaryButtonText}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              data={GeneralResponse.systemWrongNumbers}
              renderItem={({ item }) => (
                <View style={styles.previouseChoiceContainer}>
                  <Text style={styles.previouseChoiceText}>
                    #{item.systemRound}
                  </Text>
                  <Text style={styles.previouseChoiceText}>
                    Proqramın səhv seçimi: {item.wrongnumber}
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.key}
            />
          </View>
        </View>
      </View>
    );
  }

  return <View style={styles.startGameMain}>{content}</View>;
};

export default GameScreen;

const styles = StyleSheet.create({
  startGameMain: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#090854",
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
    fontSize: 26,
    fontWeight: "bold",
    padding: 10,
  },
  guessProgramNumberTextContainer: {
    marginTop: 20,
    padding: 30,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  guessProgramNumberText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  inputTextContainer: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#41409a",
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 25,
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
  previouseChoiceContainer: {
    borderWidth: 1,
    borderColor: "#ffffff",
    marginBottom: 16,
    backgroundColor: "#41409a",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 13,
    borderRadius: 19,
    elevation: 5,
    shadowColor: "#ffffff",
  },
  previouseChoiceText: {
    color: "#ffffff",
  },
  primaryButtonContainerOwn: {
    backgroundColor: "#5250cf",
    width: "45%",
    alignItems: "center",
    padding: 6,
    borderRadius: 15,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 18,
  },
});
