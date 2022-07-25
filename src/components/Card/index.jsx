import { useContext } from "react";
import ContentLoader from "react-content-loader";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppContext from "../../context";
import { setCurrentPhone } from "../../redux/phones/reducer";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./Card.module.scss";

function Card({ loading = false, phone }) {
  const { isItemAdded } = useContext(AppContext);
  const { isDownloadFavorit } = useContext(AppContext);
  const { onAddToFavorites } = useContext(AppContext);
  const { onAddToCart } = useContext(AppContext);

  const onClickPlus = () => {
    onAddToCart(phone);
  };

  const onClickFavorite = () => {
    onAddToFavorites(phone);
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentPhone(phone));
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
              {isDownloadFavorit ? (
                <img
                  src={
                    phone.fav
                      ? "img/heart__liked.svg"
                      : "img/heart__unliked.svg"
                  }
                  alt="favorite"
                  onClick={onClickFavorite}
                />
              ) : (
                <div className={styles.asyncSpinner}></div>
              )}
            </div>

            <div className={styles.raiting}>
              <img src="img/star.svg" alt="star" />
              {phone.raiting}
            </div>
          </div>

          <Swiper
            navigation={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Navigation]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.imgWrapper}>
                <img src={phone.imageUrl} alt="phone" />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.imgWrapper}>
                <img src={phone.imageUrl} alt="phone" />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.imgWrapper}>
                <img src={phone.imageUrl} alt="phone" />
              </div>
            </SwiperSlide>
          </Swiper>


          <Link to={`/phonePage/${phone.id}`}>
            <p className={styles.card__name}>{phone.name}</p>
          </Link>

          <div className={styles.card__info}>
            <div className={styles.card__price}>
              <span>Цена:</span>
              <p>{phone.price} руб.</p>
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
