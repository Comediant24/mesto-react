import React from 'react';
import PopupInput from './PopupInput';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [titlePlace, setTitlePlace] = React.useState('');
  const [imagePlace, setImagePlace] = React.useState('');

  const [titleValid, setTitleValid] = React.useState(false);
  const [imageValid, setImageValid] = React.useState(false);

  const [isEnabled, setIsEnabled] = React.useState(false);

  function handleTitleChange(value, valid) {
    setTitlePlace(value);
    setTitleValid(valid);
  }

  function handleImageChange(value, valid) {
    setImagePlace(value);
    setImageValid(valid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: titlePlace,
      link: imagePlace,
    });
  }

  React.useEffect(() => {
    Array.from([titleValid, imageValid]).every((e) => e === true) === true
      ? setIsEnabled(true)
      : setIsEnabled(false);
  }, [titleValid, imageValid]);

  React.useEffect(() => {
    setTitlePlace('');
    setImagePlace('');
    setTitleValid(false);
    setImageValid(false);
    setIsEnabled(false);
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add-places"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isEnabled={isEnabled}
    >
      <PopupInput
        isOpen={isOpen}
        value={titlePlace}
        changeValue={handleTitleChange}
        className="popup__input_type_places-name"
        name="places-name"
        type="text"
        placeholder="Название"
        required
        minLength="1"
        maxLength="30"
        autoComplete="off"
      />
      <PopupInput
        isOpen={isOpen}
        value={imagePlace}
        changeValue={handleImageChange}
        className="popup__input_type_place-image"
        name="places-image"
        type="url"
        placeholder="Ссылка на картинку"
        required
        autoComplete="off"
      />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
