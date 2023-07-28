import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Tầm nhìn của chúng tôi là làm cho tất cả mọi <br /> người nơi tốt
            nhất để sống cho họ.
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Thông tin</span>
          <span className="secondaryText">
            1C/31 Đường 22, Phường Phước Long B, Thành Phố Thủ Dức , TP. HCM
          </span>
          <div className="flexCenter f-menu">
            <span>Tài sản</span>
            <span>Dịch vụ </span>
            <span>Sản phẩm</span>
            <span>Về chúng tôi </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
