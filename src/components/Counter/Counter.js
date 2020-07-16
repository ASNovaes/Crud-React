import React, { useMemo, useContext } from "react";
import user from "../../img/user.svg";
import { ContextApp } from "../Context/Context.js";
import StyledCounter from "./styles.js";

export default function Counter() {

  const { records } = useContext(ContextApp);
  const recordSize = useMemo(() => records.length, [records]);

  return (
    <StyledCounter>
      <img src={user} alt={"Contador de Registro"} />
      <span id="countRegister">{recordSize}</span>
    </StyledCounter>
  );
}