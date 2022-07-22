import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Tabs from "../../components/Tabs";
import AppContext from "../../context";
import axios from "axios";

import styles from "./PhonePage.module.scss";

function PhonePage() {
  const {id} = useParams();

  useEffect(() => {
     async function fetchData() {
      try {      
        const itemResponse = await axios.get(`https://62041896c6d8b20017dc3427.mockapi.io/Items/${id}`);     
        setPhone(itemResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
      }
    }
    fetchData();

},[])

  const { onAddToFavorites } = useContext(AppContext);
  const { onAddToCart } = useContext(AppContext);
  const { isItemAdded } = useContext(AppContext);
  const [phone, setPhone] = useState({});
  const [ isFavorite, setIsFavorite ] = useState(phone.fav);
  
  const onClickPlus = () => {
    onAddToCart(phone);
    isItemAdded(phone.id);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onAddToFavorites(phone);
  };

  return (
    <div className={styles.phone}>
      <div className={styles.block}>
        <div className="phone__blockTitle">
          <h2 className={styles.phone__title}>{phone.name}</h2>
          <div className={styles.phone__favorite}>
            {phone && (
              <img
                src={
                  isFavorite ? "img/heart__liked.svg" : "img/heart__unliked.svg"
                }
                alt="favorite"
                onClick={onClickFavorite}
              />
            )}
          </div>
        </div>

        <div className={styles.phone__block}>
          <div className={styles.phone__img}>
            <img src={phone.imageUrl} alt={phone.name} />
          </div>
          <div className={styles.phone__descr}>
            <div className={styles.raiting}>
              <img src="img/star.svg" alt="star" />
              {phone.raiting}
            </div>
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
            {phone && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(phone.parentId)
                    ? "img/btn__checked.svg"
                    : "img/btn__plus.svg"
                }
                alt="plus"
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.phone__about}>
        <Tabs phone={phone} />
      </div>
    </div>
  );
}

export default PhonePage;
