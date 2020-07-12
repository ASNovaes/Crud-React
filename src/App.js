import React, { useState, useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header.js";
import SearchRecord from "./components/Search/Search.js";
import Table from "./components/Table/Table.js";
import Pagination from "./components/Pagination/Pagination.js";
import Form from "./components/Form/Form.js";
import Trash from "./components/Trash/Trash.js";

export default function App() {
  const [formDate, setForm] = useState({
    id: new Date().getTime(),
    name: "",
    dateofbirth: "",
    email: "",
    tel: "",
  });
  const [records, setRecords] = useState([]);
  const [renderRecords, setRenderRecords] = useState([]);
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

    updatepageCurrent(true);
  }, [updatepageCurrent]);

  function addRecord(inputs) {
    const { name, dateofbirth, email, tel } = inputs;
    const { records } = this.state;
    if (this.state.modeEdit) {
      addEditedRecord();
    } else {
      let updateRecords = [
        ...records,
        { id: new Date().getTime(), name, dateofbirth, email, tel },
      ];

      setRecords(updateRecords);
      localStorage.setItem("ObjectRecord", JSON.stringify(updateRecords));

      updatepageCurrent(true);
    }

    setForm({
      id: "",
      name: "",
      dateofbirth: "",
      email: "",
      tel: "",
    });
  }

  function deleteRecord(id) {
    let updateRecords = records.filter((record) => record.id !== id);
    setRecords(updateRecords);
    setRenderRecords(updateRecords);
    localStorage.setItem("ObjectRecord", JSON.stringify(updateRecords));

    updatepageCurrent();
  }

  function deleteAllRecords() {
    localStorage.removeItem("ObjectRecord");
    // this.setState({ records: [] });
    // this.setState({ objectRenderedRecords: [] });
    // this.setState({ pageCurrent: 0 });
  }

  function editRecord(recordId) {
    this.setState({ modeEdit: true });
    let ObjectRecord = JSON.parse(localStorage.getItem("ObjectRecord"));

    ObjectRecord.filter((record) => {
      if (recordId === record.id) {
        // this.setState({
        //   id: record.id,
        //   name: record.name,
        //   dateofbirth: record.dateofbirth,
        //   email: record.email,
        //   tel: record.tel,
        // });
      }
    });
  }

  function addEditedRecord() {
    let ObjectRecord = JSON.parse(localStorage.getItem("ObjectRecord"));

    let { id, name, dateofbirth, email, tel } = this.state;

    ObjectRecord.filter((record, index) => {
      if (parseInt(record.id) === parseInt(id)) {
        ObjectRecord.splice(index, 1, { id, name, dateofbirth, email, tel });
        this.setState({ records: ObjectRecord });
        localStorage.setItem("ObjectRecord", JSON.stringify(ObjectRecord));
      }
    });

    //  this.setState({ name: "", dateofbirth: "", email: "", tel: "" });
    // this.setState({ modeEdit: false });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function updatepageCurrent(lastPage = false) {
    let ObjectRecord = JSON.parse(localStorage.getItem("ObjectRecord"));
    if (Math.ceil(ObjectRecord.length / perPage) < pageCurrent || lastPage) {
      let pageCurrent = Math.ceil(ObjectRecord.length / perPage);
      setPageCurrent(pageCurrent);
      updatePage(pageCurrent);
    } else {
      updatePage(pageCurrent);
    }
  }

  function recordSought(recordSought) {
    // this.setState({ objectRenderedRecords: recordSought });

    if (
      recordSought.length <= 5 ||
      this.state.records.length === recordSought.length
    ) {
      updatePage(this.state.pageCurrent);
      // this.setState({ overflow: "content" });
    } else {
      // this.setState({ overflow: "content overflow-active" });
    }
  }

  function updatePage(pageCurrent) {
    // this.setState({ pageCurrent: pageCurrent });
    let end = 1;
    let start = 1;

    let ObjectRecord = JSON.parse(localStorage.getItem("ObjectRecord"));
    let objectRenderedRecords = ObjectRecord.slice(start, end);

    // this.setState({ objectRenderedRecords: objectRenderedRecords });
  }

  return (
    <div className="container" style={{ overflowY: "hidden" }}>
      <Header />
      <SearchRecord records={null} recordSought={recordSought} />
      <Table
        objectRenderedRecords={renderRecords}
        deleteRecord={deleteRecord}
        editRecord={editRecord}
        overflow={overflow}
      />
      <Pagination state={null} updatePage={updatePage} />
      <Form state={null} addRecord={addRecord} />
      <Trash deleteAllRecords={deleteAllRecords} />
      <ToastContainer />
    </div>
  );
}
