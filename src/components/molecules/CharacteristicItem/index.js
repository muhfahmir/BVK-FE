import Star from "components/atoms/Star";
import React from "react";

export default function CharacteristicItem({
  name,
  className,
  value,
  width,
  height,
  spacing,
}) {
  return (
    <div className="flex items-center text-sm md:text-base">
      {name}{" "}
      <Star
        className={`${className}`}
        value={value}
        width={width || 35}
        height={height || 35}
        spacing={spacing || 4}
      />
    </div>
  );
}
