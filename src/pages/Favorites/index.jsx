import React from "react";
import Card from "../../components/Card";
import AppContext from "../../context";

import styles from "./Favorites.module.scss";

function Favorites() {
  const {favorites, onAddToFavorites} = React.useContext(AppContext);

  return (
    <div className={styles.content}>
      <div className={styles.content__header}>
        <h1>
          Мои закладки
        </h1>   
      </div>

      <div className={styles.content__favorites}>

        {favorites.map((item, index) => (
              <Card
                phone={item}
                key={index}
                favorited={true}
                {...item}
              />
            ))}
      </div>
      
    </div>
  );
}

export default Favorites;