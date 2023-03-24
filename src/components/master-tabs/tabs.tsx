import { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faUserGroup,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { Exploration } from "./exploration/exploration";
import "./style.scss";
import { Interaction } from "./interaction/interaction";

type OverlayState = {
  map: boolean;
  social: boolean;
  battle: boolean;
};

export function Tabs() {
  const [overlays, setOverlays] = useState({
    map: false,
    social: false,
    battle: false,
  });

  const handleOverlayClick = (overlayName: keyof OverlayState) => {
    setOverlays((prevState) => ({
      ...prevState,
      [overlayName]: !prevState[overlayName],
    }));
  };

  const buttonStyles = (overlayName: keyof OverlayState) => ({
    transform: overlays[overlayName] ? "translateX(700px)" : "translateX(0)",
    transition: "transform 0s ease-in-out",
  });

  return (
    <div>
      <Button
        className="toggle1"
        style={buttonStyles("map")}
        onClick={() => handleOverlayClick("map")}
      >
        <FontAwesomeIcon className="fa-solid" icon={faMap} size="2x" />
      </Button>

      <Button
        className="toggle2"
        style={buttonStyles("social")}
        onClick={() => handleOverlayClick("social")}
      >
        <FontAwesomeIcon className="fa-solid" icon={faUserGroup} size="2x" />
      </Button>

      <Button
        className="toggle3"
        style={buttonStyles("battle")}
        onClick={() => handleOverlayClick("battle")}
      >
        <FontAwesomeIcon className="fa-solid" icon={faShieldHalved} size="2x" />
      </Button>

      {overlays.map && (
        <div className="overlay">
          <Exploration />
        </div>
      )}

      {overlays.social && <div className="overlay">
        <Interaction/>
        </div>}

      {overlays.battle && <div className="overlay"></div>}
    </div>
  );
}
