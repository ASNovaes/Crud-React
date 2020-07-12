import React, { useRef } from "react";
import { toast } from "react-toastify";
import { Form as UForm } from "@unform/web";
import editUser from "../../img/edit-user.svg";
import add from "../../img/icon-add.svg";
import Input from "./Input";
import * as Yup from "yup";

export default function Form({ addRecord }) {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      console.log({ data });
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(2, "Nome deve ter no mínimo 2 caracteres")
          .required("Nome é obrigatório"),
        email: Yup.string()
          .email("Deve ser um email válido")
          .required("E-mail é obrigatório"),
        dateofbirth: Yup.date()
          .required("Data de nascimento é obrigatório")
          .min(new Date("01-01-1900"), "Data deve ser maior que o ano de 1900"),
        tel: Yup.string().required("Telefone é obrigatório"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      addRecord(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          toast.error(error.message);
        });
      }
    }
  }

  return (
    <UForm
      className="form-submit"
      id="form"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <p>
        <Input
          type="text"
          placeholder="Fulano da Silva"
          name="name"
          data-input="field"
        />
        <i className="fa fa-user-o" style={{ fontSize: "20px" }}></i>
      </p>

      <p>
        <Input
          type="date"
          placeholder="ano de nascimento"
          name="dateofbirth"
          min="1900-10-10"
          data-input="field"
          required
        />
      </p>

      <p>
        <Input
          type="email"
          placeholder="email@exemplo.com"
          name="email"
          data-input="field"
        />
        <i className="fa fa-envelope-o" style={{ fontSize: "20px" }}></i>
      </p>

      <p>
        <Input
          type="tel"
          placeholder="(xx)xxxxx-xxxx"
          name="tel"
          data-input="field"
          style={{ margin: "0px" }}
        />
        <i className={"fa fa-mobile-phone"} style={{ fontSize: "24px" }}></i>
      </p>

      <button type="submit" className="btn btn-add">
        {
          <img
            src={true ? editUser : add}
            title={true ? "Editar usuário" : "adicionar usuário"}
            alt={true ? "Editar usuário" : "adicionar usuário"}
          />
        }
      </button>
    </UForm>
  );
}
