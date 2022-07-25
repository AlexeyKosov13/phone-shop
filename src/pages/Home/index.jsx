import {useContext} from "react";
import Card from "../../components/Card";
import Filters from "../../components/Filters";
import AppContext from "../../context";

import styles from "./Home.module.scss";

function Home() {

  const { itemsSort } = useContext(AppContext);
 
  const { searchValue, setSearchValue } = useContext(AppContext);
  const { isLoading } = useContext(AppContext);
  const { onChangeSearchInput } = useContext(AppContext);

  const renderItems = () => {

    const filteredItems = itemsSort.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        phone={item}
        key={index}
        {...item}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className={styles.content}>
      {/* <Slider /> */}
      <div className={styles.content__header}>
        <h2>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все телефоны"}
        </h2>
        <Filters  />
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

      {<div className={styles.products}>{renderItems()}</div>}
    </div>
  );
}

export default Home;
