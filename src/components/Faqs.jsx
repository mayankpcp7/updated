import React from "react";
import Accordion from "react-bootstrap/Accordion";
import footerlogo from "../assets/images/png/footer-logo.png";
import telegram from "../assets/images/png/footer-telegram.button.png";
const Faqs = () => {
  return (
    <>
      <section
        className="bg-black layer_color pt-5 position-relative "
        id="FAQ"
      >
        <div className="vector-3"></div>

        <h2 className="color_faq text-center ff_mukta fw-bolder fs_xl py-5">
          FAQs
        </h2>
        <div className="container pb-5">
          <div className="d-flex justify-content-center pb-5 z-1">
            <Accordion defaultActivekey="0" className="mw-845">
              <Accordion.Item className="border_top_bottom px-2" evenKey="0">
                <Accordion.Header>
                  <h4 className="ff_poppins fw-normal text-white fs_lsx mb-0">
                    What is a pump & dump?
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="ff_poppins fw-normal op_70 text-white fs_sm  mw_692px lh_27 mb-0">
                    Pump is a deliberate and drastic increase in the value of a
                    coin with the help of a massive purchase by our entire team.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="border_top_bottom px-2">
                <Accordion.Header>
                  <h4 className="ff_poppins fw-normal text-white fs_lsx mb-0">
                    How does the pump come about?
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="ff_poppins fw-normal op_70 text-white fs_sm  mw_692px lh_27 mb-0">
                    Pump is a deliberate and drastic increase in the value of a
                    coin with the help of a massive purchase by our entire team.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border_top_bottom px-2" eventKey="2">
                <Accordion.Header>
                  <h4 className="ff_poppins fw-normal text-white fs_lsx mb-0">
                    Why is it profitable to me?
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="ff_poppins fw-normal op_70 text-white fs_sm  mw_692px lh_27 mb-0">
                    Pump is a deliberate and drastic increase in the value of a
                    coin with the help of a massive purchase by our entire team.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border_top_bottom px-2" eventKey="3">
                <Accordion.Header>
                  <h4 className="ff_poppins fw-normal text-white fs_lsx mb-0">
                    Is it legal to participate in the pump?
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="ff_poppins fw-normal op_70 text-white fs_sm  mw_692px lh_27 mb-0">
                    Pump is a deliberate and drastic increase in the value of a
                    coin with the help of a massive purchase by our entire team.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border_top_bottom px-2" eventKey="4">
                <Accordion.Header>
                  <h4 className="ff_poppins fw-normal text-white fs_lsx mb-0">
                    How to participate in the pump using Binance and
                    TrustWallet?
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="ff_poppins fw-normal op_70 text-white fs_sm  mw_692px lh_27 mb-0">
                    Pump is a deliberate and drastic increase in the value of a
                    coin with the help of a massive purchase by our entire team.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border_top_bottom px-2" eventKey="5">
                <Accordion.Header>
                  <h4 className="ff_poppins fw-normal text-white fs_lsx mb-0">
                    How to participate if u don’t have Binance?
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="ff_poppins fw-normal op_70 text-white fs_sm  mw_692px lh_27 mb-0">
                    Pump is a deliberate and drastic increase in the value of a
                    coin with the help of a massive purchase by our entire team.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border_top_bottom px-2" eventKey="6">
                <Accordion.Header>
                  <h4 className="ff_poppins fw-normal text-white fs_lsx mb-0">
                    Video if you’ve been never used PancakeSwap.
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="ff_poppins fw-normal op_70 text-white fs_sm  mw_692px lh_27 mb-0">
                    Pump is a deliberate and drastic increase in the value of a
                    coin with the help of a massive purchase by our entire team.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="0"
                defaultActivekey="1"
                className="border_top_bottom px-2"
              >
                <Accordion.Header>
                  <h4 className="ff_poppins fw-normal text-white fs_lsx mb-0">
                    How to sell coins fast?
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="ff_poppins fw-normal op_70 text-white fs_sm  mw_692px lh_27 mb-0">
                    Pump is a deliberate and drastic increase in the value of a
                    coin with the help of a massive purchase by our entire team.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="border_top   bg-black pt-5 position-relative ">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div>
              <img className="curser-pointer" src={footerlogo} alt="logo" />
            </div>

            <a
              className="d-flex align-items-center hover_button bg_gradiant radius_78 py-8px px-18px my-3 transform_scale transition_300"
              href="#"
            >
              <img className="scale_animation" src={telegram} alt="telegram" />
              <p className="mb-0 ps-3 ff_montserrat fs_xsm fw-bold text-white">
                Telegram
              </p>
            </a>
          </div>
        </div>
        <div className="vector-4"></div>
      </section>
    </>
  );
};

export default Faqs;
