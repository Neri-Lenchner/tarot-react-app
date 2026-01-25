import React, {JSX, useState} from 'react';
import './Main.css';
import {TarotDeck} from "../../tarot-deck/TarotDeck";

function Main(): JSX.Element {


    return (
        <div className="Main">
            <h1>Main Page</h1>
            <TarotDeck />
        </div>
    );
}

export default Main;
