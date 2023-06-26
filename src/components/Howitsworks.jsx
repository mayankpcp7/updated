import React from "react";
import phone from "../assets/images/png/iPhone 12 Mockup.png";

const Howitsworks = () => {
  return (
    <>
      <section
        className="bg-black py-5  position-relative min_vh_80"
        id="How-It-Works"
      >
        <div className="vector-1"></div>
        <div className="vector-2"></div>

        <div className="container">
          <h2 className="ff_lg ff_exo fw-bold fs_xl text-center text-white z-2 py-lg-5 pb-3 mb-0 z-10">
            How it <span className="color_dark_gradiant">Works?</span>
          </h2>
          <div className="row align-items-center py-lg-5">
            <div className="col-lg-4 z-3">
              <div className="d-flex flex-column justify-content-center  h-100">
                <div className=" bg_gradiant_dark w-100 bg_blur pylg-4 py-3 px-2 border_gradiant my-lg-4 grandient-border-mask">
                  <p className="ff_poppins fw-medium fs_md text-white op_70 mb-0">
                    Create an Exhange <br className="d-none d-lg-block" />
                    Account
                  </p>
                </div>
                <div className=" bg_gradiant_dark w-100 bg_blur pylg-4 py-3 px-2 my-lg-4 border_gradiant">
                  <p className="ff_poppins fw-medium fs_md text-white op_70 mb-0">
                    Transfer bnb to trustwallet or metamasks
                  </p>
                </div>
                <div className=" bg_gradiant_dark w-100 bg_blur pylg-4 py-3  px-2 my-lg-4 border_gradiant">
                  <p className="ff_poppins fw-medium fs_md text-white op_70 mb-0 ">
                    Connect wallet to Pancakeswap, Poocoin, Dextools or
                    Boggedfinance
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 z-3">
              <div className="d-flex justify-content-center shine py-3 py-lg-none phone">
                <img className=" w-80 " src={phone} alt="phone" />
              </div>
            </div>
            <div className="col-lg-4 z-3">
              <div className="d-flex flex-column justify-content-center align-items-start h-100">
                <div className=" bg_gradiant_dark w-100 bg_blur pylg-4 py-3  px-2 my-lg-4 border_gradiant">
                  <p className="ff_poppins fw-medium fs_md text-white op_70 mb-0">
                    Buy as soon as possible after <br /> the signal
                  </p>
                </div>

                <div className=" bg_gradiant_dark w-100 bg_blur pylg-4 py-3 px-2 my-lg-4 border_gradiant">
                  <p className="ff_poppins fw-medium fs_md text-white op_70 mb-0 text-start">
                    We hold the pump for at least 5 minutes and the coin will
                    attract investors from outside our group
                  </p>
                </div>
                <div className=" bg_gradiant_dark w-100 bg_blur pylg-4 py-3  px-2 my-lg-4 border_gradiant">
                  <p className="ff_poppins fw-medium fs_md text-white op_70 mb-0 text-start">
                    Sell after the signal and take{" "}
                    <br className="d-none d-lg-block" /> the profits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Howitsworks;
