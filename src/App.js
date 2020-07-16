import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import React from "react";
import Header from "./components/Header/Header.js";
import SearchRecord from "./components/Search/Search.js";
import Table from "./components/Table/Table.js";
import Pagination from "./components/Pagination/Pagination.js";
import Form from "./components/Form/Form.js";
import Trash from "./components/Trash/Trash.js";
import Counter from "./components/Counter/Counter.js";
import ContextProvider from "./components/Context/Context.js";
import GlobalStyle from "./GlobalStyle/styles.js";

export default function App() {

  return (
    <ContextProvider>
      <GlobalStyle />
      <div className="container">
        <Header />
        <SearchRecord />
        <Counter />
        <Table />
        <Pagination />
        <Form />
        <Trash />
        <ToastContainer />
      </div>
    </ContextProvider>
  );
}

