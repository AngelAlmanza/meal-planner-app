import { StyleSheet, Text, TextInput } from "react-native"

type Props = {
  value: string
  label?: string
  placeholder?: string
  onChangeText: (text: string) => void
  onBlur?: () => void
}

export const PlannerTextInput = ({ value, onChangeText, onBlur, label, placeholder = "" }: Props) => {
  return (
    <>
      {
        label && <Text style={styles.label}>{label}</Text>
      }
      <TextInput
        value={value}
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
    </>
  )
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 4,
    fontWeight: "600",
    fontSize: 18,
  },
  input: {
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    fontWeight: "normal",
    fontSize: 16,
  }
})