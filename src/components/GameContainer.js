import React from "react";
import { GameDisplay } from "./GameDisplay";

export function GameContainer() {
  let [showCards, scorecard] = GameDisplay();
  return (
    <div>
      <p>randomly displaying memory cards</p>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>{scorecard}</div>

        <h6>Counter Resets When Same Element Gets Clicked Twice</h6>

        <div>{showCards}</div>
      </div>
    </div>
  );
}
