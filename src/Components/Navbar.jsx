import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../assets/logo.png";

export default function Navbar() {
  function logOut() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <nav>
      <div className="navLeft">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navRight">
        <ul className="navList">
          <Link to="/">
            <li className="navLink">Home</li>
          </Link>
          <Link to="/newDx">
            <li className="navLink">New Diagnosis</li>
          </Link>
          <Link to="/history">
            <li className="navLink">History</li>
          </Link>
          <Link to="/newPass">
            <li className="navLink">Change Password</li>
          </Link>
          <button>
            <li className="navLink" onClick={logOut}>
              LogOut
            </li>
          </button>
        </ul>
      </div>
    </nav>
  );
}
