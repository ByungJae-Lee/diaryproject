import { Link } from "react-router-dom";
import React from "react";
import "../nav/Nav.css";

function Nav() {
  return (
    <>
      <div className="navbar">
        <Link className="navbarMenu" to={"/"}>
          <div className='container'>
            {/* logo img */}
            <img src="/img/test.png" />
            {/*회원가입 로그인버튼*/}
            <button className="button">회원가입</button>
            <button className="button">로그인</button>
          </div>
          <div></div>
        </Link>
      </div>
    </>
  );
}

export default Nav;
