import { StyleSheet, Text, View } from "react-native";

function CalculationField(props) {
  return (
    <View style={styles.calculationTextContainer}>
      <Text style={styles.calculationText}>{props.value}</Text>;
    </View>
  );
}

export default CalculationField;

const styles = StyleSheet.create({
  calculationTextContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 3,
    backgroundColor: "grey",
    paddingHorizontal: 15,
  },
  calculationText: {
    color: "white",
    fontSize: 30,
  },
});
