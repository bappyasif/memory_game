import React, { useState } from "react";
import { gameData } from "./data_file/gameData";

export function GameBoard() {
  //   let showCards = displayingCards();
  let [showCards, scorecard] = displayingGame();
  return (
    <div>
      <p>randomly displaying memory cards</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{scorecard}</div>
        <div>{showCards}</div>
      </div>
    </div>
  );
}

let cardEventsWhenClicked = () => {
  let randomlyGenerated = randomCards();
  let elId;

  let [cards, setCards] = useState(randomlyGenerated);
  let [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);
  //   let [score, setScore, highScore, setHighScore] = scoreBoard();
  //   handleScoreboard(elId, score, highScore, setScore, setHighScore);

  let cardsHandler = (evt) => {
    // console.log("clicking");
    randomlyGenerated = randomCards();
    // console.log(evt.target.id);
    elId = evt.target.id;

    // handleScoreboard(elId, score, highScore, setScore, setHighScore);
    // handleScoreboard(elId);
    console.log(gameData[elId].clicked);
    if (!gameData[elId].clicked) {
      setScore((prevState) => prevState + 1);
      gameData[elId].clicked = !gameData[elId].clicked;
      console.log("after", gameData[elId].clicked);
    } else {
      gameData[elId].clicked = !gameData[elId].clicked;
      setScore(0);
      if (score > highScore) setHighScore(score);
    }
    // gameData[elId].clicked = !gameData[elId].clicked
    // if (score > highScore) setHighScore(score);
    setCards(randomlyGenerated);
  };
  return [cards, cardsHandler, score, highScore];
};

let displayingGame = () => {
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

  let [cards, cardsHandler, score, highScore] = cardEventsWhenClicked();
  console.log(score, highScore);
  // let [cards, cardsHandler] = rearrangeCardsWhenClicked();
  // let showCards = randomlyGenerated.map(item => <div key={item.id} style={cardStyle} onClick={cardsHandler}>{item.text}</div>)
  let showCards = cards.map((item) => (
    <div id={item.id} key={item.id} style={cardStyle} onClick={cardsHandler}>
      {item.text}
      {item.id}
    </div>
  ));

  let scorecard = (
    <div style={scorecardStyling}>
      <p>score: {score}</p>
      <p>highScore: {highScore}</p>
    </div>
  );

  return [<div style={cardsContainer}>{showCards}</div>, scorecard];
  // return <div style={cardsContainer}>{showCards}</div>;
};

let randomCards = () => {
  let randOrders = randomlyOrdered();
  let cards = [];
  // console.log(randOrders)
  randOrders.forEach((v) => cards.push(gameData[v - 1]));
  // console.log(randOrders,cards, gameData)
  return cards;
};

let randomlyOrdered = () => {
  let temp = [];
  gameData.forEach((item) => {
    let rnd = Math.floor(Math.random() * gameData.length);
    // console.log("rnd", rnd);
    if (temp.indexOf(rnd) === -1 && rnd) temp.push(rnd);
  });
  let randomized = [];
  let test = gameData.map((item) =>
    temp.indexOf(item.id) === -1 ? item.id : null
  );
  let rest = test.filter((v) => v);
  randomized = randomized.concat(temp, rest);
  // console.log(randomized);
  // console.log(randomized, temp, test, rest);
  return randomized;
};

// let rearrangeCardsWhenClicked = () => {
//   let randomlyGenerated = randomCards();
//   let elId;

//   let [cards, setCards] = useState(randomlyGenerated);
//   // let [score, setScore] = useState(0);
//   // let [highScore, setHighScore] = useState(0);
//   //   let [score, setScore, highScore, setHighScore] = scoreBoard();
//   //   handleScoreboard(elId, score, highScore, setScore, setHighScore);

//   let cardsHandler = (evt) => {
//     // console.log("clicking");
//     randomlyGenerated = randomCards();
//     // console.log(evt.target.id);
//     // elId = evt.target.id;

//     // handleScoreboard(elId, score, highScore, setScore, setHighScore);
//     // handleScoreboard(elId);
//     setCards(randomlyGenerated);
//   };
//   return [cards, cardsHandler];
// };

// let scoreBoard = () => {
//   let [score, setScore] = useState(0);
//   let [highScore, setHighScore] = useState(0);
//   // return <div>{score}{highScore}</div>
//   return [score, setScore, highScore, setHighScore];
// };

// // let handleScoreboard = (id, score, setScore, highScore, setHighScore) => {
// let handleScoreboard = (id) => {
//   // let [score, setScore, highScore, setHighScore] = scoreBoard();
//   let [score, setScore] = useState(0);
//   let [highScore, setHighScore] = useState(0);
//   console.log(id);
//   if (id && gameData[id].clicked) {
//     setScore(0);
//     !gameData[id].clicked;
//   } else {
//     !gameData[id].clicked;
//     // setScore((prevState) => prevState + 1);
//     setScore(score + 1);
//   }
// };

// let displayingCards = () => {
//     let cardsContainer = {display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-evenly"}
//     let cardStyle = {width:"35%", border: "dashed", margin: "4px", minHeight: "110px"}

//     let randomlyGenerated;
//     randomlyGenerated = randomCards();

//     let showCards = randomlyGenerated.map(item => <div key={item.id} style={cardStyle} onClick={cardsHandler}>{item.text}</div>)
//     // let showCards = randomlyGenerated.map(item => <div key={item.id} style={cardStyle}>{item.text}</div>)
//     // let showCards = gameData.map(item => <div key={item.id} style={cardStyle}>{item.text}</div>)

//     // return showCards;
//     return <div style={cardsContainer}>{showCards}</div>
// }

// let randomlyOrdered = () => {
//     let temp = [];
//     let randomized = gameData.map(item => {
//         let rnd = Math.floor(Math.random()*gameData.length);
//         console.log("rnd", rnd);
//         if(temp.indexOf(rnd) === -1) temp.push(rnd);
//         else rnd+1 === gameData.length ? Math.floor(Math.random()*gameData.length) : Math.floor(Math.random()*gameData.length)
//         // console.log("rnd", rnd, gameData.indexOf(rnd+item.id))
//         // return rnd + item.id <= gameData.length && randomized.indexOf(rnd+item.id) ? rnd+item.id : rnd
//         // return rnd + item.id <= gameData.length ? rnd+item.id : rnd
//     } )
//     console.log(randomized, temp);
// }
