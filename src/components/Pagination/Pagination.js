import React from 'react';
import '../../App.css'

export default class Pagination extends React.Component {

    controllerPagination = (action) => {

        const { records, pageCurrent, recordPerPage } = this.props.state;
        let numberPages = Math.ceil(records.length / recordPerPage);

        const previous = 1;
        const next = 1;

        if (action === 'previous') {

            if (pageCurrent <= 1) {
                return;
            } else {
                this.props.updatePage(pageCurrent - previous);
            }
        }

        if (action === 'next') {

            if (pageCurrent >= numberPages) {
                return;
            } else {
                this.props.updatePage(pageCurrent + next);
            }
        }
    }

    getPageCurrent = (pageCurrent) => {
        this.props.updatePage(pageCurrent);
    }

    render() {

        const { records, pageCurrent, recordPerPage } = this.props.state;
        let numberPages = Math.ceil(records.length / recordPerPage);

        return (
            <>
                <div className={'pagination'} >
                    <span className={'countPage'}>Página {pageCurrent} de {numberPages}</span>
                    <a
                        href="#"
                        title="Voltar"
                        className={'pagination__btn-previous'}
                        target="_self"
                        rel="noopener noreferrer"
                        onClick={() => this.controllerPagination('previous')}
                    >&laquo;</a>
                    {
                        new Array(numberPages).fill('').map((pager, i) => {
                            return (
                                pageCurrent === i + 1 ?
                                    <a key={i} className={'btn-active'} onClick={() => this.getPageCurrent}
                                        href="#"
                                        target="_self"
                                        rel="noopener noreferrer"
                                    >{i + 1}</a> :
                                    <a key={i} onClick={() => this.getPageCurrent(i + 1)}
                                        href="#"
                                        target="_self"
                                        rel="noopener noreferrer"
                                    >{i + 1}</a>
                            );
                        })
                    }
                    <a
                        href="#"
                        title="Próximo"
                        className={'pagination__btn-next'}
                        target="_self"
                        rel="noopener noreferrer"
                        onClick={() => this.controllerPagination('next')}>
                        &raquo;</a>
                </div>
            </>
        )
    }
}

