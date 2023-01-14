import * as yup from "yup";

export const FormSchema = yup.object().shape({
  email: yup.string().required(),
  name: yup.string().required(),
  message: yup.string().required(),
});
