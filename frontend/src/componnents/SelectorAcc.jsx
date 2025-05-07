import React from "react";

import accessoire_1 from "../assets/img/accessoires/accessoire-1.png";
import accessoire_2 from "../assets/img/accessoires/accessoire-2.png";
import accessoire_3 from "../assets/img/accessoires/accessoire-3.png";
import accessoire_4 from "../assets/img/accessoires/accessoire-4.png";
import accessoire_5 from "../assets/img/accessoires/accessoire-5.png";
import accessoire_6 from "../assets/img/accessoires/accessoire-6.png";
import accessoire_7 from "../assets/img/accessoires/accessoire-7.png";

const SelectorAcc = ({ onChange, acc }) => {
  const imageOptions = [
    { name: "accessoire-1", src: accessoire_1 },
    { name: "accessoire-2", src: accessoire_2 },
    { name: "accessoire-3", src: accessoire_3 },
    { name: "accessoire-4", src: accessoire_4 },
    { name: "accessoire-5", src: accessoire_5 },
    { name: "accessoire-6", src: accessoire_6 },
    { name: "accessoire-7", src: accessoire_7 },
  ];

  const handleChangeImage = (src) => {
    onChange(src);
  };

  return (
    <div className="accessoires">
      {imageOptions.map((img, index) => {
        const isSelected = acc.some((item) => item.src === img.src);
        return (
          <button
            key={index}
            onClick={() => handleChangeImage(img.src)}
            className={isSelected ? "selected" : ""}
            style={{ display: "block" }}
          >
            <img className="image-selector" src={img.src} alt={img.name} />
          </button>
        );
      })}
    </div>
  );
};

export default SelectorAcc;
