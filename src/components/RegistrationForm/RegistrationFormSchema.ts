import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// mín 5 caracteres, 1 mayúscula, 1 minúscula, 1 número.

export const RegistrationFormSchema = yup.object().shape({
  name: yup
    .string()
    .label("Introduzca un nombre válido.")
    .required("Este campo es obligatorio."),
  surname: yup
    .string()
    .label("Introduzca un apellido válido.")
    .required("Este campo es obligatorio."),
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
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Las contraseñas deben coincidir.")
    .required("Este campo es obligatorio."),
});
