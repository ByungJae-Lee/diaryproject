import { Link } from "react-router-dom";
import React from "react";
import "../CSS/Nav.css";

function Nav() {
  return (
    <div>
      <div className="navbar">
        <Link className="navbarMenu" to={"/"}>
          로그아웃
        </Link>
      </div>
    </div>
  );
}

export default Nav;
