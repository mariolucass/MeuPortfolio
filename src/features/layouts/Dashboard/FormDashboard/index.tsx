import * as styled from "./styles";
import * as components from "../../../../components";
import * as validations from "../../../validations";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RiSendPlaneFill, RiFeedbackLine } from "react-icons/ri";
import { IForm } from "../../../interfaces/global/globalInterfaces";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export const FormDashboard = () => {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>({ resolver: yupResolver(validations.FormSchema) });

  const postApi = async (data: IForm) => {
    if (message.length < 200) {
      try {
        const messageDefault =
          "Olá, gostaria de conhecê-lo melhor Mário, aqui estão minhas informações...";

        const { name, email } = data;
        const templateParams = {
          from_name: name,
          email: email,
          message: message.length ? message : messageDefault,
        };
        await emailjs.send(
          "service_jcwtyig",
          "template_8phazkt",
          templateParams,
          "7YS0dymsooXL9f8LZ"
        );
        toast.success("Muito obrigado, seu email enviado com sucesso!");
        reset();
      } catch (error) {}
    }
  };

  return (
    <styled.Form onSubmit={handleSubmit(postApi)}>
      <motion.div className="title">
        <RiFeedbackLine size={35} />

        <motion.h2>Entre em contato!</motion.h2>
      </motion.div>

      <motion.div className="interactions">
        <motion.div className="inputs">
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
        </motion.div>

        <components.TextArea
          id="message"
          placeholder="Coloque sua mensagem aqui."
          setState={setMessage}
        >
          Mensagem:
        </components.TextArea>
        {errors.message && <motion.span></motion.span>}
      </motion.div>

      <motion.div className="button">
        <components.Button type="submit">
          <RiSendPlaneFill />
        </components.Button>
      </motion.div>
    </styled.Form>
  );
};
