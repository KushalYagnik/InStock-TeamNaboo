import React, { useState } from "react";
import './Toggle.scss'

export default function Toggle(props) {
  const [toggleState, setToggleState] = useState("on");

  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }

  return <div className={`switch ${toggleState}`} onClick={toggle} />;
}
