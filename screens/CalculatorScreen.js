import { View, StyleSheet } from "react-native";
import { useState, useMemo } from "react";

import Buttons from "../components/Buttons";
import Operators from "../components/Operators";
import { StatusBar } from "expo-status-bar";
import { buttonPressHandler } from "../services/buttonPressHandler";
import { operationPressHandler } from "../services/operationPressHandler";

function CalculatorScreen() {
  const [resultText, setResultText] = useState("");
  const [calculationText, setCalculationText] = useState("0");
  const lastChar = useMemo(
    () => calculationText.charAt(calculationText.length - 1),
    [calculationText]
  );
  let result = [];

  const onButtonPress = (enteredValue) => {
    result = buttonPressHandler(enteredValue, calculationText, lastChar);

    if (result.length === 1) {
      setCalculationText(result.at(0));
    } else {
      setCalculationText(result.at(1));
      setResultText(result.at(0));
    }
  };

  const onOperationPress = (enteredValue) => {
    result = operationPressHandler(calculationText, enteredValue, lastChar);
    if (result.length > 1) {
      setResultText(result.at(0));
      setCalculationText(result.at(1));
    } else {
      setCalculationText(result.at(0));
    }
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar style='light' />

      <CalculationField value={calculationText} />
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
  buttonsContainer: {
    flex: 6,
    flexDirection: "row",
    backgroundColor: "orange",
  },
});
