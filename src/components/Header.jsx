import React from "react";
import logo from "../assets/images/png/crypto-logo.png";
import { useState } from "react";
import telebg from "../assets/images/png/telebtn-bg.png";

const Header = () => {
const [show, setshow] = useState(true);
function showNav() {
  setshow(!show);
}
if (!show) {
  document.body.classList.add("overflow-hidden");
} else {
  document.body.classList.remove("overflow-hidden");
}
return (
  <>
    <header className="header_bg  ">
      <div className="bg-layer pb-5">
        <div className="container vh_100 d-flex flex-column align-items-lg-center">
          <nav className="pt-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="lg-pos-img z-10">
                <a href="#">
                  <img className="" src={logo} alt="logo" />
                </a>
              </div>
              <div>
                <ul className="d-xl-flex align-items-center mb-0 d-none ">
                  <li>
                    <a className="hover_line" href="#Statistics">
                      Statistics
                    </a>
                  </li>
                  <li>
                    <a className="hover_line" href="#Our-Pumps">
                      Our Pumps
                    </a>
                  </li>
                  <li>
                    <a className="hover_line" href="#Feedbacks">
                      Feedbacks
                    </a>
                  </li>
                  <li>
                    <a className="hover_line" href="#How-It-Works">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a className="hover_line" href="#About-Us">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="hover_line" href="#FAQ">
                      FAQ
                    </a>
                  </li>
                </ul>
                <div className="icon d-xl-none lg-pos z-10" onClick={showNav}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <ul
                  className={`d-flex gap-4 mb-0 sm_nav mb-0 ps-0 d-xl-none ${
                    show ? "" : "start-0"
                  }`}
                >
                  <li>
                    <a
                      className="hover_line"
                      onClick={showNav}
                      href="#Statistics"
                    >
                      Statistics
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover_line"
                      onClick={showNav}
                      href="#Our-Pumps"
                    >
                      Our Pumps
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover_line"
                      onClick={showNav}
                      href="#Feedbacks"
                    >
                      Feedbacks
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover_line"
                      onClick={showNav}
                      href="#How-It-Works"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover_line"
                      onClick={showNav}
                      href="#About-Us"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="hover_line" onClick={showNav} href="#FAQ">
                      FAQ
                    </a>
                  </li>
                  <button
                    className="text-white bg_button ff_montserrat fs_sm fw-bold border-0 z-1 bg_tele position-relative transition_300 transform_scale"
                    onClick={showNav}
                  >
                    Join Telegram For Free
                  </button>
                </ul>
              </div>

              <div className="d-xl-block d-none">
                <button className="text-white bg_button ff_montserrat fs_md fw-bold border-0 transform_scale transition_300 mx-2">
                  Join Telegram For Free
                </button>
              </div>
            </div>
          </nav>
          <main className="d-flex align-items-center flex-column justify-content-center flex-grow-1 py-5  my-sm-0 my-3 ">
            <h1 className="text-center color_gradiant fs_xxl ff_exo fw-bolder mb-0 pb-3">
              Earn More in Less Time
            </h1>
            <div className="d-flex  justify-content-center align-items-center mb-0">
              <div>
                <p className="text-center mx-703 text-white mb-0 ff_montserrat fs_sm fw-medium lh_24 pb-3">
                  If you don't join this group you could be missing out on one
                  of the biggest opportunities of your life, more than 25000
                  people have already joined!
                </p>
              </div>
            </div>
            <p className="text-center text-white ff_montserrat fw-medium fs_sm mb-0">
              Will you miss this opportunity?
            </p>
            <div className="bg_tele position-relative py-5 mt-3 z-2">
              <button className="text-white bg_button ff_montserrat fs_md fw-bold border-0 z-1 bg_tele position-relative">
                Join Telegram For Free
              </button>
              <div className="tele">
                <img src={telebg} alt="telebg" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </header>
  </>
);
};

export default Header;
