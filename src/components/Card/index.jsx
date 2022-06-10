import React from "react";
import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppContext from "../../context";
import { setCurrentPhone } from "../../redux/phones/reducer";
import styles from "./Card.module.scss";

function Card({
  id,
  raiting,
  imageUrl,
  parentId,
  name,
  price,
  onPlus,
  onFavorite,
  favorited = false,
  loading = false,
  phone,
}) {
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const { isItemAdded } = React.useContext(AppContext);
  const { cartItems } = React.useContext(AppContext);
  const obj = { id, parentId, imageUrl, name, price, raiting };

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentPhone(phone));
  };

  const componentDidUpdate = () => {
    window.scrollTo(0, 0);
  };

  const sumItem = (phone) => {
    let total = 0;
    cartItems.map((item) => {
      if (item.parentId === phone.parentId) {
        total++;
      }
    });
    return total;
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
              {onFavorite && (
                <img
                  src={
                    isFavorite
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
                {raiting}</div>
          </div>

          <Link to="/phonePage" onClick={componentDidUpdate}>
            <img
              src={imageUrl}
              alt="phone"
              width={133}
              height={142}
              className={styles.card__image}
            />
            <p className={styles.card__name}>{name}</p>
          </Link>

          <div className={styles.card__info}>
            <div className={styles.card__price}>
              <span>Цена:</span>
              <p>{price} руб.</p>
            </div>
            {onPlus && (
              <button className={styles.card__btn} onClick={onClickPlus}>
                В корзину
              </button>
            )}
          </div>
          <div className={styles.card__cart}>
            {isItemAdded(phone.parentId) ? `в корзине ${sumItem(phone)}` : null}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
