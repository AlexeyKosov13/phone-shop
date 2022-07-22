import {useContext} from 'react';
import AppContext from '../../context';
import './Filters.scss';

function Filters() {
    const {setFilter } = useContext(AppContext);

    const addFilter = (event) => {
      setFilter(event.target.value);
    };
 

  return (
      <div className="filters">
          <label htmlFor="filter">Сортировать по: </label>
          <select id="filter" name="filter" onChange={(e)=> addFilter(e)}>
          <option value="priceUp">По возрастанию цены</option>
          <option value="priceDown" >По убыванию цены</option>
          <option value="raitingUp">По рейтингу с меньшего</option>
          <option value="raitingDown">По рейтингу с большего</option>
      </select>
      </div>
      
  )
}

export default Filters