import React, { useRef, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { Form as UForm } from "@unform/web";
import editUser from "../../img/edit-user.svg";
import add from "../../img/icon-add.svg";
import Input from "./Input";
import * as Yup from "yup";
import { ContextApp } from "../Context/Context.js";
import StyledForm from "./styles.js";

export default function Form() {

  const { upinsertRecord, formData } = useContext(ContextApp);

  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.setData(formData);
  }, [formData]);

  async function handleSubmit(data) {
    try {
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

      upinsertRecord(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          toast.error(error.message);
        });
      }
    }
  }

  return (
    <StyledForm>
      <UForm
        className="form-submit"
        id="form"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <Input
          type="hidden"
          placeholder="Fulano da Silva"
          name="id"
          data-input="field"
        />
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
              src={+formData.id ? editUser : add}
              title={+formData.id ? "Editar usuário" : "adicionar usuário"}
              alt={+formData.id ? "Editar usuário" : "adicionar usuário"}
            />
          }
        </button>
      </UForm>
    </StyledForm>
  );
}
