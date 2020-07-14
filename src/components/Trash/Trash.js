import React from 'react';
import '../../App.css'
import trash from '../../img/trash.svg';

export default function Trash ({deleteAllRecords}){

    function confirmDelete() {
        if (window.confirm('Voce realmente quer Excluir todos os registros?')) {
            deleteAllRecords();
        }
    }

    return (
        <>
            <div className={'section-validate'}>
                <ul className={'txtValidate'} ></ul>
                <button className={'btn btn-trash'} onClick={confirmDelete}>
                    <img src={trash} alt="Apagar tudo! " title="Apagar Tudo!" />
                </button>
            </div>
        </>
    )
}
