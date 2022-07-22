import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {

  const componentDidUpdate =() => { window.scrollTo(0, 0) };
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__address}>
        <p>
          г. Чебоксары, ул.К.Маркса, д.57, 4 этаж офис №5, салон связи
          «Phone-shop»
        </p>
        <p>
          Тел.:<a href="tel:+18475555555">1-847-444-5555</a>,
          <a href="tel:+18475555555">1-847-213-5555</a>
        </p>
        <p>Часы работы: 16:00-19:00 (пн-пт), 11:00-14:00 (сб), выходной (вс)</p>
      </div>
      <div className={styles.footer__menu}>
        <div className={styles.menu__left}>
          <Link to="/" onClick={componentDidUpdate }>Главная</Link>
          <Link to="/delivery" onClick={componentDidUpdate }>Доставка</Link>
          <Link to="/guarantees" onClick={componentDidUpdate }>Гарантия</Link>
        </div>
        <div className={styles.menu__right}>
          <Link to="/about" onClick={componentDidUpdate }>О компании</Link>
          <Link to="/place" onClick={componentDidUpdate }>Как нас найти?</Link>
        </div>
      </div>
      <div className={styles.footer__map}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A415f54fa553e9aab2416ef77b68add95aa763d6a1b54aa669dc32f809b422324&amp;source=constructor"
          width="360"
          height="240"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
