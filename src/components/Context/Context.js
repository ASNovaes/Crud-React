import React, { useState, useEffect, createContext, useCallback } from "react";

export const ContextApp = createContext();

export default function ContextProvider({ children }) {

    const [records, setRecords] = useState([]);
    const [perPage] = useState(5);
    const [pageCurrent, setPageCurrent] = useState(0);
    const [recordPage, setRecordPage] = useState([]);

    const [formData, setForm] = useState({
        id: "",
        name: "",
        dateofbirth: "",
        email: "",
        tel: "",
    });

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

    const upinsertRecord = (data) => {

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
    };

    return (
        <ContextApp.Provider value={{
            records,
            setRecords,
            perPage,
            pageCurrent,
            setPageCurrent,
            recordPage,
            setRecordPage,
            deleteRecord,
            deleteAllRecords,
            editRecord,
            upinsertRecord,
            formData,
            setForm
        }}>
            {children}
        </ContextApp.Provider>
    );
}
