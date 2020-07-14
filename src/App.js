import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.js";
import SearchRecord from "./components/Search/Search.js";
import Table from "./components/Table/Table.js";
import Pagination from "./components/Pagination/Pagination.js";
import Form from "./components/Form/Form.js";
import Trash from "./components/Trash/Trash.js";

export default function App() {
  const [formData, setForm] = useState({
    id: "",
    name: "",
    dateofbirth: "",
    email: "",
    tel: "",
  });

  const [records, setRecords] = useState([]);
  // TODO: criar paginação com hooks
  const [perPage, setPerPage] = useState(5);
  const [pageCurrent, setPageCurrent] = useState(0);
  const [overflow, setOverflow] = useState("content");
  const [modeEdit, setModeEdit] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("ObjectRecord")) {
      setRecords([]);
      return;
    }
    const ObjectRecord = JSON.parse(localStorage.getItem("ObjectRecord"));
    setRecords(ObjectRecord);
  }, []);

  function deleteRecord(id) {
    let updateRecords = records.filter((record) => record.id !== id);
    setRecords(updateRecords);
    localStorage.setItem("ObjectRecord", JSON.stringify(updateRecords));
  }

  function deleteAllRecords() {
    localStorage.removeItem("ObjectRecord");
    setRecords([]);
  }

  function editRecord(recordId) {
    let ObjectRecord = JSON.parse(localStorage.getItem("ObjectRecord"));

    const form = ObjectRecord.filter((record) => recordId === record.id)[0];

    setForm(form);
  }

  function upinsertRecord(data) {

    let upinsert = [];

    if (!data.id.length) {
      upinsert = [...records, { ...data, id: new Date().getTime() }];

    } else {
      upinsert = [...records];

      records.forEach((record, i) => {
        if (+record.id === +data.id) {
          return upinsert.splice(i, 1, data)
        }
      });
    }

    localStorage.setItem("ObjectRecord", JSON.stringify(upinsert));
    setRecords(upinsert);
    setForm({
      id: "",
      name: "",
      dateofbirth: "",
      email: "",
      tel: "",
    });
  }

  return (
    <div className="container" style={{ overflowY: "hidden" }}>
      <Header />
      <SearchRecord records={records} recordSought={null} />
      <Table
        data={records}
        deleteRecord={deleteRecord}
        editRecord={editRecord}
        overflow={overflow}
      />
      <Pagination state={null} updatePage={null} />
      <Form formData={formData} upinsertRecord={upinsertRecord} />
      <Trash deleteAllRecords={deleteAllRecords} />
      <ToastContainer />
    </div>
  );
}
