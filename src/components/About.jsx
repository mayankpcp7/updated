import React from "react";
import crypto from "../assets/images/png/about_crypto.png";
const About = () => {
  return (
    <>
      <section className="bg_about py-lg-5 py-3 bg_lg_color" id="About-Us">
        <div className="container py-lg-5 my-5">
          <h2 className="ff_mukta fs_xl text-white fw-bolder mb-0 text-start ">
            About Us
          </h2>
          <div className="row py-4">
            <div className="col-lg-6 py-lg-0 py-3">
              <p className="ff_poppins fw-normal fs_sm text-white mb-0 lh_27 mx-558px">
                We are a team that has been working with cryptocurrencies for
                over 8 years. We decided to create this community with the aim
                of bringing together as many investors as possible, so that
                everyone can profit from it. The group is completely free
                because the greater the number of investors, the greater the
                ability to influence the value of the corresponding coins.
              </p>
            </div>
            <div className="col-lg-6 py-3 py-lg-0">
              <div>
                <img
                  className=" w-100 scale_animation"
                  src={crypto}
                  alt="crypto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
