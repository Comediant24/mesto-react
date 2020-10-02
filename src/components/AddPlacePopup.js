import React from 'react';
import Input from './Input';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [titlePlace, setTitlePlace] = React.useState('');
  const [imagePlace, setImagePlace] = React.useState('');

  const [titleValid, setTitleValid] = React.useState(true);
  const [imageValid, setImageValid] = React.useState(true);

  const [isEnabled, setIsEnabled] = React.useState(true);

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

  return (
    <PopupWithForm
      name="add-places"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isEnabled={isEnabled}
    >
      <Input
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
      <Input
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
