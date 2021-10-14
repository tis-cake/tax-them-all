import React from 'react';
import { nanoid } from 'nanoid';

import { getTaxDeductions } from '../../../utils/calc';

interface ITaxDetailPaymentProps {
  salary: string,
}

const MAX_EL_PER_OVERFLOW = 4;

const TaxDetailPayment: React.FC<ITaxDetailPaymentProps> = ({ salary }) => {
  const taxDeductions = getTaxDeductions(salary);
  const listOverflowClass = (taxDeductions.length > MAX_EL_PER_OVERFLOW)
    ? 'tax__detail-list--overflow'
    : '';

  return (
    <div className="tax__detail-wrap">
      <p className="tax__detail-list-title ui-label">
        Итого можете внести <span>в качестве досрочных:</span>
      </p>

      <ul className={`tax__detail-list ${listOverflowClass}`}>
        {taxDeductions.map((el, index) => {
          return (
            <li className="tax__detail-item" key={nanoid()}>
              <input
                className="visually-hidden tax__checkbox ui-checkbox"
                id={`field-checkbox-${index}`}
                type="checkbox"
                name="checkbox"
              />
              <label
                className="tax__checkbox-label ui-checkbox-label"
                htmlFor={`field-checkbox-${index}`}
              >
                {el} рублей <span>в {++index}-ый год</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { TaxDetailPayment };
