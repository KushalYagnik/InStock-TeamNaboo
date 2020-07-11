import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/Logo/Logo-instock.svg';
import '../../App.scss';
import './Header.scss';

export default function Header() {

  function checkActive() {
    if (window.location.pathname.includes("/inventory")) {return ("header__inventory--active")} 
    else {return ("header__inventory")}
  }

  function checkActive2() {
    if (
      window.location.pathname.includes("/locations") ||
      window.location.pathname === "/"
    ) {
      return "header__locations--active";
    } else {
      return "header__locations";
    }
  }

  return (
      <header className="header">
        <Link className="header__logo" to="/"><img src={logo} alt="logo" className="header__logo-image"/></Link>
        <Link className={checkActive()} to="/inventory"><div className="header__inventory-link">Inventory</div></Link> 
        <Link className={checkActive2()} to="/locations"><div className="header__locations-link">Locations</div></Link>
      </header>
  );
}
