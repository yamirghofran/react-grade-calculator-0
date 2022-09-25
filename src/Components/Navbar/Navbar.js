import React from "react";
import './Navbar.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="nav">
           <NavLink to='/final-grade' ><button>Final Grade</button></NavLink>
            <NavLink to='/overall-grade' ><button>Overall Grade</button></NavLink>
        </div>
        
    )
}

export default Navbar;