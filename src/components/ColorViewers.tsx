import React from "react";

interface ColorViewersProps {
  hoverColor: string;
  selectedColor: string;
}
const ColorViewers: React.FC<ColorViewersProps> = ({
  hoverColor,
  selectedColor,
}) => {
  return (
    <div className="colorBlobs">
      <div
        className="colorSwatch"
        style={{ backgroundColor: hoverColor }}
      ></div>
      <div
        className="colorSwatch"
        style={{ backgroundColor: selectedColor }}
      ></div>
    </div>
  );
};

export default ColorViewers;
