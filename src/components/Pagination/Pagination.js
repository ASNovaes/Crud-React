/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, useCallback, useContext } from "react";
import "../../App.css";
import { ContextApp } from "../Context/Context.js";
import { StyledPagination, StyledBtnPrevious, StyledBtnNext } from "./styles";

export default function Pagination() {

  const { records, perPage, pageCurrent, setPageCurrent } = useContext(ContextApp);

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
      <StyledPagination>
        {pageCurrent >= 1 &&
          <span>
            Página {pageCurrent} de {numberPages}
          </span>
        }
        <StyledBtnPrevious
          href="#"
          title="Voltar"
          target="_self"
          rel="noopener noreferrer"
          onClick={() => controllerPagination('previous')}
        >
          &laquo;
        </StyledBtnPrevious>
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
        <StyledBtnNext
          href="#"
          title="Próximo"
          target="_self"
          rel="noopener noreferrer"
          onClick={() => controllerPagination('next')}
        >
          &raquo;
          </StyledBtnNext>
      </StyledPagination>
    </>
  );
}

