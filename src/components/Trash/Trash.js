import React, { useContext } from 'react';
import '../../App.css'
import trash from '../../img/trash.svg';
import { ContextApp } from "../Context/Context.js";
import StyleTrash from "./styles.js"

export default function Trash() {

    const { deleteAllRecords } = useContext(ContextApp);

    function confirmDelete() {
        if (window.confirm('Voce realmente quer Excluir todos os registros?')) {
            deleteAllRecords();
        }
    }

    return (
        <>
            <StyleTrash>
                <button className={'btn'} onClick={confirmDelete}>
                    <img src={trash} alt="Apagar tudo!" title="Apagar Tudo!" />
                </button>
            </StyleTrash>
        </>
    );
}
