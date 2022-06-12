import React from 'react';
import AppContext from '../../context';
import './Filters.scss';

function Filters() {
    const { onChangeFilter } = React.useContext(AppContext);
    const {addFilter } = React.useContext(AppContext);

  
 

  return (
      <div className="filters">
          <label htmlFor="filter">Сортировать по: </label>
            <select id="filter" name="filter" onChange={addFilter}>
          <option value="priceUp">По возрастанию цены</option>
          <option value="priceDown" >По убыванию цены</option>
          <option value="raitingUp">По рейтингу с меньшего</option>
          <option value="raitingDown">По рейтингу с большего</option>
      </select>
      </div>
      
  )
}

export default Filters