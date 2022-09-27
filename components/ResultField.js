import { StyleSheet, Text, View } from "react-native";

function ResultField(props) {
  return (
    <View style={styles.resultContainer}>
      <Text testID={props.testID} style={styles.resultText}>
        {props.value}
      </Text>
    </View>
  );
}

export default ResultField;

const styles = StyleSheet.create({
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
});
