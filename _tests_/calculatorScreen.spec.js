import { render, fireEvent } from "@testing-library/react-native";
import CalculatorScreen from "../screens/CalculatorScreen";

describe("Tests calculatorScreen component", () => {
  test("renders correctly", () => {
    const tree = render(<CalculatorScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("should change values to calculationField and resultField on = press", () => {
    const { getByTestId, getByText } = render(<CalculatorScreen />);
    const resultField = getByTestId("resultField");
    const calculationField = getByTestId("calculationField");

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("="));
    expect(calculationField.children).toEqual(["4"]);
    expect(resultField.children).toEqual(["4"]);
  });
  test("should change values to calculationField on DEL press", () => {
    const { getByTestId, getByText } = render(<CalculatorScreen />);
    const resultField = getByTestId("resultField");
    const calculationField = getByTestId("calculationField");

    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("-"));
    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("DEL"));
    expect(calculationField.children).toEqual(["5-"]);
  });
  test("should change values to calculationField on AC press", () => {
    const { getByTestId, getByText } = render(<CalculatorScreen />);
    const resultField = getByTestId("resultField");
    const calculationField = getByTestId("calculationField");

    fireEvent.press(getByText("9"));
    fireEvent.press(getByText("*"));
    fireEvent.press(getByText("9"));
    fireEvent.press(getByText("AC"));
    expect(calculationField.children).toEqual(["0"]);
    expect(resultField.children).toEqual(["0"]);
  });
  test("should change values to calculationField on AC press", () => {
    const { getByTestId, getByText } = render(<CalculatorScreen />);
    const resultField = getByTestId("resultField");
    const calculationField = getByTestId("calculationField");

    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("*"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("+"));
    expect(calculationField.children).toEqual(["4+"]);
    expect(resultField.children).toEqual(["4"]);
  });
  test("should change values to calculationField on AC press", () => {
    const { getByTestId, getByText } = render(<CalculatorScreen />);
    const resultField = getByTestId("resultField");
    const calculationField = getByTestId("calculationField");

    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("+"));
    expect(calculationField.children).toEqual(["2+"]);
  });
});
