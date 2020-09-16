import React from 'react';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <main className="content">
      <section className="profile">
        <button
          type="button"
          onClick={onEditAvatar}
          className="button button_non-opacity profile__button-avatar"
        >
          <img className="profile__avatar" src="#" alt="Аватар пользователя" />
        </button>
        <div className="profile__info">
          <h1 className="profile__user-name"></h1>
          <button
            className="button profile__user-edit-button"
            onClick={onEditProfile}
            type="button"
            aria-label="Редактировать информацию пользователя"
          ></button>
          <p className="profile__user-job"></p>
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