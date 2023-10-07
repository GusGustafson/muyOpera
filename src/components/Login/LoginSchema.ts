import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// mín 5 caracteres, 1 mayúscula, 1 minúscula, 1 número.

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email(
      "Introduzca una dirección de correo válida. / Please enter a valid email address."
    )
    .required("Este campo es obligatorio. / This field is mandatory."),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "Como mínimo: 5 caracteres, 1 mayúscula, 1 minúscula y 1 número. / At least: 5 characters, 1 upper case, 1 lower case and 1 number.",
    })
    .required("Este campo es obligatorio. / This field is mandatory."),
});
