import React, { useState, useEffect } from "react";

const img = [
  <img key={1} src='img/promo/1.jpg' />,
  <img key={2} src='img/promo/2.jpg' />,
  <img key={3} src='img/promo/3.jpg' />,
  <img key={4} src='img/promo/4.jpg' />,
  <img key={5} src='img/promo/5.jpg' />,
];

export function Slider() {
  // Индекс текущего слайда
  const [activeIndex, setActiveIndex] = useState(0);

  // Хук Effect
  useEffect(() => {
    // Запускаем интервал
    const interval = setInterval(() => {
      // Меняем состояние
      setActiveIndex((current) => {
        // Вычисляем индекс следующего слайда, который должен вывестись
        const res = current === img.length - 1 ? 0 : current + 1;
        // Возвращаем индекс
        return res;
      });
    }, 3000);
    // Выключаем интервал
    return () => clearInterval();
  }, []);

  // Вычисляем индекс предыдущего слайда
  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  // Вычисляем индекс следующего слайда
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className="slider">
      <div className="slider-img slider-img-prev" key={prevImgIndex}>
        {img[prevImgIndex]}
      </div>
      <div className="slider-img" key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div className="slider-img slider-img-next" key={nextImgIndex}>
        {img[nextImgIndex]}
      </div>
    </div>
  );
}

export default Slider;
