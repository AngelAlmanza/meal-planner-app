import { StyleSheet, Text, View } from "react-native";

type Props = {
  steps: string[];
}

export const RecipeSteps = ({ steps }: Props) => {
  return (
    <View style={style.container}>
      {
        steps.map((step, index) => (
          <View key={index} style={style.step}>
            <View style={style.stepNumber}>
              <Text style={style.stepNumberText}>{index + 1}</Text>
            </View>
            <View style={style.stepTextContainer}>
              <Text style={style.stepText}>{step}</Text>
            </View>
          </View>
        ))
      }
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  step: {
    paddingVertical: 12,
    flexDirection: 'row',
  },
  stepNumber: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  stepTextContainer: {
    flex: 1,
    paddingLeft: 12,
  },
  stepText: {
    fontSize: 16,
    color: '#333',
  },
})