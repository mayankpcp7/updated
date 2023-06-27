import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import backtotopimg from "../assets/images/png/img_338364.png";
const Backtotop = () => {
  const back = () => {
    document.documentElement.scrollTop = 0;
  };

  const [first, newvar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 50) {
        newvar(true);
      } else {
        newvar(false);
      }
    });
  });
  return (
    <>
      {first ? (
        <div className="curser-pointer" onClick={back}>
          <img
            className=" backtotop  z_index_999"
            src={backtotopimg}
            alt="backtotop"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Backtotop;
