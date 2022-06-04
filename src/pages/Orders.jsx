import React from "react";
import axios from "axios";
import Card from "../components/Card";
import AppContext from "../context";

function Orders() {
  const { isItemAdded } =
    React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BASE}/orders`
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('ошибка при запросе заказов');
      }
    })();
  }, []);

  return (
    <div className="content">
      <div className="content__header">
        <h1>Мои заказы</h1>
      </div>

      <div className="content__favorites">
        {(isLoading ? [...Array(8)]: orders).map((item, index) => (
          <Card
            key={index}
            added={isItemAdded(item && item.id)}
            {...item}
            loading={isLoading}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
