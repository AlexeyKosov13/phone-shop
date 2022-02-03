function Drawer() {
  return (
    <div className="drawer__overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img
            src="/img/cart__remove.svg"
            alt="remove"
            className="btn__remove"
          />
        </h2>
        <div className="cart__items">
          <div className="cart__block">
            <div className="cart__item">
              <img
                className="cart__img"
                src="/img/sneakers/1.jpg"
                alt="Sneakers"
                width={70}
                height={70}
              />
              <div className="cart__info">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                src="/img/cart__remove.svg"
                alt="remove"
                className="btn__remove"
              />
            </div>
          </div>
          <div className="cart__block">
            <div className="cart__item">
              <img
                className="cart__img"
                src="/img/sneakers/1.jpg"
                alt="Sneakers"
                width={70}
                height={70}
              />
              <div className="cart__info">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                src="/img/cart__remove.svg"
                alt="remove"
                className="btn__remove"
              />
            </div>
          </div>
          <div className="cart__block">
            <div className="cart__item">
              <img
                className="cart__img"
                src="/img/sneakers/1.jpg"
                alt="Sneakers"
                width={70}
                height={70}
              />
              <div className="cart__info">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                src="/img/cart__remove.svg"
                alt="remove"
                className="btn__remove"
              />
            </div>
          </div>
        </div>

        <div className="cart__total">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 465 руб.</b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1030 руб.</b>
            </li>
          </ul>
          <button className="green__button">
            Оформить заказ
            <img src="./img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
