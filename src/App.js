import React, {Component} from "react";
import "./App.css";
// import { GameBoard } from "./components/LegacyCodeGameBoard";
import { GameContainer } from "./components/GameContainer";

export default class App extends Component {
    render() {
        return(
            <div className="App">
                <h4>Memory Game</h4>
                {/* <GameBoard /> */}
                <GameContainer />
            </div>
        )
    }
}