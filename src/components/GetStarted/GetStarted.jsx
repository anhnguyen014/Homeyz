import React from "react";
import "./getStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Bắt đầu với Homeyz</span>
          <span className="secondaryText">
            Đăng ký và tìm báo giá siêu hấp dẫn từ chúng tôi. <br /> Tìm nơi ở
            của bạn sớm
          </span>
          <button className="button">
            <a href="mailto:anhnguyen.1004@gmail.com">Bắt đầu</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
