import React from 'react';
import '../../App.css'
import trash from '../../img/trash.svg';

export default class Trash extends React.Component {
    constructor(props) {
        super(props);

        this.confirmDelete = this.confirmDelete.bind(this);
    }

    confirmDelete() {
        if (window.confirm('Voce realmente quer Excluir todos os registros?')) {
            this.props.deleteAllRecords();
        }
    }

    render() {
        return (
            <>
                <div className={'section-validate'}>
                    <ul className={'txtValidate'} ></ul>
                    <button className={'btn btn-trash'} onClick={this.confirmDelete}>
                        <img src={trash} alt="Apagar tudo! " title="Apagar Tudo!" />
                    </button>
                </div>
            </>
        )
    }
}