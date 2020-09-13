import React from 'react';
import Header from './Header';
import '../index.css';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <body className="root">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <section className="popup popup_edit-profile">
          <div className="popup__overlay popup__overlay_edit-profile"></div>
          <form
            className="popup__form popup__form_edit-profile"
            name="user-info"
            action="#"
            method="POST"
            novalidate
          >
            <h3 className="popup__title">Редактировать профиль</h3>
            <fieldset className="popup__input-container">
              <input
                className="popup__input popup__input_type_profile-name"
                name="user-name"
                type="text"
                placeholder="Ваше имя"
                required
                minlength="2"
                maxlength="40"
                autocomplete="off"
              />
              <span className="popup__error"></span>
              <input
                className="popup__input popup__input_type_profile-status"
                name="user-job"
                type="text"
                placeholder="Профессия"
                required
                minlength="2"
                maxlength="200"
                autocomplete="off"
              />
              <span className="popup__error"></span>
            </fieldset>
            <button
              className="button popup__submit-button popup__button-profile"
              type="submit"
            >
              Сохранить
            </button>
            <button
              className="button popup__close-button popup__close-button_edit-profile"
              type="button"
              aria-label="Закрыть окно"
            ></button>
          </form>
        </section>

        <section className="popup popup_add-places">
          <div className="popup__overlay popup__overlay_add-places"></div>
          <form
            className="popup__form popup__form_add-places"
            name="places-add"
            action="#"
            method="POST"
            novalidate
          >
            <h3 className="popup__title">Новое место</h3>
            <fieldset className="popup__input-container">
              <input
                className="popup__input popup__input_type_places-name"
                name="places-name"
                type="text"
                placeholder="Название"
                required
                minlength="1"
                maxlength="30"
                autocomplete="off"
              />
              <span className="popup__error"></span>
              <input
                className="popup__input popup__input_type_place-image"
                name="places-image"
                type="url"
                placeholder="Ссылка на картинку"
                required
                autocomplete="off"
              />
              <span className="popup__error"></span>
            </fieldset>
            <button
              className="button popup__submit-button popup__button-places popup__submit-button_disabled"
              type="submit"
              disabled
            >
              Создать
            </button>
            <button
              className="button popup__close-button popup__close-button__add-places"
              type="button"
              aria-label="Закрыть окно"
            ></button>
          </form>
        </section>

        <section className="popup popup_image-places">
          <div className="popup__overlay popup__overlay_image-places"></div>
          <figure className="popup__places">
            <img src="#" alt="#" className="popup__places-image" />
            <figcaption className="popup__places-title"></figcaption>
            <button
              className="button popup__close-button popup__close-button_image-places"
              type="button"
              aria-label="Закрыть окно"
            ></button>
          </figure>
        </section>

        <section className="popup popup_delete-place">
          <div className="popup__overlay popup__overlay_delete"></div>
          <form
            className="popup__form popup__form_delete-place"
            name="delete-place"
            action="#"
          >
            <h3 className="popup__title">Вы уверены?</h3>
            <button
              className="button popup__submit-button popup__delete-button"
              type="submit"
            >
              Да
            </button>
            <button
              className="button popup__close-button popup__close-button_edit-profile"
              type="submit"
              aria-label="Закрыть окно"
            ></button>
          </form>
        </section>

        <section className="popup popup_avatar-change">
          <div className="popup__overlay popup__overlay_avatar-change"></div>
          <form
            className="popup__form popup__form_avatar-change"
            name="avatar-change"
            action="#"
            method="POST"
            novalidate
          >
            <h3 className="popup__title">Обновить аватар</h3>
            <fieldset className="popup__input-container">
              <input
                className="popup__input popup__input_type_place-image"
                name="avatar-link"
                type="url"
                placeholder="Ссылка на картинку"
                required
                autocomplete="off"
              />
              <span className="popup__error"></span>
            </fieldset>
            <button
              className="button popup__submit-button popup__button-avatar popup__submit-button_disabled"
              type="submit"
              disabled
            >
              Сохранить
            </button>
            <button
              className="button popup__close-button popup__close-button__add-places"
              type="button"
              aria-label="Закрыть окно"
            ></button>
          </form>
        </section>

        <template id="places-template">
          <li className="places__items">
            <img src="#" alt="#" className="places__image" />
            <div className="places__name">
              <h2 className="places__title"></h2>
              <div className="places__like">
                <button
                  className="button places__button-like"
                  type="button"
                  aria-label="Поставить лайк месту"
                ></button>
                <p className="places__like-counter"></p>
              </div>
            </div>
            <button
              className="button places__button-delete"
              type="button"
              aria-label="Удалить карточку"
            ></button>
          </li>
        </template>
      </div>
    </body>
  );
}

export default App;
