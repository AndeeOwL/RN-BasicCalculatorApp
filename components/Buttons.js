import { View, StyleSheet } from "react-native";
import Button from "./Button";
import Row from "./Row";

function Buttons(props) {
  return (
    <View style={styles.numbersContainer}>
      {Array.from(
        [0, 1, 2].map((i) => (
          <Row
            key={Math.random().toString()}
            values={[i * 3 + 1, i * 3 + 2, i * 3 + 3]}
            onPress={props.onButtonPress}
          />
        ))
      )}
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
