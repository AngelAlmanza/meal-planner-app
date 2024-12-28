import { IIngredient } from "@/interfaces/Recipes";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  ingredients: IIngredient[];
}

export const IngredientsTable = ({ ingredients }: Props) => {
  return (
    <View style={styles.container}>
      {
        ingredients.map((ingredient, index) => (
          <View key={index} style={{...styles.ingredientRow, borderTopWidth: index === 0 ? 1 : 0}}>
            <View style={styles.ingredientName}>
              <Text style={styles.ingredientNameText}>{ingredient.name}</Text>
            </View>
            <View style={styles.ingredientQuantity}>
              <Text style={styles.ingredientQuantityText}>{ingredient.quantity}</Text>
            </View>
          </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ingredientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
  ingredientName: {
    backgroundColor: '#f9f9f9',
    width: '50%',
    padding: 12,
  },
  ingredientNameText: {
    fontSize: 16,
    color: '#333',
  },
  ingredientQuantity: {
    backgroundColor: '#e9e9e9',
    width: '50%',
    padding: 12,
  },
  ingredientQuantityText: {
    fontSize: 16,
    color: '#333',
  },
})