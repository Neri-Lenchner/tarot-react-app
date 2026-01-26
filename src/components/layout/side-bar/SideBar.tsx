import React, {JSX} from 'react';
import './SideBar.css';
import {NavLink} from "react-router-dom";

function SideBar(): JSX.Element {

    return (
        <div className="SideBar">
            <div className="links">
                <NavLink to="/celtic-spread">Celtic Spread</NavLink>
                <NavLink to="/three-cards-spread">Three Cards Spread</NavLink>
            </div>
        </div>
    );
}

export default SideBar;
