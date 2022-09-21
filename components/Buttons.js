import { View, StyleSheet } from "react-native";
import Button from "./Button";
import Row from "./Row";

function Buttons(props) {
  return (
    <View style={styles.numbersContainer}>
      <Row
        firstValue={"1"}
        secondValue={"2"}
        thirdValue={"3"}
        onPress={props.onButtonPress}
      />
      <Row
        firstValue={"4"}
        secondValue={"5"}
        thirdValue={"6"}
        onPress={props.onButtonPress}
      />
      <Row
        firstValue={"7"}
        secondValue={"8"}
        thirdValue={"9"}
        onPress={props.onButtonPress}
      />
      <View style={styles.rows}>
        <Button value={"."} onPress={props.onButtonPress} />
        <Button value={"0"} onPress={props.onButtonPress} />
        <Button value={"="} onPress={props.onOperationPress} />
      </View>
    </View>
  );
}

export default Buttons;

const styles = StyleSheet.create({
  numbersContainer: {
    flex: 3,
  },
  rows: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "black",
    borderWidth: 3,
  },
});
