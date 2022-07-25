
import Swiper from "react-id-swiper";

const Slider = ({src}) => {

  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }
  return (
    <div>
      <Swiper {...params}>
        <div><img src={src} alt="photoPhone"/></div> 
        <div><img src={src} alt="photoPhone"/></div>
        <div><img src={src} alt="photoPhone"/></div>
        <div><img src={src} alt="photoPhone"/></div>
        <div><img src={src} alt="photoPhone"/></div>
      </Swiper>
    </div>
  );
};

export default Slider;