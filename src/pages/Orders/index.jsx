import {useContext, useEffect} from "react";
import axios from "axios";
import Card from "../../components/Card";
import AppContext from "../../context";

import styles from './Orders.module.scss';

function Orders() {
  const { orders, setOrders } = useContext(AppContext);
  const { isItemAdded } = useContext(AppContext);
  const { isLoading, setIsLoading } = useContext(AppContext);
  
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://62041896c6d8b20017dc3427.mockapi.io/orders');
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        alert('ошибка при запросе заказов');
      }
    })();
  }, []);

  return (
    <div className={styles.content}>
      <div className={styles.content__header}>
        <h1>Мои заказы</h1>
      </div>

      <div className={styles.content__favorites}>
        {(isLoading ? [...Array(8)]: orders).map((item, index ) => (
          <Card
          phone = {item}
          key={index}         
          added={isItemAdded(item && item.id)}
          {...item}        
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
