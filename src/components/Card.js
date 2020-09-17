import React from 'react';

function Card({ card }) {
  return (
    <li className="places__items">
      <img
        src={card.link}
        alt={`Лучшая фотография ${card.name}`}
        className="places__image"
      />
      <div className="places__name">
        <h2 className="places__title">{card.name}</h2>
        <div className="places__like">
          <button
            className="button places__button-like"
            type="button"
            aria-label="Поставить лайк месту"
          ></button>
          <p className="places__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button
        className="button places__button-delete"
        type="button"
        aria-label="Удалить карточку"
      ></button>
    </li>
  );
}

export default Card;
