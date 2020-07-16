import React, { useState, useEffect, useContext } from "react";
import "../../App.css";
import btnEdit from "../../img/edit.svg";
import btnDelete from "../../img/delete.svg";
import { ContextApp } from "../Context/Context.js";
import StyledTable from "./styles";

export default function Table() {

  const { deleteRecord, recordPage, editRecord } = useContext(ContextApp);

  function confirmDelete(id) {
    if (window.confirm("Você realmente quer Excluir este registro?")) {
      deleteRecord(id);
    } else {
      return (id = null);
    }
  }

  return (
    (
      <>
        <StyledTable>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Nome </th>
                <th>Data de Nascimento</th>
                <th>Email</th>
                <th>Contato</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody id="tbody">
              {recordPage.map((record, i) => {
                return (
                  <tr key={i}>
                    <td></td>
                    <td>{record.name}</td>
                    <td>{record.dateofbirth}</td>
                    <td>{record.email}</td>
                    <td>{record.tel}</td>
                    <td>
                      <button
                        className="btn btn-edit"
                        onClick={() => editRecord(record.id)}
                      >
                        <img
                          src={btnEdit}
                          title="editar usuário!"
                          alt="editar usuário!"
                        />
                      </button>
                      <button
                        className="btn btn-delete"
                        onClick={() => confirmDelete(record.id)}
                      >
                        <img
                          src={btnDelete}
                          title="deletar usuário!"
                          alt="deletar usuário!"
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </StyledTable>
      </>
    )
  );
}
