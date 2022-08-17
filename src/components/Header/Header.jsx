import React, { useState, useEffect } from "react";
import "./Header.css";
const navLinks = [
  { display: "Services", url: "#services" },
  { display: "Works", url: "#works" },
  { display: "Blog", url: "#blog" },
];
const Header = () => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";

  return (
    <header className={cls}>
      <div className="header-container">
        <div className="logo">
          <h3 className="logo_s">S</h3>
        </div>
        <div className="nav_menu">
          <ul className="nav_list">
            {navLinks.map((item, index) => (
              <li className="nav_item" key={index}>
                <a href={item.url}>{item.display}</a>
              </li>
            ))}
            <button className="btn">Hire Me</button>
          </ul>
        </div>
        <span className="mobile_menu">
          <i class="ri-menu-line"></i>
        </span>
      </div>
    </header>
  );
};

export default Header;
