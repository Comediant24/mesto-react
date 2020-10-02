import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupInput from './PopupInput';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const [nameValid, setNameValid] = React.useState(true);
  const [descriptionValid, setDescriptionValid] = React.useState(true);

  const [isEnabled, setIsEnabled] = React.useState(true);

  function handleNameChange(value, valid) {
    setName(value);
    setNameValid(valid);
  }

  function handleDescriptionChange(value, valid) {
    setDescription(value);
    setDescriptionValid(valid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    Array.from([nameValid, descriptionValid]).every((e) => e === true) === true
      ? setIsEnabled(true)
      : setIsEnabled(false);
  }, [nameValid, descriptionValid]);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  React.useEffect(() => {
    setNameValid(true);
    setDescriptionValid(true);
    setIsEnabled(true);
  }, [isOpen]);

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isEnabled={isEnabled}
    >
      <PopupInput
        isEnabled={isEnabled}
        isOpen={isOpen}
        value={name}
        changeValue={handleNameChange}
        className="popup__input_type_profile-name"
        name="user-name"
        type="text"
        placeholder="Ваше имя"
        required
        minLength="2"
        maxLength="40"
        autoComplete="off"
      />
      <PopupInput
        value={description}
        isOpen={isOpen}
        changeValue={handleDescriptionChange}
        className="popup__input_type_profile-status"
        name="user-job"
        type="text"
        placeholder="Профессия"
        required
        minLength="2"
        maxLength="200"
        autoComplete="off"
      />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
