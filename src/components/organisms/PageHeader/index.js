import React from "react";

import bg from "../../../assets/images/cats-bg.jpeg";
import "./index.scss";

export default function PageHeader(props) {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
      <h2 className="text-2xl font-bold">{props.children}</h2>
    </div>
  );
}
