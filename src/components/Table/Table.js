import React from 'react';
import '../../App.css'
import btnEdit from '../../img/edit.svg';
import btnDelete from '../../img/delete.svg';


export default class Table extends React.Component {
    constructor(props) {
        super(props);

        this.confirmDelete = this.confirmDelete.bind(this);
    }

    confirmDelete = (id) => {
        if (window.confirm('Você realmente quer Excluir este registro?')) {
            this.props.deleteRecord(id);
        } else {
            return id = null;
        }
    }

    render() {

        return (
            <>
                <section className={this.props.overflow} >
                    <table className={'table'}>
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
                            {
                                this.props.objectRenderedRecords.map((record, i) => {
                                    return (
                                        <tr key={i}>
                                            <td></td>
                                            <td>{record.name}</td>
                                            <td>{record.dateofbirth}</td>
                                            <td>{record.email}</td>
                                            <td>{record.tel}</td>
                                            <td>
                                                <button className={'btn btn-edit'} onClick={() => this.props.editRecord(record.id)}>
                                                    <img src={btnEdit} title='editar usuário!' alt='editar usuário!' />
                                                </button>
                                                <button className={'btn btn-delete'} onClick={() => this.confirmDelete(record.id)}>
                                                    <img src={btnDelete} title='deletar usuário!' alt='deletar usuário!' />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </section>
            </>
        )
    }
}

