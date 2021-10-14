import React from 'react';

interface ITaxButtonSubmitProps {
  calculated: boolean,
  handleButtonSubmitClick(evt: React.FormEvent<HTMLButtonElement>): void,
}

const TaxButtonSubmit: React.FC<ITaxButtonSubmitProps> = ({ calculated, handleButtonSubmitClick }) => {
  return (
    <button
      className="tax__btn-submit ui-button ui-button--primary"
      type="submit"
      disabled={!calculated}
      onSubmit={handleButtonSubmitClick}
    >
      Добавить
    </button>
  );
};

export { TaxButtonSubmit };
