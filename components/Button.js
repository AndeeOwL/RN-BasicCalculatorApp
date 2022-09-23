import { StyleSheet, Pressable, Text } from "react-native";

function Button(props) {
  return (
    <Pressable
      onPress={() => {
        props.onPress(props.value);
      }}
      style={({ pressed }) => pressed && styles.pressedButton}
    >
      <Text style={styles.numbers}>{props.value}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  numbers: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  pressedButton: {
    opacity: 0.25,
  },
});
