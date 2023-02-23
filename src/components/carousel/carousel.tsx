import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  "https://via.placeholder.com/400x200",
  "https://via.placeholder.com/400x200",
  "https://via.placeholder.com/400x200",
];

export function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item}>
          <img src={item} alt="carousel item" />
        </div>
      ))}
    </Slider>
  );
}
