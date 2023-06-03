import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import per1 from "../../../assets/home-images/per1.png";
import per2 from "../../../assets/home-images/per2.png";
import per3 from "../../../assets/home-images/per3.png";
import per4 from "../../../assets/home-images/per4.png";
import per5 from "../../../assets/home-images/per5.png";
import per6 from "../../../assets/home-images/per6.png";
import "./carousel.css";

const TestimonialCarousel = () => {
  return (
    <Carousel
      autoPlay={true} // Enable automatic slide change
      interval={3000} // Set the interval between slides (in milliseconds)
      infiniteLoop={true} // Enable infinite loop
      showArrows={true} // Hide navigation arrows
      showStatus={false} // Hide slide status indicators
      showThumbs={false} // Hide thumbnail navigation
    >
      <img src={per1} alt="person1" />
      <img src={per2} alt="person2" />
      <img src={per3} alt="person3" />
      <img src={per4} alt="person4" />
      <img src={per5} alt="person5" />
      <img src={per6} alt="person6" />
    </Carousel>
  );
};

export default TestimonialCarousel;
