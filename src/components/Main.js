import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const { name, about, avatar, _id } = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardElements) => setCards(cardElements))
      .catch((err) => console.error(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === _id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }

  function handleCardDelete(card) {
    api.removeCard(card._id).then(() => {
      const newCards = cards.filter((c) => c !== card);
      setCards(newCards);
    });
  }

  return (
    <main className="content">
      <section className="profile">
        <button
          type="button"
          onClick={onEditAvatar}
          className="button button_non-opacity profile__button-avatar"
        >
          <img
            className="profile__avatar"
            src={avatar}
            alt="Аватар пользователя"
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__user-name">{name}</h1>
          <button
            className="button profile__user-edit-button"
            onClick={onEditProfile}
            type="button"
            aria-label="Редактировать информацию пользователя"
          ></button>
          <p className="profile__user-job">{about}</p>
        </div>
        <button
          className="button profile__add-button"
          type="button"
          onClick={onAddPlace}
          aria-label="Добавить информацию"
        ></button>
      </section>
      <section className="places">
        <ul className="places__cards">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
