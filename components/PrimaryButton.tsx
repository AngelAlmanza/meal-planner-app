import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native"

type Props = {
  text: string
  btnStyles?: StyleProp<ViewStyle>
  textStyles?: StyleProp<TextStyle>
  onPress: () => void
}

export const PrimaryButton = ({ text, btnStyles, textStyles, onPress }: Props) => {
  return (
    <Pressable style={[styles.button, btnStyles]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyles]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: "#C30E59",
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  }
})