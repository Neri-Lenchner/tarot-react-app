import * as React from 'react';
import './CelticSpreadHeader.css';
import {JSX} from "react";

export function SpreadHeader({ spreadThem, clearSpread }: { spreadThem: any; clearSpread: any }): JSX.Element {

    return (
        <div className="spread-header-container">
            <button onClick={spreadThem}>Spread Them</button>
            <button onClick={clearSpread}>Clear Spread</button>
        </div>
    );
}

