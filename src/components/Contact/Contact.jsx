import React from "react";
import "./contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { MdVideoCall } from "react-icons/md";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Liên hệ với chúng tôi</span>
          <span className="primaryText">Dễ dàng liên hệ với chúng tôi</span>
          <span className="secondaryText">
            Chúng tôi luôn sẵn sàng giúp đỡ bằng cách cung cấp các dịch vụ tốt
            nhất cho bạn. Chúng tôi tin rằng một nơi tốt để sống có thể làm cho
            cuộc sống của bạn tốt hơn
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Gọi</span>
                    <span className="secondaryText">0333 853 839</span>
                  </div>
                </div>
                <div className="flexCenter button">Gọi ngay</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Trò chuyện</span>
                    <span className="secondaryText">0333 853 839</span>
                  </div>
                </div>
                <div className="flexCenter button">Trò chuyện ngay</div>
              </div>
              {/* third row */}
            </div>
            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdVideoCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Gọi Video</span>
                    <span className="secondaryText">0333 853 839</span>
                  </div>
                </div>
                <div className="flexCenter button">Gọi video ngay</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Nhắn tin</span>
                    <span className="secondaryText">0333 853 839</span>
                  </div>
                </div>
                <div className="flexCenter button">Nhắn tin ngay</div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
