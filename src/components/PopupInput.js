import React from 'react';
import FormValidator from './FormValidator';

const PopupInput = ({
  isOpen,
  changeValue,
  className,
  name,
  value,
  ...rest
}) => {
  const [isValid, setIsValid] = React.useState(true);
  const [showValidationMessage, setShowValidationMessage] = React.useState('');

  function handleInputChange(e) {
    changeValue(e.target.value, e.target.validity.valid);
    validationMessageShow(e);
  }

  function validationMessageShow(e) {
    setIsValid(!e.target.validity.valid);
    setShowValidationMessage(e.target.validationMessage);
  }

  React.useEffect(() => {
    setIsValid(false);
  }, [isOpen]);

  return (
    <>
      <input
        {...rest}
        className={`popup__input ${className}`}
        name={name}
        onChange={handleInputChange}
        value={value || ''}
      />
      <FormValidator
        isShow={isValid}
        validationMessage={showValidationMessage}
      />
    </>
  );
};

export default PopupInput;
