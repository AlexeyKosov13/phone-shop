import React from "react";
import Card from "../../components/Card";
import Filters from "../../components/Filters";
import { Slider } from "../../components/Slider";
import AppContext from "../../context";

import styles from "./Home.module.scss";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorites,
  isLoading,
}) {

  const { isItemAdded } = React.useContext(AppContext);

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return ( (isLoading ? [...Array(8)]: filteredItems)  
          .map((item, index) => (
            <Card
              phone = {item}
              key={index}
              onFavorite={(obj) => onAddToFavorites(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              added={isItemAdded(item && item.id)}
              {...item}
              loading={isLoading}
            />
          ))
    )
  }

  return (
    <div className={styles.content}>
      {/* <Slider /> */}
      <div className={styles.content__header}>
        <h2>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все телефоны"}
        </h2>
        <Filters/>
        <div className={styles.content__search}>
          <img src="img/search.svg" alt="search" />
          {searchValue && (
            <img
              src="img/cart__remove.svg"
              alt="clear"
              className={styles.clear}
              onClick={() => setSearchValue("")}
            />
          )}
          <input
            onChange={onChangeSearchInput}
            type="text"
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className={styles.products}>
        {renderItems()}
      </div>
    </div>
  );
}

export default Home;
