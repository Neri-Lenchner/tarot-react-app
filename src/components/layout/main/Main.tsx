import React, {JSX, useState} from 'react';
import './Main.css';
import {TarotDeck} from "../../tarot-deck/TarotDeck";

function Main(): JSX.Element {


    return (
        <div className="Main tarot-deck-container">
            <TarotDeck />
        </div>
    );
}

export default Main;
