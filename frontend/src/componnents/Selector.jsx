import React from "react";

import visage_1 from "../assets/img/visages/visage-1.png";
import visage_2 from "../assets/img/visages/visage-2.png";

import nez_1 from "../assets/img/nez/nez-1.png";
import nez_2 from "../assets/img/nez/nez-2.png";

import bouche_1 from "../assets/img/bouche/bouche-1.png";
import bouche_2 from "../assets/img/bouche/bouche-2.png";

import yeux_1 from "../assets/img/yeux/yeux-1.png";
import yeux_2 from "../assets/img/yeux/yeux-2.png";

import sourcil_1 from "../assets/img/sourcil/sourcil-1.png";
import sourcil_2 from "../assets/img/sourcil/sourcil-2.png";

import cheveux_1 from "../assets/img/cheveux/cheveux-1.png";
import cheveux_2 from "../assets/img/cheveux/cheveux-2.png";

import oreille_1 from "../assets/img/oreilles/oreille-1.png";
import oreille_2 from "../assets/img/oreilles/oreille-2.png";


const Selector = ({ type, onChange}) => {
  let imageOptions;

  if (type == "visage") {
    imageOptions = [
      { name: "visage-1", src: visage_1 },
      { name: "visage-2", src: visage_2 },
    ];
  }else if (type == "nez") {
    imageOptions = [
      { name: "nez-1", src: nez_1 },
      { name: "nez-2", src: nez_2 },
    ];
  }else if (type == "bouche") {
    imageOptions = [
      { name: "bouche-1", src: bouche_1 },
      { name: "bouche-2", src: bouche_2 },
    ];
  }else if (type == "yeux") {
    imageOptions = [
      { name: "yeux-1", src: yeux_1 },
      { name: "yeux-2", src: yeux_2 },
    ];
  }else if (type == "sourcil") {
    imageOptions = [
      { name: "sourcil-1", src: sourcil_1 },
      { name: "sourcil-2", src: sourcil_2 },
    ];
  }else if (type == "cheveux") {
    imageOptions = [
      { name: "cheveux-1", src: cheveux_1 },
      { name: "cheveux-2", src: cheveux_2 },
    ];
  }else if (type == "oreilles") {
    imageOptions = [
      { name: "oreille-1", src: oreille_1 },
      { name: "oreille-2", src: oreille_2 },
    ];
  }
  

  const handleChangeImage = (src) => {
      onChange(src);
  };

  return (
    <div className="selector-list" style={{ marginRight: 20 }}>
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

export default Selector;
