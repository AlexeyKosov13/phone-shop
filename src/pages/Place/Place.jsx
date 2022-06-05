import React from "react";
import styles from "./Place.module.scss";

function Place() {
  return (
    <>
      <div className={styles.place__block}>
        <div className={styles.place__address}>
          <h2>Как нас найти?</h2>
          <ul>
            <li>428000, г. Чебоксары, ул.К.Маркса, д.57, ЦУМ, 3 этаж</li>
            <li>офис №4</li>
            <li>Эл. почта: <a href="email:example@example.ru">example@yandex.ru</a></li>
            <li>Тел.: <a href="tel:+18475555555">1-847-666-5555</a>, <a href="tel:+18475555555">1-847-556-5555</a></li>
            <li>
              Часы работы: 16:00-19:00 (пн-пт), 11:00-14:00 (сб), выходной (вс),
              4-5 июня -выходные дни.
            </li>
            <li>
              Реквизиты: ИП Андреев Андрей Васильевич ИНН 212767567234440 / ОГРН
              304212540500347
            </li>
          </ul>
        </div>
        <div className={styles.place__form}>
            <h2>Форма обратной связи</h2>
            <input type="text" placeholder="Name"/>
            <input type="tel" placeholder="tel"/>
            <textarea name="text" id="text" placeholder="Ваше сообщение"></textarea>
            <button>Отправить</button>
        </div>
      </div>
      <div className={styles.place__map}>
        <h2>Схема проезда</h2>
        <div className={styles.map}>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A415f54fa553e9aab2416ef77b68add95aa763d6a1b54aa669dc32f809b422324&amp;source=constructor" width="100%" height="354" frameborder="0"></iframe>
        </div>
      </div>
    </>
  );
}

export default Place;
