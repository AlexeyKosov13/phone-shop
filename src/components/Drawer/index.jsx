import {useState} from "react";
import axios from "axios";
import Info from "../Info";
import { useCart } from "../../hooks/useCart";
import styles from "./Drawer.module.scss";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {

  const {cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [isOrderComlete, setIsOrderComlete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`https://62041896c6d8b20017dc3427.mockapi.io/orders`, {
        items: cartItems,
      });
      
      setOrderId(data.id);
      setIsOrderComlete(true);
      setCartItems([]);
      
      for (let i = 0; i < cartItems.length; i++){
        const item = cartItems[i];
        await axios.delete(`https://62041896c6d8b20017dc3427.mockapi.io/Cart/` + item.id);
        await delay(1000);
      }

    } catch (error) {
      alert("Не удалось создать заказ");
    }
    setIsLoading(false);
  }

  return (
    <div className={`${styles.drawer__overlay}  ${opened ? styles.overlayVisible : ''}   ${opened ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'}`} >
      <div className={styles.drawer}>
        <h2>
          Корзина
          <img
            src="img/cart__remove.svg"
            alt="remove"
            className={styles.btn__remove}
            onClick={onClose}
          />
        </h2>
        <div className={styles.drawer__block}>
          {items.length > 0 ? (
            <div className={styles.cart__block}>
              <div className={styles.cart__items}>
                {items.map((obj) => (
                  <div key={obj.id} className={styles.cart__item}>
                    <img
                      className={styles.cart__img}
                      src={obj.imageUrl}
                      alt="phone"
                      width={70}
                      height={70}
                    />
                    <div className={styles.cart__info}>
                      <p>{obj.name}</p>
                      <b>{obj.price}</b>
                    </div>
                    <img
                      src="img/cart__remove.svg"
                      alt="remove"
                      className={styles.btn__remove}
                      onClick={() => onRemove(obj.id)}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.cart__total}>
                <ul>
                  <li>
                    <span>Итого: </span>
                    <div></div>
                    <b>{totalPrice} руб.</b>
                  </li>
                  <li>
                    <span>Налог 5%: </span>
                    <div></div>
                    <b>{Math.floor((totalPrice/100)*5)} руб.</b>
                  </li>
                </ul>
                <button disabled={isLoading} onClick={onClickOrder} className={styles.green__button}>
                  Оформить заказ
                  <img src="img/arrow.svg" alt="arrow" />
                </button>
              </div>
            </div>
          ) : (
              <Info title={isOrderComlete ? "Заказ оформлен!" : "Корзина пустая"}
                description={isOrderComlete ? `ваш заказ №${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы один телефон, чтобы сделать заказ."}
                image={isOrderComlete? "img/checked.png": "img/basket.png"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Drawer;
