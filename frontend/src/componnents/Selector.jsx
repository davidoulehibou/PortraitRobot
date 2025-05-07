import React from "react";

import visage_1 from "../assets/img/visages/visage-1.png";
import visage_2 from "../assets/img/visages/visage-2.png";
import visage_3 from "../assets/img/visages/visage-3.png";
import visage_4 from "../assets/img/visages/visage-4.png";

import nez_1 from "../assets/img/nez/nez-1.png";
import nez_2 from "../assets/img/nez/nez-2.png";
import nez_3 from "../assets/img/nez/nez-3.png";
import nez_4 from "../assets/img/nez/nez-4.png";

import bouche_1 from "../assets/img/bouche/bouche-1.png";
import bouche_2 from "../assets/img/bouche/bouche-2.png";
import bouche_3 from "../assets/img/bouche/bouche-3.png";

import yeux_1 from "../assets/img/yeux/yeux-1.png";
import yeux_2 from "../assets/img/yeux/yeux-2.png";
import yeux_3 from "../assets/img/yeux/yeux-3.png";
import yeux_4 from "../assets/img/yeux/yeux-4.png";
import yeux_5 from "../assets/img/yeux/yeux-5.png";

import sourcil_1 from "../assets/img/sourcil/sourcil-1.png";
import sourcil_2 from "../assets/img/sourcil/sourcil-2.png";
import sourcil_3 from "../assets/img/sourcil/sourcil-3.png";
import sourcil_4 from "../assets/img/sourcil/sourcil-4.png";
import sourcil_5 from "../assets/img/sourcil/sourcil-5.png";
import sourcil_6 from "../assets/img/sourcil/sourcil-6.png";

import cheveux_1 from "../assets/img/cheveux/cheveux-1.png";
import cheveux_2 from "../assets/img/cheveux/cheveux-2.png";
import cheveux_3 from "../assets/img/cheveux/cheveux-3.png";
import cheveux_4 from "../assets/img/cheveux/cheveux-4.png";
import cheveux_5 from "../assets/img/cheveux/cheveux-5.png";
import cheveux_6 from "../assets/img/cheveux/cheveux-6.png";
import cheveux_7 from "../assets/img/cheveux/cheveux-7.png";
import cheveux_8 from "../assets/img/cheveux/cheveux-8.png";

import oreille_1 from "../assets/img/oreilles/oreille-1.png";
import oreille_2 from "../assets/img/oreilles/oreille-2.png";


const Selector = ({ type, onChange}) => {
  let imageOptions;

  if (type == "visage") {
    imageOptions = [
      { name: "visage-1", src: visage_1 },
      { name: "visage-2", src: visage_2 },
      { name: "visage-3", src: visage_3 },
      { name: "visage-4", src: visage_4 },
    ];
  }else if (type == "nez") {
    imageOptions = [
      { name: "nez-1", src: nez_1 },
      { name: "nez-2", src: nez_2 },
      { name: "nez-3", src: nez_3 },
      { name: "nez-4", src: nez_4 },
    ];
  }else if (type == "bouche") {
    imageOptions = [
      { name: "bouche-1", src: bouche_1 },
      { name: "bouche-2", src: bouche_2 },
      { name: "bouche-3", src: bouche_3 },
    ];
  }else if (type == "yeux") {
    imageOptions = [
      { name: "yeux-1", src: yeux_1 },
      { name: "yeux-2", src: yeux_2 },
      { name: "yeux-3", src: yeux_3 },
      { name: "yeux-4", src: yeux_4 },
      { name: "yeux-5", src: yeux_5 },
    ];
  }else if (type == "sourcil") {
    imageOptions = [
      { name: "sourcil-1", src: sourcil_1 },
      { name: "sourcil-2", src: sourcil_2 },
      { name: "sourcil-3", src: sourcil_3 },
      { name: "sourcil-4", src: sourcil_4 },
      { name: "sourcil-5", src: sourcil_5 },
      { name: "sourcil-6", src: sourcil_6 },
    ];
  }else if (type == "cheveux") {
    imageOptions = [
      { name: "cheveux-1", src: cheveux_1 },
      { name: "cheveux-2", src: cheveux_2 },
      { name: "cheveux-3", src: cheveux_3 },
      { name: "cheveux-4", src: cheveux_4 },
      { name: "cheveux-5", src: cheveux_5 },
      { name: "cheveux-6", src: cheveux_6 },
      { name: "cheveux-7", src: cheveux_7 },
      { name: "cheveux-8", src: cheveux_8 },
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
