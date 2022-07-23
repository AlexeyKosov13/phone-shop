import {useContext, useState} from "react";
import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppContext from "../../context";
import { setCurrentPhone } from "../../redux/phones/reducer";
import Slider from "../Slider/";
import styles from "./Card.module.scss";

function Card({
  id,
  raiting,
  imageUrl,
  name,
  price,
  loading = false,
  phone,
}) {
  const { isItemAdded } = useContext(AppContext);
  const { onAddToFavorites } = useContext(AppContext);
  const { onAddToCart } = useContext(AppContext);
  const [product, setProduct] = useState(phone);

  const onClickPlus = () => {
    onAddToCart(phone);
  };

  const onClickFavorite = () => {
    const item = {...product};
    item.fav = !item.fav;
    setProduct(item);
    console.log(product);
    onAddToFavorites(product);
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentPhone(phone));
  };

  const componentDidUpdate = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      {loading ? (
        <ContentLoader
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
        </ContentLoader>
      ) : (
        <>
          <div className={styles.head__block}>
            <div className={styles.favorite}>

              {true && (
                <img
                  src={
                    product.fav
                      ? "img/heart__liked.svg"
                      : "img/heart__unliked.svg"
                  }
                  alt="favorite"
                  onClick={onClickFavorite}
                />
              )}
            </div>

            <div className={styles.raiting}>
              <img src="img/star.svg" alt="star" />
              {raiting}
            </div>
          </div>

          {/* <Slider src={imageUrl}/> */}
          <img
            src={imageUrl}
            alt="phone"
            width={133}
            height={142}
            className={styles.card__image}
          />
          <Link to={`/phonePage/${id}`} onClick={componentDidUpdate()} >
            <p className={styles.card__name}>{name}</p>
          </Link>

          <div className={styles.card__info}>
            <div className={styles.card__price}>
              <span>Цена:</span>
              <p>{price} руб.</p>
            </div>
            {onAddToCart && (
              <img
                src={
                  isItemAdded(phone.parentId)
                    ? "img/btn__checked.svg"
                    : "img/btn__plus.svg"
                }
                alt="plus"
                className={styles.plus}
                onClick={onClickPlus}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
