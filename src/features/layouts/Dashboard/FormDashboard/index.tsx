import * as styled from "./styles";
import * as components from "../../../../components";
import * as validations from "../../../validations";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RiSendPlaneFill, RiFeedbackLine } from "react-icons/ri";

export const FormDashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validations.FormSchema) });

  return (
    <styled.Form
      onSubmit={() => {
        handleSubmit;
      }}
    >
      <motion.div className="title">
        <RiFeedbackLine size={35} />

        <motion.h2>Feedbacks</motion.h2>
      </motion.div>

      <components.Input
        type="text"
        id="email"
        placeholder="Coloque se e-mail aqui."
        register={register}
      >
        E-mail
      </components.Input>
      {errors.email && <motion.span></motion.span>}

      <components.Input
        type="text"
        id="name"
        placeholder="Coloque sua mensagem aqui."
        register={register}
      >
        Mensagem
      </components.Input>
      {errors.name && <motion.span></motion.span>}

      <components.Button type="submit">
        <RiSendPlaneFill />
      </components.Button>
    </styled.Form>
  );
};
