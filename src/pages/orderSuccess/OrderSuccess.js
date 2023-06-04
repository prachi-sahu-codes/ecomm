import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Footer } from "../../layout/Footer";
import { useData } from "../../context/ProductContext";
import "../../App.css";
import order from "../../assets/order.png";

export const OrderSuccess = () => {
  const { pageRef, scrollToTop } = useData();
  const [confettiWidth, setConfettiWidth] = useState(window.innerWidth - 16);

  useEffect(() => {
    scrollToTop();

    const handleResize = () => {
      setConfettiWidth(window.innerWidth - 16);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={pageRef}>
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
    </div>
  );
};
