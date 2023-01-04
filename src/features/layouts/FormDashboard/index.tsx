import * as styled from "./styles";
import * as validations from "../../validations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const FormDashboard = () => {
  const submitHandler = () => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validations.FormSchema) });

  return (
    <styled.DivForm>
      <styled.Form
        onSubmit={() => {
          handleSubmit;
        }}
      >
        <input type="text" {...register("name")} />
        {errors.name && <span></span>}

        <input type="text" {...register("email")} />
        {errors.email && <span></span>}

        <button type="submit"></button>
      </styled.Form>
    </styled.DivForm>
  );
};
