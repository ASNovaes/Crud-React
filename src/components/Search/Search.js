import React, { useState, useEffect, useContext } from "react";
import search from "../../img/search.svg";
import { ContextApp } from "../Context/Context.js"

export default function SearchRecord() {

  const { setRecordPage, pageCurrent, setPageCurrent } = useContext(ContextApp);

  const [recordSought, setRecordSought] = useState('');
  const [messageNotFound, setMessageNotFound] = useState(false);

  useEffect(() => {
    let ObjectRecord = JSON.parse(localStorage.getItem("ObjectRecord"));

    if (ObjectRecord == null) {
      return;
    }

    if (recordSought === '') {
      setPageCurrent(pageCurrent);

    } else {

      let search = ObjectRecord.map((record, i) => {
        let regex = new RegExp('' + recordSought + '', 'g' + 'i');

        if (record.name.toString().match(regex) == null &&
          record.dateofbirth.toString().match(regex) == null &&
          record.email.toString().match(regex) == null &&
          record.tel.toString().match(regex) == null
        ) {
          return false;

        } else {
          return i;
        }
      });

      let filterRecords = search.filter(el => el !== false);
      let records = filterRecords.map((el, i) => ObjectRecord[filterRecords[i]]);

      if (filterRecords.length === 0) {
        setMessageNotFound(true);
      } else {
        setMessageNotFound(false);
      }

      setRecordPage(records)
    }

  }, [recordSought]);

  return (
    <>
      <div className={"container-form-search"}>
        <div className={"form-search"}>
          <div className={"btn btn-search"} id="btn_search">
            <img src={search} title="Pesquisar" alt={"pesquisar"} />
          </div>

          <input
            type="search"
            className={"form-search__bar-search"}
            id="bar_search"
            onChange={(e) => setRecordSought(e.target.value)}
          />

          {messageNotFound &&
            <p className={"txtNotFound"}>Não Encontrado!</p>
          }
        </div>
      </div>
    </>
  );
}



