import React from "react";
import ButtonsDiv from "./ButtonsDiv";
import Navbar from "./Navbar";
import "../css/App.scss"

const navs = ["Colors", "Typography", "Spaces", "Buttons", "Inputs"];

export default function App() {
    return <div className="App">
        <Navbar navs={navs} />
        <ButtonsDiv />
    </div>
}
