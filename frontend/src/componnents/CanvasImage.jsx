import React, { useState, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";



const CanvasImage = ({ src, x, y, flip}) => {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const image = new window.Image();
    image.src = src;
    image.onload = () => {
      setImg(image);
    };
  }, [src]);

  return img ? <KonvaImage image={img} x={x} y={y} scaleX={flip ? -1 : 1}/> : null;
};

export default CanvasImage;