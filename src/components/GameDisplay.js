import React from "react";
import { GamePlay } from "./GamePlay";

export let GameDisplay = () => {
  let [cards, cardsHandler, score, highScore] = GamePlay();
  let showCards = cards.map((item) => (
    // this works
    <div
      className="card"
      id={item.id}
      key={item.id}
      onClick={cardsHandler}
      style={{
        backgroundImage: "url(" + item.svgUrl + ")",
        // backgroundPosition: "center",
        backgroundPosition: "bottom",
        // backgroundSize: "contain",
        backgroundSize: `${item.id === 2 ? "contain" : ""}`,
        backgroundRepeat: "no-repeat",
        height: "65%",
        // width: "20%"
      }}
    >
      {item.text}
      {/* {item.id} */}
    </div>
  ));

  let scorecard = (
    <div>
      <p>score: {score}</p>
      <p>highScore: {highScore}</p>
    </div>
  );

  return [<div className="cardsContainer">{showCards}</div>, scorecard];
  // return <div style={cardsContainer}>{showCards}</div>;
};

/**
 * 
 * 
   let showCards = cards.map((item) => (
    // this works
    <div className="card" id={item.id} key={item.id} onClick={cardsHandler}>
      {item.text}
      {item.id}
      <div
        style={{
          backgroundImage: "url(" + item.svgUrl + ")",
          backgroundPosition: "center",
          // backgroundSize: "contain",
          backgroundSize: `${item.id === 2 ? "contain" : ""}`,
          backgroundRepeat: "no-repeat",
          height: "65%"
        }}
        // onClick={cardsHandler}
      />
    </div>
  ));
 * 
 * 
 let showCards = cards.map((item) => (
    // this works
    <div
      className="card"
      id={item.id}
      key={item.id}
      onClick={cardsHandler}
      style={{
        backgroundImage: "url(" + item.svgUrl + ")",
        backgroundPosition: "center",
        // backgroundSize: "contain",
        backgroundSize: `${item.id===2?"contain": ""}`,
        backgroundRepeat: "no-repeat"
      }}
    >
      {item.text}
      {item.id}
    </div>
  ));
 */

// import { default as bird } from "../images/bird.svg";
// import env from "../images/env.svg";
// let showCards = cards.map((item) => (
//   // this works
//   <div
//     className="card"
//     id={item.id}
//     key={item.id}
//     onClick={cardsHandler}
//     style={{
//       // backgroundImage: "url(" + "./logo.svg" + ")",
//       // backgroundImage: "url(" + bird + ")",
//       backgroundImage: "url(" + item.svgUrl + ")",
//       // backgroundImage: "url(" + env + ")",
//       backgroundPosition: "center",
//       backgroundSize: "cover"
//     }}
//   >
//     {/* but this doesn't */}
//     {/* // <div className="card" style={{backgroundImage: `url("../images/env.svg")`, backgroundPosition: "center"}}> */}

//     {item.text}
//     {item.id}
//     {/* <img src="./logo.svg" /> */}
//     {/* <img src={bird} className="svgs" /> */}
//   </div>
// ));

// let showCards = cards.map((item) => (
//   <div
//     className="card"
//     // style={cardStyle}
//     id={item.id}
//     key={item.id}
//     onClick={cardsHandler}
//   >
//     {item.text}
//     {item.id}
//     <img src="./logo.svg" style={{width: "20px", height: "20px"}} />
//     {/* <img src={item.url} /> */}
//     <img src={bird} className="svgs" />
//     {/* <img src="../bird.svg" /> */}
//     {/* <img src="../images/tree.png" /> */}
//   </div>
// ));

// console.log(score, highScore);
// let [cards, cardsHandler] = rearrangeCardsWhenClicked();
// let showCards = randomlyGenerated.map(item => <div key={item.id} style={cardStyle} onClick={cardsHandler}>{item.text}</div>)
// let cardsContainer = {
//   display: "flex",
//   flexWrap: "wrap",
//   flexDirection: "row",
//   justifyContent: "space-evenly",
// };
// let cardStyle = {
//   width: "35%",
//   border: "dashed",
//   margin: "4px",
//   minHeight: "110px",
// };
// let scorecardStyling = {
//   float: "right",
//   marginRight: "8.99vw",
//   border: "dashed",
//   textAlign: "right",
//   width: "29vw",
//   paddingRight: "4vw",
// };
