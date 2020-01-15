import React from "react";
import "./LandingPage.css";

const LandingPage = ({ handleChange, handleSubmit }) => (
  <div className="landing-page">
    <form onSubmit={handleSubmit}>
      <input
        name="player1"
        type="text"
        onChange={handleChange}
        placeholder="player1"
        required
        autoComplete="off"
      />
      <input
        name="player2"
        type="text"
        onChange={handleChange}
        placeholder="player2"
        required
        autoComplete="off"
      />
      <button type="submit">Start</button>
    </form>
  </div>
);

export default LandingPage;
