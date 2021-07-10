import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Blooger.io</h1>
      </Link>
      <div className="links">
        <h1>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </h1>
        <h1>
          <NavLink exact activeClassName="active" to="/create">
            New Blog
          </NavLink>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
