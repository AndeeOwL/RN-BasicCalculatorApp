import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import Buttons from "../components/Buttons";
import Operators from "../components/Operators";
import { StatusBar } from "expo-status-bar";
import { calculatorService } from "../services/calculatorService";

function CalculatorScreen() {
  const [resultText, setResultText] = useState("");
  const [operationsText, setOperationsText] = useState("0");
  const invalidCharSet = ["-", "+", "/", "*"];
  const lastChar = () => operationsText.charAt(operationsText.length - 1);
  let isValid = false;

  const onButtonPress = (enteredValue) => {
    isValid = () =>
      operationsText.forEach((char) => {
        if (invalidCharSet.includes(char)) {
          isValid = true;
        }
      });
    if (operationsText.toString() === "0" && !isNaN(enteredValue)) {
      setOperationsText(enteredValue);
    } else if (
      (invalidCharSet.includes(lastChar) || lastChar === ".") &&
      (invalidCharSet.includes(enteredValue) || enteredValue === ".")
    ) {
      return;
    } else if (invalidCharSet.includes(lastChar) && isValid) {
      let result = () => calculatorService(operationsText, invalidCharSet);
      setOperationsText(result);
      setResultText(result);
    } else {
      setOperationsText(operationsText + enteredValue.toString());
    }
  };

  const onOperationPress = (enteredValue) => {
    switch (enteredValue) {
      case "=":
        if (invalidCharSet.includes(lastChar)) {
          return;
        } else {
          let result = calculatorService(operationsText, invalidCharSet);
          setOperationsText(result);
          setResultText(result);
        }
        break;
      case "DEL":
        if (operationsText.toString().length === 1) {
          setOperationsText("0");
        } else {
          setOperationsText(
            operationsText.toString().substring(0, operationsText.length - 1)
          );
        }
        break;
      case "AC":
        setResultText("0");
        setOperationsText("0");
        break;
      default:
        return;
    }
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar style='light' />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.operationsTextContainer}>
        <Text style={styles.operationText}>{operationsText}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Buttons
          style={styles.buttonsContainer}
          onButtonPress={onButtonPress}
          onOperationPress={onOperationPress}
        />
        <Operators
          onButtonPress={onButtonPress}
          onOperationPress={onOperationPress}
        />
      </View>
    </View>
  );
}

export default CalculatorScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  resultContainer: {
    flex: 4,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderBottomColor: "Orange",
    borderBottomWidth: 4,
    marginRight: 15,
  },
  resultText: {
    color: "white",
    fontSize: 50,
    padding: 10,
    fontWeight: "bold",
  },
  operationsTextContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 3,
    backgroundColor: "grey",
    paddingHorizontal: 15,
  },
  operationText: {
    color: "white",
    fontSize: 30,
  },
  buttonsContainer: {
    flex: 6,
    flexDirection: "row",
    backgroundColor: "orange",
  },
});
