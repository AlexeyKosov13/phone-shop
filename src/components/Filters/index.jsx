import React from 'react';
import AppContext from '../../context';
import './Filters.scss';

function Filters() {
    const { filterPrice, setFilterPrice } = React.useContext(AppContext);
    const { filterRaiting, setFilterRaiting } = React.useContext(AppContext);
    const { items, setItems } = React.useContext(AppContext);

    function getFilterPriceUp () {
        setFilterPrice(!filterPrice);
        // setFilterRaiting(!filterRaiting);
        console.log(filterPrice);
         let res = filterPrice == 1? items.sort((a, b) => a.price-b.price): items.sort((a, b) => b.price-a.price);
        setItems(res);
     }
    
     function getFilterRaitingUp () {
        //  setFilterPrice(!filterPrice);
         setFilterRaiting(!filterRaiting);
         let res = filterRaiting == 1? items.sort((a, b) => a.raiting-b.raiting) : items.sort((a, b) => b.raiting-a.raiting);
         setItems(res);
      }

  return (
      <div className="filters">Сортировать по:
          <div className={filterPrice === 1?"filters__item filters__active":"filters__item"} onClick={getFilterPriceUp}><span className='filters__arrow'></span>По цене</div>
          <div className={filterRaiting === 1?"filters__item filters__active":"filters__item"} onClick={getFilterRaitingUp}>По рейтингу</div>

          <label for="filter">Сортировать по:</label>
            <select id="filter" name="filter">
          <option value="iphone 6s">По возрастанию цены</option>
          <option value="lumia 950">По убыванию цены</option>
          <option value="raitingUp">По рейтингу с меньшего</option>
          <option value="raitingDown">По рейтингу с большего</option>
      </select>
      </div>
      
  )
}

export default Filters