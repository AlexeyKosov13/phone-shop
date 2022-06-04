import React from "react";
import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPhone } from "../../redux/phones/reducer";
import AppContext from "../../context";
import styles from "./Card.module.scss";

function Card({
  id,
  imageUrl,
  name,
  price,
  onPlus,
  onFavorite,
  favorited = false,
  loading = false,
  phone
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = {id, parentId: id, imageUrl, name, price};

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  const dispatch = useDispatch();

  const handleClick =()=> {
    console.log(name);
    dispatch(setCurrentPhone(phone));
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      {
        loading ?  <ContentLoader 
        speed={2}
        width={150}
        height={245}
        viewBox="0 0 150 245"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        
      >
        <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
        <rect x="0" y="118" rx="6" ry="6" width="150" height="15" /> 
        <rect x="0" y="145" rx="6" ry="6" width="100" height="15" /> 
        <rect x="0" y="186" rx="6" ry="6" width="80" height="25" /> 
        <rect x="117" y="180" rx="6" ry="6" width="32" height="32" />
        </ContentLoader> : <>
        <div className={styles.favorite}>
          {onFavorite && (<img
            src={isFavorite ? "img/heart__liked.svg" : "img/heart__unliked.svg"}
            alt="favorite"
            onClick={onClickFavorite}
          />)}
        </div>
        <Link to='/phonePage'>
          <img src={imageUrl} alt="phone" width={133} height={142} className={styles.card__image} />
          <p className={styles.card__name}>{name}</p>
        </Link >
        
        <div className={styles.card__info}>
          <div className={styles.card__price}>
            <span>Цена:</span>
            <p>{price} руб.</p>
          </div>
          {onPlus && (<img
            className={styles.plus}
            onClick={onClickPlus}
            src={isItemAdded(id) ? "img/btn__checked.svg" : "img/btn__plus.svg"}
            alt="plus"
          />)}
        </div>
      </> 
      }
    </div>
         
  );
}

export default Card;
