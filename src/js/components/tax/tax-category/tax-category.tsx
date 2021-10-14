import React from 'react';

import { TaxRoute } from '../../../const';

interface ITaxCategoryProps {
  category: string,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
}

const TaxCategory: React.FC<ITaxCategoryProps> = ({ category, setCategory }) => {
  return (
    <div className="tax__category-wrap">
      <p className="tax__category-list-title ui-label">Что уменьшаем?</p>
      <ul className="tax__category-list">
        <li className="tax__category-item">
          <input
            className="visually-hidden tax__category ui-tag"
            id="field-category-1"
            type="radio"
            name="category"
            checked={category === TaxRoute.CATEGORY_PAYMENT}
            onChange={() => setCategory(TaxRoute.CATEGORY_PAYMENT)}
          />
          <label
            className="tax__category-label ui-tag-label"
            htmlFor="field-category-1"
          >
            Платеж
          </label>
        </li>
        <li className="tax__category-item">
          <input
            className="visually-hidden tax__category ui-tag"
            id="field-category-2"
            type="radio"
            name="category"
            checked={category === TaxRoute.CATEGORY_TERM}
            onChange={() => setCategory(TaxRoute.CATEGORY_TERM)}
          />
          <label
            className="tax__category-label ui-tag-label"
            htmlFor="field-category-2"
          >
            Срок
          </label>
        </li>
      </ul>
    </div>
  );
};

export { TaxCategory };
