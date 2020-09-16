import React from 'react';

function ImagePopup() {
  return (
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
  );
}

export default ImagePopup;
