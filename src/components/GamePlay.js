import { useState } from "react";
import {gameData} from "./data_file/gameData";

export function GamePlay() {
  let randomlyGenerated = randomCards();
  let elId;

  let [cards, setCards] = useState(randomlyGenerated);
  let [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);

  let cardsHandler = (evt) => {
    randomlyGenerated = randomCards();
    elId = evt.target.id;

    // console.log(gameData[elId].clicked);
    if (!gameData[elId].clicked) {
      setScore((prevState) => prevState + 1);
      gameData[elId].clicked = !gameData[elId].clicked;
      // console.log("after", gameData[elId].clicked);
    } else {
      gameData[elId].clicked = !gameData[elId].clicked;
      setScore(0);
      if (score > highScore) setHighScore(score);
    }
    setCards(randomlyGenerated);
  };
  return [cards, cardsHandler, score, highScore];
}

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
    // console.log("rnd", rnd, item.id);
    if (temp.indexOf(rnd) === -1 && rnd && rnd !== item.id) temp.push(rnd);
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
