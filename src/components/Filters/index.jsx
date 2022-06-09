import React from 'react';
import AppContext from '../../context';
import './Filters.scss';

function Filters() {
    const { filterPrice, setFilterPrice } = React.useContext(AppContext);
    const { filterRaiting, setFilterRaiting } = React.useContext(AppContext);
    const { getFilterPriceUp } = React.useContext(AppContext);
    const { getFilterRaitingUp} = React.useContext(AppContext);
    const { items, setItems } = React.useContext(AppContext);

   

  return (
      <div className="filters">Сортировать по:
          <div className={filterPrice === 1?"filters__item filters__active":"filters__item"} onClick={getFilterPriceUp}>По цене</div>
          <div className={filterRaiting === 1?"filters__item filters__active":"filters__item"} onClick={getFilterRaitingUp}>По рейтингу</div>
      </div>
  )
}

export default Filters