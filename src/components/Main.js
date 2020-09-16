import React from 'react';
import api from '../utils/api';
console.log('api', api);

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  api.getUserInfo().then((data) => {
    setUserName(data.name);
    setUserDescription(data.about);
    setUserAvatar(data.avatar);
  });

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
            src={userAvatar}
            alt="Аватар пользователя"
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__user-name">{userName}</h1>
          <button
            className="button profile__user-edit-button"
            onClick={onEditProfile}
            type="button"
            aria-label="Редактировать информацию пользователя"
          ></button>
          <p className="profile__user-job">{userDescription}</p>
        </div>
        <button
          className="button profile__add-button"
          type="button"
          onClick={onAddPlace}
          aria-label="Добавить информацию"
        ></button>
      </section>
      <section className="places">
        <ul className="places__cards"></ul>
      </section>
    </main>
  );
}

export default Main;
