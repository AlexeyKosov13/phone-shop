import React from 'react';
import AppContext from '../../context';
import './Filters.scss';

function Filters() {
    const { items } = React.useContext(AppContext);
    const { filters, setFilter } = React.useContext(AppContext);

    function filter(event) {
        setFilter(event.target.value);
        let res;

        switch (filters) {
            case "priceUp":
                res = items.sort((a, b) => a.price - b.price);
                setFilter(res);
              break;
            case "priceDown":
                res = items.sort((a, b) => b.price - a.price);
                setFilter(res);
              break;
            case "raitingUp":
               res = items.sort((a, b) => a.raiting-b.raiting);
                setFilter(res);
              break;
            default:
                res = items.sort((a, b) => b.raiting-a.raiting);
                 setFilter(res);
        }
    }

  return (
      <div className="filters">
          <label htmlFor="filter">Сортировать по: </label>
            <select id="filter" name="filter" onChange={filter}>
          <option value="priceUp">По возрастанию цены</option>
          <option value="priceDown" >По убыванию цены</option>
          <option value="raitingUp">По рейтингу с меньшего</option>
          <option value="raitingDown">По рейтингу с большего</option>
      </select>
      </div>
      
  )
}

export default Filters