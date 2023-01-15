import * as yup from "yup";

export const FormSchema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
});
