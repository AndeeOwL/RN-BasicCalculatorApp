import { View, StyleSheet } from "react-native";
import { useCallback, useState } from "react";

import Buttons from "../components/Buttons";
import Operators from "../components/Operators";
import { StatusBar } from "expo-status-bar";
import { buttonPressHandler } from "../services/buttonPressHandler";
import { operationPressHandler } from "../services/operationPressHandler";
import ResultField from "../components/ResultField";
import CalculationField from "../components/CalculationField";

function CalculatorScreen() {
  const [resultText, setResultText] = useState("");
  const [calculationText, setCalculationText] = useState("0");
  const lastChar = useCallback(
    () => calculationText.charAt(calculationText.length - 1),
    [calculationText]
  );

  let result = [];

  const onButtonPress = (enteredValue) => {
    result = buttonPressHandler(enteredValue, calculationText, lastChar);
    changeState();
  };

  const onOperationPress = (enteredValue) => {
    result = operationPressHandler(calculationText, enteredValue, lastChar);
    changeState();
  };

  const changeState = () => {
    if (result.length === 1) {
      setCalculationText(result[0]);
    } else {
      setResultText(result[0]);
      setCalculationText(result[1]);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar style='light' />
      <ResultField testID='resultField' value={resultText} />
      <CalculationField testID='calculationField' value={calculationText} />
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
