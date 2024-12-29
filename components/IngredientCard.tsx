import { IIngredient } from "@/interfaces/Recipes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  ingredient: IIngredient;
}

export const IngredientCard = ({ ingredient }: Props) => {
  const handleEdit = () => {
    console.log('Edit ingredient')
  }

  return (
    <Pressable style={styles.container} onPress={handleEdit}>
      <Image
        source={{ uri: ingredient.img }}
        style={styles.img}
        resizeMode="cover"
      />
      <View style={styles.ingredientNameContainer}>
        <Text style={styles.ingredientName}>{ingredient.name}</Text>
      </View>
      <View style={styles.editIcon}>
        <MaterialCommunityIcons name="pencil" size={24} color="black" />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: "relative",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
  },
  ingredientNameContainer: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
  },
  ingredientName: {
    fontSize: 18,
    fontWeight: "400",
  },
  editIcon: {
    position: "absolute",
    right: 20,
    top: 45,
  },
})