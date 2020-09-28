import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const { name, about, avatar } = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardElements) => setCards(cardElements))
      .catch((err) => console.error(err));
  }, []);

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
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
