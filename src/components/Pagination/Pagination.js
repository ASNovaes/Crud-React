/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, useCallback } from "react";
import "../../App.css";

export default function Pagination({ records, perPage, pageCurrent, setPageCurrent }) {

  const numberPages = useMemo(() => Math.ceil(records.length / perPage), [records]);

  const controllerPagination = useCallback((action) => {
    const previous = 1;
    const next = 1;

    if (action === "previous") {
      if (pageCurrent <= 1) {
        return;
      } else {
        setPageCurrent(pageCurrent - previous);
      }
    }

    if (action === "next") {
      if (pageCurrent >= numberPages) {
        return;
      } else {
        setPageCurrent(pageCurrent + next);
      }
    }
  });

  return (
    <>
      <div className={"pagination"}>
        {pageCurrent >= 1 &&
          <span className={"countPage"}>
            Página {pageCurrent} de {numberPages}
          </span>
        }
        <a
          href="#"
          title="Voltar"
          className={"pagination__btn-previous"}
          target="_self"
          rel="noopener noreferrer"
          onClick={() => controllerPagination('previous')}
        >
          &laquo;
          </a>
        {pageCurrent >= 1 &&
          new Array(numberPages).fill("").map((pager, i) => {
            return pageCurrent === i + 1 ? (
              <a
                key={i}
                className={"btn-active"}
                onClick={() => setPageCurrent(i + 1)}
                href="#"
                target="_self"
                rel="noopener noreferrer"
              >
                {i + 1}
              </a>
            ) : (
                <a
                  key={i}
                  onClick={() => setPageCurrent(i + 1)}
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
          onClick={() => controllerPagination('next')}
        >
          &raquo;
          </a>
      </div>
    </>
  );
}

