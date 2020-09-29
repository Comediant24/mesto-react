import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  function handleInputChange(e) {
    const value = e.target.value;
    e.target.name === 'user-name' ? setName(value) : setDescription(value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_profile-name"
        name="user-name"
        type="text"
        placeholder="Ваше имя"
        required
        minLength="2"
        maxLength="40"
        autoComplete="off"
        onChange={handleInputChange}
        value={name}
      />
      <span className="popup__error"></span>
      <input
        className="popup__input popup__input_type_profile-status"
        name="user-job"
        type="text"
        placeholder="Профессия"
        required
        minLength="2"
        maxLength="200"
        autoComplete="off"
        onChange={handleInputChange}
        value={description}
      />
      <span className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
