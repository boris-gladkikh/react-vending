import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <NavLink exact to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/bugles" >Bugles</NavLink>

        </li>
        <li>
          <NavLink exact to="/fresca" >Fresca</NavLink>

        </li>
        <li>
          <NavLink exact to="/chili" >Chili</NavLink>

        </li>

      </ul>

    </nav>
  )
}

export default Navbar