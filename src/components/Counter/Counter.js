import React, { useMemo } from "react";
import user from "../../img/user.svg";

export default function Counter({ records }) {

  const recordSize = useMemo(() => records.length, [records]);

  return (
    <div className="counter">
      <img src={user} alt={"Contador de Registro"} />
      <span id="countRegister">{recordSize}</span>
    </div>
  )
}