import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import confirm from "../../assets/confirm.png";
import order from "../../assets/order.png";

import { Footer } from "../../layout/Footer";
import "../../App.css";
export const OrderSuccess = () => {
  const [confettiWidth, setConfettiWidth] = useState(window.innerWidth - 16);

  useEffect(() => {
    const handleResize = () => {
      setConfettiWidth(window.innerWidth - 16);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="no-data-page">
        <Confetti
          recycle={true}
          numberOfPieces={300}
          width={confettiWidth}
          drawShape={(ctx) => {
            ctx.beginPath();
            for (let i = 0; i < 22; i++) {
              const angle = 0.35 * i;
              const x = (0.1 + 0.75 * angle) * Math.cos(angle);
              const y = (0.1 + 0.75 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
        />

        <h2 className="no-data-msg">
          <img
            src={order}
            alt="delivery boy"
            className="no-data-img"
            style={{ marginLeft: "3rem" }}
          />
          <div>
            "Your order is confirmed! Thank you for choosing our furniture."
          </div>
        </h2>
      </div>
      <Footer />
    </>
  );
};
