import React, { useState } from "react";

import "./Styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
       
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">Registros</NavLink>
        </li>
        <li>
          <NavLink to="/services">Partidos</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Posiciones</NavLink>
        </li>
        <li>
          <NavLink to="/tarjet">Goleadores-Fairplay</NavLink>
        </li>
      </ul>
    </nav>
  );
};
