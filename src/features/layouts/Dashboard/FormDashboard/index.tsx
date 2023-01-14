import * as styled from "./styles";
import * as components from "../../../../components";
import * as validations from "../../../validations";

import { motion } from "framer-motion";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RiSendPlaneFill, RiFeedbackLine } from "react-icons/ri";
import { IForm } from "../../../interfaces/global/globalInterfaces";
import { apiMain } from "../../../services/api";

export const FormDashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ resolver: yupResolver(validations.FormSchema) });

  const postApi = async (data: IForm) => {
    try {
      await apiMain.post("/messages", { ...data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <styled.Form
      onSubmit={() => {
        handleSubmit(postApi);
      }}
    >
      <motion.div className="title">
        <RiFeedbackLine size={35} />

        <motion.h2>Entre em contato!</motion.h2>
      </motion.div>

      <components.Input
        type="text"
        id="name"
        placeholder="Coloque seu nome aqui."
        register={register}
      >
        Nome:
      </components.Input>
      {errors.email && <motion.span></motion.span>}

      <components.Input
        type="text"
        id="email"
        placeholder="Coloque seu e-mail aqui."
        register={register}
      >
        E-mail:
      </components.Input>
      {errors.name && <motion.span></motion.span>}

      <components.TextArea
        id="message"
        placeholder="Coloque seu e-mail aqui."
        register={register}
      >
        Mensagem:
      </components.TextArea>
      {errors.message && <motion.span></motion.span>}

      <motion.div className="button">
        <components.Button type="submit">
          <RiSendPlaneFill />
        </components.Button>
      </motion.div>
    </styled.Form>
  );
};
