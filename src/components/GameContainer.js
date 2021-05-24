import React from "react";
import { GameDisplay } from "./GameDisplay";

export function GameContainer() {
  let [showCards, scorecard] = GameDisplay();
  return (
    <div className="container">
      <p>randomly displaying memory cards, topic here <b>Green Energy</b></p>
      <div className="scorecard">{scorecard}</div>
      <div
        // className="container"
        // style={{ display: "flex", flexDirection: "column" }}
      >
        
        <h6>Counter Resets When Same Element Gets Clicked Twice</h6>
        <div>{showCards}</div>
      </div>
    </div>
  );
}
