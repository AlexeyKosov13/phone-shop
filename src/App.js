import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper">
      <Drawer />

      <Header />

      <div className="content">
        <div className="content__header">
          <h1>Все кроссовки</h1>
          <div className="content__search">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>

        </div>

        <div className="products">
          
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

          


        </div>

        


      </div>
    </div>
  );
}

export default App;
