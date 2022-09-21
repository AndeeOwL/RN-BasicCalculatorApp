import { View, StyleSheet } from "react-native";
import Button from "./Button";

function Operators(props) {
  return (
    <View style={styles.operationsContainer}>
      <Button
        style={styles.operationsButtons}
        value={"DEL"}
        onPress={props.onOperationPress}
      />
      <Button
        style={styles.operationsButtons}
        value={"AC"}
        onPress={props.onOperationPress}
      />
      <Button
        style={styles.operationsButtons}
        value={"+"}
        onPress={props.onButtonPress}
      />
      <Button
        style={styles.operationsButtons}
        value={"-"}
        onPress={props.onButtonPress}
      />
      <Button
        style={styles.operationsButtons}
        value={"/"}
        onPress={props.onButtonPress}
      />
      <Button
        style={styles.operationsButtons}
        value={"*"}
        onPress={props.onButtonPress}
      />
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
