import { ErrorText } from "@/components/ErrorText";
import { PlannerTextInput } from "@/components/PlannerTextInput";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { SelectInput } from "@/components/SelectInput";
import { MEASUREMENTS } from "@/constants/Measurements";
import { ingredientSchema } from "@/schemas/ingredientSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import { InferType } from "yup";

type IngredientFormData = InferType<typeof ingredientSchema>;

export default function Form() {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ingredientSchema),
  })

  const goBack = () => {
    router.back()
  }

  const onSubmit = (data: IngredientFormData) => {
    console.log(data)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View>
        <Text style={styles.tilte}>Agregar Ingrediente</Text>
      </View>
      <View style={styles.formContainer}>
        <View>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <PlannerTextInput
                value={value}
                label="Nombre:"
                placeholder="Nombre del ingrediente"
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
            name="name"
          />
          {errors.name && <ErrorText error={errors.name.message} />}
        </View>
        <View>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <SelectInput
                label="Unidad de medida:"
                placeholder="Selecciona una unidad de medida"
                data={MEASUREMENTS}
                onSelect={onChange}
              />
            )}
            name="measurement"
          />
          {errors.measurement && <ErrorText error={errors.measurement.message} />}
        </View>
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton text="Agregar" onPress={handleSubmit(onSubmit)} />
        <SecondaryButton text="Cancelar" onPress={goBack} />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  tilte: {
    fontSize: 24,
    marginBottom: 16,
    color: "#333",
  },
  formContainer: {
    gap: 16,
  },
  btnContainer: {
    marginTop: 24,
    gap: 8,
  }
})