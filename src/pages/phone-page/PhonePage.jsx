import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContentLoader from "react-content-loader";
import Tabs from "../../components/Tabs";
import AppContext from "../../context";
import axios from "axios";

import styles from "./PhonePage.module.scss";

function PhonePage() {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
     async function fetchData() {
      try {    
        setLoading(true); 
        const itemResponse = await axios.get(`https://62041896c6d8b20017dc3427.mockapi.io/Items/${id}`);     
        setPhone(itemResponse.data);
        setLoading(false);
      } catch (error) {
        alert("Ошибка при запросе данных");
      }
    }
    fetchData();
},[])

  const { onAddToFavorites } = useContext(AppContext);
  const { isDownloadFavorit } = useContext(AppContext);
  const { onAddToCart } = useContext(AppContext);
  const { isItemAdded } = useContext(AppContext);
  const [phone, setPhone] = useState({});
  
  const onClickPlus = () => {
    onAddToCart(phone);
    isItemAdded(phone.id);
  };

  const onClickFavorite = () => {
    const item = {...phone};
    item.fav = !item.fav;
    setPhone(item);
    onAddToFavorites(phone);
  };

  return (
    <div className={styles.page}>
  {loading ? (<ContentLoader 
    speed={2}
    width={1300}
    height={800}
    viewBox="0 0 700 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="22" y="41" rx="3" ry="3" width="266" height="18" /> 
    <rect x="27" y="99" rx="0" ry="0" width="100" height="117" /> 
    <rect x="463" y="114" rx="0" ry="0" width="76" height="91" /> 
    <rect x="145" y="98" rx="0" ry="0" width="287" height="11" /> 
    <rect x="145" y="121" rx="0" ry="0" width="287" height="11" /> 
    <rect x="145" y="145" rx="0" ry="0" width="287" height="11" /> 
    <rect x="145" y="167" rx="0" ry="0" width="287" height="11" /> 
    <rect x="145" y="188" rx="0" ry="0" width="287" height="11" /> 
    <rect x="145" y="207" rx="0" ry="0" width="287" height="11" /> 
    <rect x="29" y="257" rx="0" ry="0" width="161" height="35" /> 
    <rect x="207" y="257" rx="0" ry="0" width="161" height="35" /> 
    <rect x="384" y="257" rx="0" ry="0" width="161" height="35" /> 
    <rect x="38" y="319" rx="0" ry="0" width="155" height="18" /> 
    <rect x="38" y="357" rx="0" ry="0" width="448" height="13" /> 
    <rect x="38" y="379" rx="0" ry="0" width="448" height="13" /> 
    <rect x="38" y="401" rx="0" ry="0" width="448" height="13" /> 
    <rect x="38" y="424" rx="0" ry="0" width="448" height="13" /> 
    <rect x="38" y="447" rx="0" ry="0" width="448" height="13" /> 
    <rect x="38" y="468" rx="0" ry="0" width="448" height="13" />
  </ContentLoader>):( <div className={styles.phone}>
      <div className={styles.block}>
        <div className="phone__blockTitle">
          <h2 className={styles.phone__title}>{phone.name}</h2>
          <div className={styles.phone__favorite}>
            {isDownloadFavorit? (
              <img
                src={
                 phone.fav ? "img/heart__liked.svg" : "img/heart__unliked.svg"
                }
                alt="favorite"
                onClick={onClickFavorite}
              />
            ):<div class={styles.asyncSpinner}></div>} 
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
    </div>)}
    </div>
  );
}

export default PhonePage;
