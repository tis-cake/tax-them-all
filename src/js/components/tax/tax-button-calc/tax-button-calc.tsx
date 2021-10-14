import React from 'react';

interface ITaxButtonCalcProps {
  validated: boolean,
  calcRef: React.MutableRefObject<HTMLButtonElement>,
  handleButtonCalcClick(): void,
}

const TaxButtonCalc: React.FC<ITaxButtonCalcProps> = ({ validated, calcRef, handleButtonCalcClick }) => {
  return (
    <button
      className="tax__btn-calc"
      type="button"
      disabled={!validated}
      onClick={handleButtonCalcClick}
      ref={calcRef}
    >
      Рассчитать
    </button>
  );
};

export { TaxButtonCalc };
