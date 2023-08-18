import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// mín 5 caracteres, 1 mayúscula, 1 minúscula, 1 número.

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Introduzca una dirección de correo válida.")
    .required("Este campo es obligatorio."),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "Como mínimo: 5 caracteres, 1 mayúscula, 1 minúscula y 1 número.",
    })
    .required("Este campo es obligatorio."),
});
