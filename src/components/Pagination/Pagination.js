/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../App.css";

export default class Pagination extends React.Component {
  controllerPagination = (action) => {
    const { records, pageCurrent, recordPerPage } = this.props.state;
    let numberPages = Math.ceil(records.length / recordPerPage);

    const previous = 1;
    const next = 1;

    if (action === "previous") {
      if (pageCurrent <= 1) {
        return;
      } else {
        this.props.updatePage(pageCurrent - previous);
      }
    }

    if (action === "next") {
      if (pageCurrent >= numberPages) {
        return;
      } else {
        this.props.updatePage(pageCurrent + next);
      }
    }
  };

  getPageCurrent = (pageCurrent) => {
    this.props.updatePage(pageCurrent);
  };

  render() {
    // const { records, pageCurrent, recordPerPage } = this.props.state;
    let numberPages = Math.ceil(0 / 1);

    return (
      <>
        <div className={"pagination"}>
          <span className={"countPage"}>
            Página {1} de {1}
          </span>
          <a
            href="#"
            title="Voltar"
            className={"pagination__btn-previous"}
            target="_self"
            rel="noopener noreferrer"
            onClick={() => null}
          >
            &laquo;
          </a>
          {new Array(1).fill("").map((pager, i) => {
            return 1 === i + 1 ? (
              <a
                key={i}
                className={"btn-active"}
                onClick={() => null}
                href="#"
                target="_self"
                rel="noopener noreferrer"
              >
                {i + 1}
              </a>
            ) : (
              <a
                key={i}
                onClick={() => null}
                href="#"
                target="_self"
                rel="noopener noreferrer"
              >
                {i + 1}
              </a>
            );
          })}
          <a
            href="#"
            title="Próximo"
            className={"pagination__btn-next"}
            target="_self"
            rel="noopener noreferrer"
            onClick={() => null}
          >
            &raquo;
          </a>
        </div>
      </>
    );
  }
}
