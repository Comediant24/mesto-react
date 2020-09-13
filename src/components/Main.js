import React from 'react';

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <button className="button button_non-opacity profile__button-avatar">
          <img className="profile__avatar" src="#" alt="Аватар пользователя" />
        </button>
        <div className="profile__info">
          <h1 className="profile__user-name"></h1>
          <button
            className="button profile__user-edit-button"
            type="button"
            aria-label="Редактировать информацию пользователя"
          ></button>
          <p className="profile__user-job"></p>
        </div>
        <button
          className="button profile__add-button"
          type="button"
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
