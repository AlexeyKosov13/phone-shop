


function Card() {
    return (
        <div className="card">
          <div className="favorite">
            <img src="/img/heart__unliked.svg" alt="favorite" />
          </div>
            <img src="/img/sneakers/1.jpg" alt="sneakers" width={133} height={112} />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__info">
              <div className="card__price">
                <span>Цена:</span>
                <p>12999 руб.</p>
              </div>
              <button className="button"><img src="/img/plus.svg" alt="plus" width={32} height={15} /></button>
            </div>
          </div>
    )
}

export default Card;