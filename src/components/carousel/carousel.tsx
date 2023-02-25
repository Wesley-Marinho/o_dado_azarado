import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Battle } from "../card-battle/battle";
import "./style.scss";
export function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
 
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <Battle />
        </div>

        <div>
          <Battle />
        </div>

        <div>
          <Battle />
        </div>
      </Slider>
    </div>
  );
}
