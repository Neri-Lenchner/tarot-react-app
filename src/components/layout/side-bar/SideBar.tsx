import React, {JSX} from 'react';
import './SideBar.css';
import {NavLink} from "react-router-dom";

function SideBar(): JSX.Element {

    return (
        <div className="SideBar">
            <div className="links">
                <NavLink to="/new-course">New Course</NavLink>
                <NavLink to="/courses-list">View Courses List</NavLink>
            </div>
        </div>
    );
}

export default SideBar;
