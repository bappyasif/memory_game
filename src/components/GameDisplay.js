import React from "react";
// import "../App.css";
// import "./game.css";
import {GamePlay} from "./GamePlay";

export let GameDisplay = () => {
    let [cards, cardsHandler, score, highScore] = GamePlay();
    // console.log(score, highScore);
    // let [cards, cardsHandler] = rearrangeCardsWhenClicked();
    // let showCards = randomlyGenerated.map(item => <div key={item.id} style={cardStyle} onClick={cardsHandler}>{item.text}</div>)
    let showCards = cards.map((item) => (
      <div className="card" style={cardStyle} id={item.id} key={item.id} onClick={cardsHandler}>
        {item.text}
        {item.id}
      </div>
    ));
  
    let scorecard = (
      <div className="scorecard" style={scorecardStyling}>
        <p>score: {score}</p>
        <p>highScore: {highScore}</p>
      </div>
    );
  
    return [<div className="cardsContainer" style={cardsContainer}>{showCards}</div>, scorecard];
    // return <div style={cardsContainer}>{showCards}</div>;
  };

  let cardsContainer = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  };
  let cardStyle = {
    width: "35%",
    border: "dashed",
    margin: "4px",
    minHeight: "110px",
  };
  let scorecardStyling = {
    float: "right",
    marginRight: "8.99vw",
    border: "dashed",
    textAlign: "right",
    width: "29vw",
    paddingRight: "4vw",
  };