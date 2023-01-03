import React from "react";

import "./index.scss";

export default function InputText(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange ? (e) => props.onChange(e) : null}
      className={`outline-none ${props.className}`}
    />
  );
}
