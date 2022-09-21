import { StyleSheet, View } from "react-native";
import Button from "./Button";

function Row(props) {
  return (
    <View style={styles.rows}>
      <Button value={props.firstValue} onPress={props.onPress} />
      <Button value={props.secondValue} onPress={props.onPress} />
      <Button value={props.thirdValue} onPress={props.onPress} />
    </View>
  );
}

export default Row;

const styles = StyleSheet.create({
  rows: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "black",
    borderWidth: 3,
  },
});
