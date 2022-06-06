import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HashRouter, Route } from "react-router-dom";
import AboutPhone from "../../components/AboutPhone";
import AppContext from "../../context";

import styles from "./PhonePage.module.scss";

function PhonePage({ onPlus }) {
  const { cartItems } = React.useContext(AppContext);
  const { onAddToCart } = React.useContext(AppContext);
  const { isItemAdded } = React.useContext(AppContext);

  const phone = useSelector((state) => state.phone.currentPhone);

  const onClickPlus = () => {
    onAddToCart(phone);
    isItemAdded(phone.id);
  };

  return (
    <div className={styles.phone}>
      <div className={styles.block}>
        <h2 className={styles.phone__title}>{phone.name}</h2>
        <div className={styles.phone__block}>
          <div className={styles.phone__img}>
            <img src={phone.imageUrl} alt={phone.name} />
          </div>
          <div className={styles.phone__descr}>
            <p>
              <span>Тип экрана:</span> {phone.display}
            </p>
            <p>
              <span>Диагональ:</span> {phone.diagonal}
            </p>
            <p>
              <span>Стандарт:</span> {phone.standart}
            </p>
            <p>
              <span>Основные (тыловые) камеры:</span> {phone.cameras}
            </p>
            <p>
              <span>Емкость аккумулятора: </span>
              {phone.acc}
            </p>
          </div>
          <div className={styles.phone__price}>
            {phone.price} руб.
            <button onClick={onClickPlus}>Купить</button>
            <p>
              {isItemAdded(phone.parentId)
                ? `в корзине ${cartItems.length}`
                : null}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.phone__about}>
        <nav className={styles.phone__nav}>
          <Link to='/aboutPhone' className={styles.nav__link}>Описание</Link>
          <Link to='/' className={styles.nav__link}>Характеристики</Link>
          <Link to='/' className={styles.nav__link}>Отзывы</Link>
          <Link to='/' className={styles.nav__link}>Аксессуары</Link>
        </nav>
        <HashRouter>
          
          
        </HashRouter>
        
      </div>
    </div>
  );
}

export default PhonePage;
