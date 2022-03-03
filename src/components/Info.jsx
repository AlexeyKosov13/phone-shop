import React from 'react'
import AppContext from '../context';

const Info = ({ title, image, description }) => {
    const {setCartOpened } = React.useContext(AppContext);  

  return (
      <div>
          <div className="cart__empty">
              <img
                src={image}
                alt="empty-basket"
                className="empty__img"
              />
              <h2>{title}</h2>
              <p>{description}</p>
              <button className="green__button" onClick={() => setCartOpened(false)}>
                Вернуться назад
                <img src="./img/arrow.svg" alt="arrow" />
              </button>
            </div>
    </div>
  )
}

export default Info;
