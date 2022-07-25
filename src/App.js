import {useEffect, useState} from "react";
import { HashRouter, Route } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./redux";

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
import Place from "./pages/Place/Place";

function App() {
  const base = "https://62041896c6d8b20017dc3427.mockapi.io";
  const [items, setItems] = useState([]);
  const [itemsSort, setItemsSort] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloadFavorit, setIsDownloadFavorit] = useState(true);
  const [aboutOpened, setAboutOpened] = useState(false);
  const [filter, setFilter] = useState("raitingDown");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const cartResponse = await axios.get(`${base}/Cart`);
        const itemsResponse = await axios.get(`${base}/Items`);
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setItems(itemsResponse.data);
        setItemsSort(itemsResponse.data);
        setFavorites(itemsResponse.data.map((item => item.fav === true?item:null)))
      } catch (error) {
        alert("Ошибка при запросе данных");
      }
    }
    fetchData();
  }, []);


  //======================сортировка 4 вида =====================
  useEffect(() => {
    if (filter === "raitingUp") {
      setItemsSort((prev) =>
        [...prev].sort((a, b) => a.raiting-b.raiting)
      );
    } else if (filter === "raitingDown") {
      setItemsSort((prev) =>
        [...prev].sort((a, b) => b.raiting-a.raiting)
      );
    } else if (filter === "priceUp") {
      setItemsSort((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
        
      );
    }else if (filter === "priceDown") {
      setItemsSort((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
    else {
      setItemsSort((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  },[filter, itemsSort])


  //==================добавление в корзину ==========
  const onAddToCart = async (obj) => {
    try {
      //====получаем карточку у котрой совпали id
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        //===============удаляем если такой товар уже есть в корзине=======
        await axios.delete(`${base}/Cart/${findItem.id}`);
      } else {
        //=============отпраляем на сервер добавленный телефон=============
        const { data } = await axios.post(`${base}/Cart`, obj);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
    }
  };

  //===============добавляем в фавориты ========

  const onAddToFavorites = async (obj) => {
    try {
      setIsDownloadFavorit(false);
      const temp = {...obj};
      temp.fav = !temp.fav;
      await axios.put(`${base}/Items/${obj.id}`, temp);
      const itemsResponse = await axios.get(`${base}/Items`);
      setItems(itemsResponse.data);
      setItemsSort(itemsResponse.data);
      setIsDownloadFavorit(true);
    } catch (error) {
      alert("Не удалось добавить");
    }
  };

  //================удаление из корзины==========

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
  
//===============проверка есть ли в общем массиве телефон такой же как и в корзине по id======
  const isItemAdded = (id) => {   
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <Provider store={store}>
      <HashRouter>
        <AppContext.Provider
          value={{
            items,
            itemsSort,
            orders,
            filter,
            setFilter,
            setItems,
            setOrders,
            cartItems,
            favorites,
            setItemsSort,
            setFavorites,
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
            isDownloadFavorit,
            onChangeSearchInput,
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

            <Route path="/phonePage/:id" exact>
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
