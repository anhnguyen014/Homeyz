import React from "react";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const getMenuStyles = (isOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !isOpen && "-100%",
      };
    }
  };
  return (
    <div>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./logo.png" alt="logo" width={100} />

          <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
            <div className="flexCenter h-menu" style={getMenuStyles(isOpen)}>
              <a href="">Chỗ ở</a>
              <a href="">Kỳ nghỉ</a>
              <a href="">Liên hệ với chúng tôi</a>
              <a href="">Bắt đầu</a>
              <button className="button">
                <a href="">Liên hệ</a>
              </button>
            </div>
          </OutsideClickHandler>
          <div className="menu-icon" onClick={() => setIsOpen((prev) => !prev)}>
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
