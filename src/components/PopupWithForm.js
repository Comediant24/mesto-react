import React from 'react';

function PopupWithForm({ name, title, children, isOpen, onClose }) {
  return (
    <>
      <section
        className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}
      >
        <div
          onClick={onClose}
          className={`popup__overlay poup__overlay_${name}`}
        ></div>
        <form
          className={`popup__form popup__form_${name}`}
          name={name}
          action="#"
          noValidate
        >
          <h3 className="popup__title">{title}</h3>
          <fieldset className="popup__input-container">{children}</fieldset>
          <button
            className="button popup__submit-button popup__button-profile"
            type="submit"
          >
            Сохранить
          </button>
          <button
            className={`button popup__close-button popup__close-button_${name}`}
            onClick={onClose}
            type="button"
            aria-label="Закрыть окно"
          ></button>
        </form>
      </section>
    </>
  );
}

export default PopupWithForm;
