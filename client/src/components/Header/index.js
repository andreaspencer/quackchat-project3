import React from "react";
import { Link } from "react-router-dom";
import Conditional from "../Conditional";

import Auth from "../../utils/auth";
import logo from "../../assets/images/duckie.png";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
          <span className="h1">QuackChat</span>
        </Link>

        <nav className="text-center">
          <Conditional if={Auth.loggedIn()}>
            <Link to="/profile">Me</Link>
            <a href="/" onClick={logout}>
              Logout
            </a>
          </Conditional>

          <Conditional if={!Auth.loggedIn()}>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </Conditional>
        </nav>
      </div>
    </header>
  );
};

export default Header;
