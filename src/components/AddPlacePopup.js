import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const inputTitle = React.createRef();
  const inputImage = React.createRef();

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: inputTitle.current.value,
      link: inputImage.current.value,
    });
  }

  return (
    <PopupWithForm
      name="add-places"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={inputTitle}
        className="popup__input popup__input_type_places-name"
        name="places-name"
        type="text"
        placeholder="Название"
        required
        minLength="1"
        maxLength="30"
        autoComplete="off"
      />
      <span className="popup__error"></span>
      <input
        ref={inputImage}
        className="popup__input popup__input_type_place-image"
        name="places-image"
        type="url"
        placeholder="Ссылка на картинку"
        required
        autoComplete="off"
      />
      <span className="popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
