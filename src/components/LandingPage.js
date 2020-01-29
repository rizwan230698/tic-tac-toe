import React, { useEffect, useRef } from "react";
import "./LandingPage.css";

const LandingPage = ({ handleChange, handleSubmit }) => {
  const p1 = useRef(null);
  const p2 = useRef(null);
  const button = useRef(null);

  const onKeyDown = (target, e) => {
    if (e.keyCode === 13 && e.target.value !== "") {
      switch (target) {
        case "player1":
          p2.current.focus();
          break;
        case "player2":
          button.current.focus();
          break;
        default:
          p1.current.focus();
      }
    }
  };

  useEffect(() => {
    p1.current.focus();
  }, []);

  return (
    <div className="landing-page">
      <div>
        <input
          name="player1"
          type="text"
          onChange={handleChange}
          placeholder="player1"
          autoComplete="off"
          ref={p1}
          onKeyDown={onKeyDown.bind(this, "player1")}
        />
        <input
          name="player2"
          type="text"
          onChange={handleChange}
          placeholder="player2"
          autoComplete="off"
          ref={p2}
          onKeyDown={onKeyDown.bind(this, "player2")}
        />
        <button
          className="start"
          type="submit"
          onClick={handleSubmit}
          ref={button}
        >
          Start
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
