import React from 'react';

const FormValidator = ({ isShow, validationMessage }) => {
  React.useEffect(() => {}, []);
  return (
    <span className={`popup__error ${isShow ? `popup__error_visible` : ''}`}>
      {' '}
      {validationMessage}{' '}
    </span>
  );
};

export default FormValidator;
