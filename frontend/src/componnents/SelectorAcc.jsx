import React from "react";

import accessoire_1 from "../assets/img/accessoires/accessoire-1.png";
import accessoire_2 from "../assets/img/accessoires/accessoire-2.png";




const SelectorAcc = ({  onChange}) => {
  let imageOptions;
    imageOptions = [
      { name: "accessoire-1", src: accessoire_1 },
      { name: "accessoire-2", src: accessoire_2 },
    ];
  

  const handleChangeImage = (src) => {
      onChange(src);
  };

  return (
    <div className="accessoires" >
      {imageOptions.map((img, index) => (
        <>
        <button
          key={index}
          onClick={() => handleChangeImage(img.src)}
          style={{display: "block" }}
        >
          <img className="image-selector" src={img.src}></img>
        </button>
        
        </>
      ))}
    </div>
  );
};

export default SelectorAcc;
