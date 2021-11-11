import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/logo.svg'; //special format to import SVGs
import './header.styles.scss';

const Header = () => (
  <header className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
    <Link className="option" to='/'>home</Link>
        <Link className="option" to='/about'>about</Link>
        <Link className="option" to='/gallery'>gallery</Link>
        <Link className="option" to='/contact'>contact</Link>
    </div>
  </header>
);

export default Header;
