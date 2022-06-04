import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__address}>
        <p>
          г. Чебоксары, ул.К.Маркса, д.47, 4 этаж офис №2, салон связи
          «Симпатия»
        </p>
        <p>Тел.:<a href="tel:+18475555555">1-847-555-5555</a>, <a href="tel:+18475555555">1-847-666-5555</a></p>
        <p>Часы работы: 16:00-19:00 (пн-пт), 11:00-14:00 (сб), выходной (вс)</p>
      </div>
      <div className={styles.footer__menu}>
        <div className={styles.menu__left}>
        <Link to='/'><a href="#">Главная</a></Link>
            <Link to='/delivery'><a href="#">Доставка</a></Link>
            <Link to='/guarantees'><a href="#">Гарантия</a></Link>
        </div>
        <div className={styles.menu__right}>
            <Link to='/about'>О компании</Link>
            <a href="#">Как нас найти?</a>
        </div>
      </div>
      <div className={styles.footer__map}>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A415f54fa553e9aab2416ef77b68add95aa763d6a1b54aa669dc32f809b422324&amp;source=constructor" width="360" height="240"></iframe>
      </div>
    </footer>
  );
}

export default Footer;