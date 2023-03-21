import { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faUserGroup,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

export function Tabs() {
  const [isOverlayMapVisible, setisOverlayMapVisible] = useState(false);
  const buttonVariant = isOverlayMapVisible ? "warning" : "outline-warning";
  const handleOverlayClick = () => {
    setisOverlayMapVisible(!isOverlayMapVisible);
  };

  const buttonStyle = {
    transform: isOverlayMapVisible ? "translateX(700px)" : "translateX(0)",
    transition: "transform 0s ease-in-out",
  };

  const [isOverlaySocialVisible, setisOverlaySocialVisible] = useState(false);
  const buttonVariantSocial = isOverlaySocialVisible
    ? "warning"
    : "outline-warning";
  const handleOverlaySocialClick = () => {
    setisOverlaySocialVisible(!isOverlaySocialVisible);
  };

  const buttonSocialStyle = {
    transform: isOverlaySocialVisible ? "translateX(700px)" : "translateX(0)",
    transition: "transform 0s ease-in-out",
  };

  const [isOverlayBattleVisible, setisOverlayBattleVisible] = useState(false);
  const buttonVariantBattle = isOverlayBattleVisible
    ? "warning"
    : "outline-warning";
  const handleBattleOverlayClick = () => {
    setisOverlayBattleVisible(!isOverlayBattleVisible);
  };

  const buttonBattleStyle = {
    transform: isOverlayBattleVisible ? "translateX(700px)" : "translateX(0)",
    transition: "transform 0s ease-in-out",
  };

  return (
    <>
        <div>
          <Button
            variant={buttonVariant}
            className="toggle1"
            style={buttonStyle}
            onClick={handleOverlayClick}
          >
            <FontAwesomeIcon className="fa-solid" icon={faMap} size="2x" />
          </Button>

          <Button
            variant={buttonVariantSocial}
            className="toggle2"
            style={buttonSocialStyle}
            onClick={handleOverlaySocialClick}
          >
            <FontAwesomeIcon
              className="fa-solid"
              icon={faUserGroup}
              size="2x"
            />
          </Button>

          <Button
            variant={buttonVariantBattle}
            className="toggle3"
            style={buttonBattleStyle}
            onClick={handleBattleOverlayClick}
          >
            <FontAwesomeIcon
              className="fa-solid"
              icon={faShieldHalved}
              size="2x"
            />
          </Button>

          {isOverlayMapVisible && <div className="overlay"></div>}

          {isOverlaySocialVisible && <div className="overlay"></div>}

          {isOverlayBattleVisible && <div className="overlay"></div>}
        </div>
    </>
  );
}
