import { useState, useEffect } from "react";
import "./index.css";

export default function LampToggle() {
  const [on, setOn] = useState(false);

  // change body class safely
  useEffect(() => {
    document.body.className = on ? "lamp-on" : "lamp-off";
  }, [on]);

  return (
    <div className="room">

      {/* Lamp */}
      <div className="lamp">
        <div className="bulb"></div>
      </div>

      {/* Switch */}
      <button
        className="switch"
        onClick={() => setOn(prev => !prev)}
      >
        {on ? "Turn OFF" : "Turn ON"}
      </button>

    </div>
  );
}
