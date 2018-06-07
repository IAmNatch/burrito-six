import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const NavWrapper = styled.div`
  grid-template-rows: [nav]10vh;
  display: grid;
`

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
      <div className="navbar-end">
          <p><i>Last updated June 2018</i></p>
      </div>
    </div>
  </nav>
);

export default Navbar;
