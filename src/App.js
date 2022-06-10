import React from "react";
import { HashRouter, Route } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Guarantees from "./pages/Guarantees/Guarantees";
import PhonePage from "./pages/phone-page/PhonePage";
import Delivery from "./pages/Delivery/Delivery";
import Orders from "./pages/Orders";
import Header from "./components/Header";
import Drawer from "./components/Drawer/";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import AboutPhone from "./components/AboutPhone";
import AppContext from "./context";
import { store } from "./redux";
import Place from "./pages/Place/Place";

function App() {
  const base = "https://62041896c6d8b20017dc3427.mockapi.io";
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [orders, setOrders] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [aboutOpened, setAboutOpened] = React.useState(false);
  const [filters, setFilter] = React.useState(0);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const cartResponse = await axios.get(`${base}/Cart`);
        const favoritesResponse = await axios.get(`${base}/favorites`);
        const itemsResponse = await axios.get(`${base}/Items`);
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(`${base}/Cart/${findItem.id}`);
      } else {
        const { data } = await axios.post(`${base}/Cart`, obj);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
    }
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`${base}/favorites/${obj.id}`);
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(`${base}/favorites`, obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить");
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`${base}/Cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Ошибка при удалении из корзины");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const addFilter = (event) => {
    setFilter(event.target.value);
  };

  const onChangeFilter = () => {
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
            case "raitingDown":
              res = items.sort((a, b) => b.raiting-a.raiting);
               setFilter(res);
             break;
            default:
              res = items.sort((a, b) => a.price - b.price);
              setFilter(res);
            break;
        }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <Provider store={store}>
      <HashRouter>
        <AppContext.Provider
          value={{
            items,
            orders,
            filters,
            setFilter,
            setItems,
            setOrders,
            cartItems,
            favorites,
            isItemAdded,
            onAddToCart,
            searchValue,
            setSearchValue,
            onAddToFavorites,
            setCartOpened,
            setCartItems,
            aboutOpened,
            setAboutOpened,
            isLoading,
            onChangeSearchInput,
            onChangeFilter,
            addFilter,
          }}
        >
          <div className="wrapper">
            <Drawer
              items={cartItems}
              onRemove={onRemoveItem}
              onClose={() => {
                setCartOpened(false);
              }}
              opened={cartOpened}
            />

            <Header onClickCart={() => setCartOpened(true)} />

            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/favorites" exact>
              <Favorites />
            </Route>

            <Route path="/orders" exact>
              <Orders />
            </Route>

            <Route path="/guarantees" exact>
              <Guarantees />
            </Route>

            <Route path="/delivery" exact>
              <Delivery />
            </Route>

            <Route path="/phonePage" exact>
              <PhonePage />
            </Route>

            <Route path="/about" exact>
              <About />
            </Route>

            <Route path="/place" exact>
              <Place />
            </Route>

            <Route path="/aboutPhone" exact>
              <AboutPhone />
            </Route>

            <Footer />
          </div>
        </AppContext.Provider>
      </HashRouter>
    </Provider>
  );
}

export default App;
