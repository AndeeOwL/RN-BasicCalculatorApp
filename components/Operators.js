import { View, StyleSheet } from "react-native";
import { OPERATORS } from "../constants/OPERATORS";
import Button from "./Button";

function Operators(props) {
  const OPERATIONS = ["DEL", "AC"];

  return (
    <View style={styles.operationsContainer}>
      {OPERATIONS.map((o) => (
        <Button
          key={Math.random().toString()}
          style={styles.operationsButtons}
          value={o}
          onPress={props.onOperationPress}
        />
      ))}
      {OPERATORS.map((o) => (
        <Button
          key={Math.random().toString()}
          style={styles.operationsButtons}
          value={o}
          onPress={props.onButtonPress}
        />
      ))}
    </View>
  );
}

export default Operators;

const styles = StyleSheet.create({
  operationsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "black",
    borderWidth: 3,
    backgroundColor: "grey",
  },
  operationsButtons: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
