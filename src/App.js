import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header/Header.js";
import SearchRecord from "./components/Search/Search.js";
import Table from "./components/Table/Table.js";
import Pagination from "./components/Pagination/Pagination.js";
import Form from "./components/Form/Form.js";
import Trash from "./components/Trash/Trash.js";
import Counter from "./components/Counter/Counter.js"

export default function App() {
  const [formData, setForm] = useState({
    id: "",
    name: "",
    dateofbirth: "",
    email: "",
    tel: "",
  });

  const [records, setRecords] = useState([]);
  const [perPage] = useState(5);
  const [pageCurrent, setPageCurrent] = useState(0);
  const [overflow] = useState("content");
  const [recordPage, setRecordPage] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("ObjectRecord")) {
      setRecords([]);
      return;
    }
    const ObjectRecord = JSON.parse(localStorage.getItem("ObjectRecord"));
    setRecords(ObjectRecord);

    let lastPage = Math.ceil(ObjectRecord.length / perPage);
    if (ObjectRecord.length === 0) { lastPage = 0 }
    setPageCurrent(lastPage);

  }, []);

  useEffect(() => {
    let end = pageCurrent * perPage;
    console.log(end)
    let start = end - perPage;
    let record = records.slice(start, end);
    setRecordPage(record);
  }, [pageCurrent, records]);

  useEffect(() => {
    let lastPage = Math.ceil(records.length / perPage);
    if (records.length === 0) { lastPage = 0 }
    setPageCurrent(lastPage);
  }, [records]);

  const deleteRecord = useCallback((id) => {
    let updateRecords = records.filter((record) => record.id !== id);
    setRecords(updateRecords);
    localStorage.setItem("ObjectRecord", JSON.stringify(updateRecords));
  }, [records]);

  const deleteAllRecords = useCallback(() => {
    localStorage.removeItem("ObjectRecord");
    setRecords([]);
  }, [records]);

  const editRecord = useCallback((recordId) => {
    let ObjectRecord = JSON.parse(localStorage.getItem("ObjectRecord"));
    const form = ObjectRecord.filter((record) => recordId === record.id)[0];

    setForm(form);

  }, [records]);

  const upinsertRecord = useCallback((data) => {

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

  }, [records]);

  return (
    <div className="container" style={{ overflowY: "hidden" }}>
      <Header />
      <SearchRecord
        data={recordPage}
        setRecordPage={setRecordPage}
        pageCurrent={pageCurrent}
        setPageCurrent={setPageCurrent}
      />
      <Counter records={records} />
      <Table
        data={recordPage}
        pageCurrent={pageCurrent}
        deleteRecord={deleteRecord}
        editRecord={editRecord}
        overflow={overflow}
      />
      <Pagination
        records={records}
        pageCurrent={pageCurrent}
        setPageCurrent={setPageCurrent}
        perPage={perPage}
      />
      <Form formData={formData} upinsertRecord={upinsertRecord} />
      <Trash deleteAllRecords={deleteAllRecords} />
      <ToastContainer />
    </div>
  );
}

