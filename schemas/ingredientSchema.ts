import * as yup from "yup";

export const ingredientSchema = yup.object({
  name: yup
    .string()
    .required("El nombre es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  measurement: yup
    .string()
    .required("La medida es requerida")
    .min(1, "La medida debe tener al menos 1 caracter"),
})