// import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <div className="circle circle-1 left"></div>
      <div className="circle circle-2 left"></div>
      <div className="circle circle-3 left"></div>

      <div className="section">
        <div>
          <span>Black Friday</span>
          <span>Cyber Monday</span>
        </div>
        <div></div>

        <div> </div>
      </div>

      <div className="circle circle-4 right"></div>
      <div className="circle circle-5 right"></div>
      <div className="circle circle-6 right"></div>

      {/* <nav>
        <ul>
          <li>
            <a href="/">Početna</a>
          </li>
          <li>
            <a href="/about">O nama</a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
