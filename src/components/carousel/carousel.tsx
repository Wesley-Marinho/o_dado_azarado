import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dice } from "../card-dice/dice";
export function Carousel() {
  var settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="container-main">
      <Slider {...settings}>
        <div>
          <Dice />
        </div>
      </Slider>
    </div>
  );
}
