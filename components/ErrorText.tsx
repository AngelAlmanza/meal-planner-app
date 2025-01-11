import { StyleSheet } from "react-native"
import { Text } from "react-native"

type Props = {
  error: string | undefined
}

export const ErrorText = ({ error }: Props) => {
  return (
    <Text style={styles.errorText}>
      {error}
    </Text>
  )
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ff0000",
  }
})