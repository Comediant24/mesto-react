import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputAvatar = React.createRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputAvatar.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar-change"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={inputAvatar}
        className="popup__input popup__input_type_place-image"
        name="avatar-link"
        type="url"
        placeholder="Ссылка на картинку"
        required
        autoComplete="off"
      />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
