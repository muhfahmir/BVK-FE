import React from "react";

import "./index.scss";

export default function Button({
  isOutline,
  className,
  children,
  onClick,
  isSearch = false,
}) {
  return (
    <button
      style={{ position: isSearch ? "absolute" : "", right: "0px" }}
      className={`${
        isOutline ? "btn-outline" : "btn"
      } ${className} px-4 py-2 rounded-full `}
      onClick={onClick ? () => onClick() : null}
    >
      {children}
    </button>
  );
}
