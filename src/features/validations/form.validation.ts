import * as yup from "yup";

export const FormSchema = yup.object().shape({
  email: yup.string().required(),
  nome: yup.string().required(),
});
