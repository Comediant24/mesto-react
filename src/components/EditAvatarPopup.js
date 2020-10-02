import React from 'react';
import Input from './Input';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [avatarLink, setAvatarLink] = React.useState('');

  const [avatarValid, setAvatarValid] = React.useState(false);

  const [isEnabled, setIsEnabled] = React.useState(false);

  function handleAvatarChange(value, valid) {
    setAvatarLink(value);
    setAvatarValid(valid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarLink,
    });
  }

  React.useEffect(() => {
    setIsEnabled(avatarValid);
  }, [avatarValid]);

  return (
    <PopupWithForm
      name="avatar-change"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isEnabled={isEnabled}
    >
      <Input
        value={avatarLink}
        changeValue={handleAvatarChange}
        className="popup__input_type_place-image"
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
