import { IngredientCard } from "@/components/IngredientCard";
import { IIngredient } from "@/interfaces/Recipes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const ingredients: IIngredient[] = [
  { name: 'Chicken', quantity: '1 lb', img: 'https://via.placeholder.com/150' },
  { name: 'Rice', quantity: '1 cup', img: 'https://via.placeholder.com/150' },
  { name: 'Salt', quantity: '1 tsp', img: 'https://via.placeholder.com/150' },
  { name: 'Pepper', quantity: '1 tsp', img: 'https://via.placeholder.com/150' },
  { name: 'Olive Oil', quantity: '2 tbsp', img: 'https://via.placeholder.com/150' },
  { name: 'Water', quantity: '2 cups', img: 'https://via.placeholder.com/150' },
]

export default function Ingredients() {
  const handleAdd = () => {
    console.log('Add ingredient')
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Ingredients</Text>
      </View>
      <FlatList
        data={ingredients}
        renderItem={({ item }) => <IngredientCard ingredient={item} />}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        contentContainerStyle={styles.ingredientsWrapper}
      />
      <Pressable style={styles.addBtn} onPress={handleAdd}>
        <View style={styles.addBtnIconContainer}>
          <MaterialCommunityIcons name="plus" size={32} color="white" />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  box: {
    padding: 16,
    paddingBottom: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  ingredientsWrapper: {
    padding: 16,
  },
  addBtn: {
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 650,
    right: 16,
    backgroundColor: '#C30E59',
  },
  addBtnIconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
})