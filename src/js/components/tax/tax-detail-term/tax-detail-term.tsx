import React from 'react';

const TaxDetailTerm: React.FC = () => {
  return (
    <div className="tax__detail-wrap">
      <p className="tax__detail-list-title ui-label">
        Итого можете уменьшить <span>в качестве lorem-dolorem:</span>
      </p>

      <ul className="tax__detail-list">
        <li className="tax__detail-item">
          <input
            className="visually-hidden tax__checkbox ui-checkbox"
            id="field-checkbox-1"
            type="checkbox"
            name="checkbox"
          />
          <label
            className="tax__checkbox-label ui-checkbox-label"
            htmlFor="field-checkbox-1"
          >
            1 год <span>за 10 рублей</span>
          </label>
        </li>
        <li className="tax__detail-item">
          <input
            className="visually-hidden tax__checkbox ui-checkbox"
            id="field-checkbox-2"
            type="checkbox"
            name="checkbox"
          />
          <label
            className="tax__checkbox-label ui-checkbox-label"
            htmlFor="field-checkbox-2"
          >
            2 год <span>за 500 рублей</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export { TaxDetailTerm };
