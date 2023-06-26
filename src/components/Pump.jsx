import React from "react";
import Pump_img from "../assets/images/png/pump.png";
import { Carousel } from '3d-react-carousal';
import trap from "../assets/images/png/trap-img.png";
import rocket from "../assets/images/gif/rocket.gif";
const Pump = () => {
  let slides = [
    <img  src={Pump_img} alt="img" />,
    <img  src={Pump_img} alt="img" />,
    <img  src={Pump_img} alt="img" />,
    <img  src={Pump_img} alt="img" />,
    <img  src={Pump_img} alt="img" />,
  ];
  return (
    <>
      <section
        className="bg-black py-3 position-relative"
        id="Our-Pumps"
      >
        <div className="upper_circle_pump"></div>

        <div className="trap">
          <img className="w-100 h-100 " src={trap} alt="trap" />
        </div>
        <div className="container">
          <h2 className="ff_exo fs_xl text-white fw-bolder text-center py-5 mb-0">
            Our Pumps
          </h2>
          <div className="z-3 positon-relative">
            <div className="rocket d-none d-sm-block">
              <img className="z-0 " src={rocket} alt="rocket" />
            </div>
            <Carousel
              className="z-2"
              slides={slides}
              autoplay={false}
              interval={1000}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Pump;
