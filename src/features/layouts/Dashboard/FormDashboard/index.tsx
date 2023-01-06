import * as styled from "./styles";
import * as validations from "../../../validations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../../../components/Inputs";
import { motion } from "framer-motion";
import { Button } from "../../../../components/Buttons";
import { RiSendPlaneFill, RiFeedbackLine } from "react-icons/ri";

import { VscFeedback } from "react-icons/vsc";

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

      <Input
        type="text"
        id="email"
        placeholder="Coloque se e-mail aqui."
        register={register}
      >
        E-mail
      </Input>
      {errors.email && <motion.span></motion.span>}

      <Input
        type="text"
        id="name"
        placeholder="Coloque sua mensagem aqui."
        register={register}
      >
        Mensagem
      </Input>
      {errors.name && <motion.span></motion.span>}

      <Button type="submit">
        <RiSendPlaneFill />
      </Button>
    </styled.Form>
  );
};
