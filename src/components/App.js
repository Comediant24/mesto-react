import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import '../index.css';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      card: card,
    });
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <body className="root">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="avatar-change"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            class="popup__input popup__input_type_place-image"
            name="avatar-link"
            type="url"
            placeholder="Ссылка на картинку"
            required
            autocomplete="off"
          />
          <span class="popup__error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            class="popup__input popup__input_type_profile-name"
            name="user-name"
            type="text"
            placeholder="Ваше имя"
            required
            minlength="2"
            maxlength="40"
            autocomplete="off"
          />
          <span class="popup__error"></span>
          <input
            class="popup__input popup__input_type_profile-status"
            name="user-job"
            type="text"
            placeholder="Профессия"
            required
            minlength="2"
            maxlength="200"
            autocomplete="off"
          />
          <span class="popup__error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="add-places"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            class="popup__input popup__input_type_places-name"
            name="places-name"
            type="text"
            placeholder="Название"
            required
            minlength="1"
            maxlength="30"
            autocomplete="off"
          />
          <span class="popup__error"></span>
          <input
            class="popup__input popup__input_type_place-image"
            name="places-image"
            type="url"
            placeholder="Ссылка на картинку"
            required
            autocomplete="off"
          />
          <span class="popup__error"></span>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </body>
  );
}

export default App;
