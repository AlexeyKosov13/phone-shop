import React from 'react';
import { useSelector } from 'react-redux';
import  AppContext  from "../../context";

import styles from './PhonePage.module.scss';


function PhonePage({onplus}) {
  const {onAddToCart} = React.useContext(AppContext);
  const { isItemAdded } = React.useContext(AppContext);

  const phone = useSelector((state) => state.phone.currentPhone);

  const onClickPlus = () => {
    console.log(phone.id);
    onAddToCart(phone);
    isItemAdded(phone.id);
  };

  return (
    <div className={styles.phone}>
      <h2 className={styles.phone__title}>{phone.name}</h2>
      <div className={styles.phone__block}>
        <div className={styles.phone__img}>
          <img src={phone.imageUrl} alt={phone.name} />
        </div>
        <div className={styles.phone__descr}>
          <p><span>Тип экрана:</span> {phone.display}</p>
          <p><span>Диагональ:</span> {phone.diagonal}</p>
          <p><span>Стандарт:</span> {phone.standart}</p>
          <p><span>Основные (тыловые) камеры:</span> {phone.cameras}</p>
          <p><span>Емкость аккумулятора: </span>{phone.acc}</p>
        </div>
        <div className={styles.phone__price}>
          {phone.price} руб.

          <button onClick={onPlus}>Купить</button>
          <p>{ isItemsAdded(phone.id)?'в корзине': null}</p>
        </div>
      </div>
    </div>
  )
}

export default PhonePage