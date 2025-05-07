import React, { useState } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";
import Selector from "./Selector";
import CanvasImage from "./CanvasImage";
import { useRef } from "react";
import { Link } from "react-router-dom";
import SelectorAcc from "./SelectorAcc";

const Canvas = () => {
  const [scenario, setScenario] = useState(1);
  const [zoneSelection, setZoneSelection] = useState("visage");

  const [selectedVisage, setselectedVisage] = useState(null);
  const [selectedCheveux, setselectedCheveux] = useState(null);
  const [selectedNez, setselectedNez] = useState(null);
  const [selectedBouche, setselectedBouche] = useState(null);
  const [selectedYeux, setselectedYeux] = useState(null);
  const [selectedSourcil, setselectedSourcil] = useState(null);
  const [selectedOreilles, setselectedOreilles] = useState(null);

  const [accessoires, setAccessoires] = useState([]);

  const [nezPosition, setNezPosition] = useState({ x: 0, y: 0 });
  const [bouchePosition, setBouchePosition] = useState({ x: 0, y: 0 });
  const [yeuxPosition, setYeuxPosition] = useState({ x: 0, y: 0 });
  const [sourcilPosition, setSourcilPosition] = useState({ x: 0, y: 0 });
  const [oreillesPosition, setOreillesPosition] = useState({ x: 0, y: 0 });

  const stageRef = useRef();

  const handleToggleAccessoire = (src) => {
    setAccessoires((prev) => {
      const existing = prev.find((acc) => acc.src === src);
      if (existing) {
        return prev.filter((acc) => acc.src !== src);
      } else {
        return [...prev, { src, x: 0, y: 0 }];
      }
    });
  };

  const handleSendToServer = async () => {
    const uri = stageRef.current.toDataURL();

    try {
      const response = await fetch("http://localhost:3001/save-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageData: uri, scenario: scenario }),
      });

      const text = await response.text();
      console.log(text);
    } catch (err) {
      console.error("Erreur lors de l’envoi au serveur:", err);
    }
  };

  const handlezoneSelection = (zone) => {
    setZoneSelection(zone);
  };

  const handleSetSelection = (selected) => {
    if (zoneSelection == "visage") {
      setselectedVisage(selected);
    } else if (zoneSelection == "nez") {
      setselectedNez(selected);
    } else if (zoneSelection == "bouche") {
      setselectedBouche(selected);
    } else if (zoneSelection == "yeux") {
      setselectedYeux(selected);
    } else if (zoneSelection == "cheveux") {
      setselectedCheveux(selected);
    } else if (zoneSelection == "sourcil") {
      setselectedSourcil(selected);
    } else if (zoneSelection == "oreilles") {
      setselectedOreilles(selected);
    }
  };

  const moveNez = (direction) => {
    setNezPosition((prev) => {
      switch (direction) {
        case "left":
          return { ...prev, x: prev.x - 5 };
        case "right":
          return { ...prev, x: prev.x + 5 };
        case "up":
          return { ...prev, y: prev.y - 5 };
        case "down":
          return { ...prev, y: prev.y + 5 };
        case "reset":
          return { ...prev, y: 0, x: 0 };
        default:
          return prev;
      }
    });
  };

  const moveBouche = (direction) => {
    setBouchePosition((prev) => {
      switch (direction) {
        case "left":
          return { ...prev, x: prev.x - 5 };
        case "right":
          return { ...prev, x: prev.x + 5 };
        case "up":
          return { ...prev, y: prev.y - 5 };
        case "down":
          return { ...prev, y: prev.y + 5 };
        case "reset":
          return { ...prev, y: 0, x: 0 };
        default:
          return prev;
      }
    });
  };

  const moveYeux = (direction) => {
    setYeuxPosition((prev) => {
      switch (direction) {
        case "left":
          return { ...prev, x: prev.x - 5 };
        case "right":
          return { ...prev, x: prev.x + 5 };
        case "up":
          return { ...prev, y: prev.y - 5 };
        case "down":
          return { ...prev, y: prev.y + 5 };
        case "reset":
          return { ...prev, y: 0, x: 0 };
        default:
          return prev;
      }
    });
  };

  const moveSourcil = (direction) => {
    setSourcilPosition((prev) => {
      switch (direction) {
        case "left":
          return { ...prev, x: prev.x - 5 };
        case "right":
          return { ...prev, x: prev.x + 5 };
        case "up":
          return { ...prev, y: prev.y - 5 };
        case "down":
          return { ...prev, y: prev.y + 5 };
        case "reset":
          return { ...prev, y: 0, x: 0 };
        default:
          return prev;
      }
    });
  };
  const moveOreilles = (direction) => {
    setOreillesPosition((prev) => {
      switch (direction) {
        case "up":
          return { ...prev, y: prev.y - 5 };
        case "down":
          return { ...prev, y: prev.y + 5 };
        case "reset":
          return { ...prev, y: 0, x: 0 };
        default:
          return prev;
      }
    });
  };

  return (
    <>
      <div className="page">
        <div className="personnalisation">
          <div className="fieldset">
            <button
              className={zoneSelection == "visage" ? "selected" : "empty"}
              onClick={() => handlezoneSelection("visage")}
            >
              Visage
            </button>
            <button
              className={zoneSelection == "cheveux" ? "selected" : "empty"}
              onClick={() => handlezoneSelection("cheveux")}
            >
              Cheveux
            </button>
            <button
              className={zoneSelection == "nez" ? "selected" : "empty"}
              onClick={() => handlezoneSelection("nez")}
            >
              Nez
            </button>
            <button
              className={zoneSelection == "bouche" ? "selected" : "empty"}
              onClick={() => handlezoneSelection("bouche")}
            >
              Bouche
            </button>

            <button
              className={zoneSelection == "sourcil" ? "selected" : "empty"}
              onClick={() => handlezoneSelection("sourcil")}
            >
              Sourcils
            </button>

            <button
              className={zoneSelection == "yeux" ? "selected" : "empty"}
              onClick={() => handlezoneSelection("yeux")}
            >
              Yeux
            </button>
            <button
              className={zoneSelection == "oreilles" ? "selected" : "empty"}
              onClick={() => handlezoneSelection("oreilles")}
            >
              Oreilles
            </button>
          </div>
          <Selector type={zoneSelection} onChange={handleSetSelection} />
          <h3>Accessoires</h3>
          <SelectorAcc onChange={handleToggleAccessoire} acc={accessoires} />
        </div>

        <Stage
          ref={stageRef}
          width={600}
          height={800}
          style={{
            border: "1px solid #ccc",
            backgroundColor: "white",
            margin: "auto",
            borderRadius: "1vw",
          }}
        >
          <Layer>
            {selectedCheveux && (
              <CanvasImage src={selectedCheveux} x={0} y={0} />
            )}

            {selectedOreilles && (
              <CanvasImage
                src={selectedOreilles}
                x={oreillesPosition.x}
                y={oreillesPosition.y}
              />
            )}

            {selectedOreilles && (
              <CanvasImage
                src={selectedOreilles}
                x={-oreillesPosition.x + 600}
                y={oreillesPosition.y}
                flip={true}
              />
            )}

            {selectedVisage && <CanvasImage src={selectedVisage} x={0} y={0} />}

            {selectedNez && (
              <CanvasImage
                src={selectedNez}
                x={nezPosition.x}
                y={nezPosition.y}
              />
            )}
            {selectedBouche && (
              <CanvasImage
                src={selectedBouche}
                x={bouchePosition.x}
                y={bouchePosition.y}
              />
            )}
            {selectedYeux && (
              <CanvasImage
                src={selectedYeux}
                x={yeuxPosition.x}
                y={yeuxPosition.y}
              />
            )}
            {selectedYeux && (
              <CanvasImage
                src={selectedYeux}
                x={-yeuxPosition.x + 600}
                y={yeuxPosition.y}
                flip={true}
              />
            )}
            {selectedSourcil && (
              <CanvasImage
                src={selectedSourcil}
                x={sourcilPosition.x}
                y={sourcilPosition.y}
              />
            )}
            {selectedSourcil && (
              <CanvasImage
                src={selectedSourcil}
                x={-sourcilPosition.x + 600}
                y={sourcilPosition.y}
                flip={true}
              />
            )}

            {console.log(accessoires)}
            {accessoires.map((acc, index) => (
              <CanvasImage
                key={index}
                x={acc.x}
                y={acc.y}
                src={acc.src}
                draggable
                onDragEnd={(e) => {
                  const newAccessoires = [...accessoires];
                  newAccessoires[index] = {
                    ...newAccessoires[index],
                    x: e.target.x(),
                    y: e.target.y(),
                  };
                  setAccessoires(newAccessoires);
                }}
              />
            ))}
          </Layer>
        </Stage>
        <div>
          <div className="controls">
            {zoneSelection === "nez" && (
              <>
                <div className="bitons">
                  <h1>Position du nez</h1>
                  <button onClick={() => moveNez("up")}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div>
                    <button onClick={() => moveNez("left")}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <button onClick={() => moveNez("down")}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <button onClick={() => moveNez("right")}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <button className="reset" onClick={() => moveNez("reset")}>
                  Réinitialiser
                </button>
              </>
            )}

            {zoneSelection === "bouche" && (
              <>
                <div className="bitons">
                  <h1>Position de la bouche</h1>
                  <button onClick={() => moveBouche("up")}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div>
                    <button onClick={() => moveBouche("down")}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <button className="reset" onClick={() => moveBouche("reset")}>
                  Réinitialiser
                </button>
              </>
            )}

            {zoneSelection === "sourcil" && (
              <>
                <div className="bitons">
                  <h1>Position des sourcils</h1>
                  <button onClick={() => moveSourcil("up")}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div>
                    <button onClick={() => moveSourcil("left")}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <button onClick={() => moveSourcil("down")}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <button onClick={() => moveSourcil("right")}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <button className="reset" onClick={() => moveSourcil("reset")}>
                  Réinitialiser
                </button>
              </>
            )}

            {zoneSelection === "yeux" && (
              <>
                <div className="bitons">
                  <h1>Position des yeux</h1>
                  <button onClick={() => moveYeux("up")}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div>
                    <button onClick={() => moveYeux("left")}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <button onClick={() => moveYeux("down")}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <button onClick={() => moveYeux("right")}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <button className="reset" onClick={() => moveYeux("reset")}>
                  Réinitialiser
                </button>
              </>
            )}
            {zoneSelection === "oreilles" && (
              <>
                <div className="bitons">
                  <h1>Position des Oreilles</h1>
                  <button onClick={() => moveOreilles("up")}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div>
                    <button onClick={() => moveOreilles("down")}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <button className="reset" onClick={() => moveOreilles("reset")}>
                  Réinitialiser
                </button>
              </>
            )}
          </div>
        </div>
        <div className="boutons-fins">
          <select
            value={scenario}
            onChange={(e) => setScenario(Number(e.target.value))}
            style={{ marginTop: 10 }}
          >
            <option value={1}>Scénario 1</option>
            <option value={2}>Scénario 2</option>
            <option value={3}>Scénario 3</option>
          </select>

          <button onClick={handleSendToServer} style={{ marginTop: 10 }}>
            Enregistrer
          </button>
          <Link to={`/galerie/${scenario}`}>
            <button>Galerie</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Canvas;
