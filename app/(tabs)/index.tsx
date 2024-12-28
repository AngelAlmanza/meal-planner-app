import { IngredientsTable } from '@/components/IngredientsTable';
import { RecipeSteps } from '@/components/RecipeSteps';
import { IIngredient } from '@/interfaces/Recipes';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const ingredients: IIngredient[] = [
  { name: 'Chicken', quantity: '1 lb' },
  { name: 'Rice', quantity: '1 cup' },
  { name: 'Salt', quantity: '1 tsp' },
  { name: 'Pepper', quantity: '1 tsp' },
  { name: 'Olive Oil', quantity: '2 tbsp' },
  { name: 'Water', quantity: '2 cups' },
]

const steps = [
  'Preheat oven to 350 degrees.',
  'Season chicken with salt and pepper.',
  'Heat olive oil in a skillet over medium heat.',
  'Add chicken to skillet and cook until browned.',
  'Add rice and water to skillet.',
  'Bring to a boil, then cover and bake for 20 minutes.',
  'Remove from oven and let sit for 5 minutes before serving.',
]

export default function HomeScreen() {
  const viewRecipe = () => {
    console.log('View Recipe');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.nextMealImgContainer}>
        <Image
          source={require('@/assets/images/next-meal.jpg')}
          style={styles.nextMealImg}
          resizeMode='cover'
        />
      </View>
      <View style={styles.nextMealInfo}>
        <Text style={styles.nextMealTitle}>Chicken and Rice</Text>
        <Pressable onPress={viewRecipe}>
          <Text style={styles.linkText}>View Recipe</Text>
        </Pressable>
        <IngredientsTable ingredients={ingredients} />
        <RecipeSteps steps={steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  nextMealImgContainer: {
    height: 350,
    width: '100%',
  },
  nextMealImg: {
    height: '100%',
    width: '100%',
  },
  nextMealInfo: {
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    padding: 16,
    gap: 12,
    backgroundColor: '#fff',
    marginTop: -24,
  },
  nextMealTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  linkText: {
    color: '#007AFF',
    fontSize: 16,
  }
})
