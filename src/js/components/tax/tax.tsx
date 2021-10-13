import React from 'react';

import { ButtonClose } from '../share/button-close/button-close';

const Tax: React.FC = () => {
  return (
    <section className="page-tax__tax tax">
      <ButtonClose parentClass='tax__btn-close' />

      <h1 className="tax__title">Налоговый вычет</h1>
      <p className="tax__desc">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.
      </p>

      <form
        className="tax__form"
        action="#"
        method="post"
      >
        <label
          className="tax__input-tel-label ui-label"
          htmlFor="field-tel"
        >
          Ваша зарплата в месяц
        </label>
        <input
          className="tax__input-tel ui-input"
          type="number"
          id="field-tel"
          step="100"
          required
          placeholder="Введите данные"
          // checked={checked}
          // onChange={() => setChecked(!checked)}
        />

        <button
          className="tax__btn-calc"
        >
          Рассчитать
        </button>

        <div className="tax__detail-wrap">
          <p className="tax__detail-list-title ui-label">
            Итого можете внести <span>в качестве досрочных:</span>
          </p>
          <ul className="tax__detail-list">
            <li className="tax__detail-item">
              <input
                className="visually-hidden tax__checkbox ui-checkbox"
                id="field-checkbox-1"
                type="checkbox"
                name="checkbox"
                checked={true}
              />
              <label
                className="tax__checkbox-label ui-checkbox-label"
                htmlFor="field-checkbox-1"
              >
                78 000 рублей <span>в 1-ый год</span>
              </label>
            </li>
            <li className="tax__detail-item">
              <input
                className="visually-hidden tax__checkbox ui-checkbox"
                id="field-checkbox-2"
                type="checkbox"
                name="checkbox"
                // checked={true}
              />
              <label
                className="tax__checkbox-label ui-checkbox-label"
                htmlFor="field-checkbox-2"
              >
                78 000 рублей <span>во 2-ой год</span>
              </label>
            </li>
            <li className="tax__detail-item">
              <input
                className="visually-hidden tax__checkbox ui-checkbox"
                id="field-checkbox-3"
                type="checkbox"
                name="checkbox"
                // checked={true}
              />
              <label
                className="tax__checkbox-label ui-checkbox-label"
                htmlFor="field-checkbox-3"
              >
                78 000 рублей <span>во 2-ой год</span>
              </label>
            </li>
            <li className="tax__detail-item">
              <input
                className="visually-hidden tax__checkbox ui-checkbox"
                id="field-checkbox-4"
                type="checkbox"
                name="checkbox"
                disabled
                // checked={true}
              />
              <label
                className="tax__checkbox-label ui-checkbox-label"
                htmlFor="field-checkbox-4"
              >
                78 000 рублей <span>во 2-ой год</span>
              </label>
            </li>
          </ul>
        </div>

        <div className="tax__tag-wrap">
          <p className="tax__tag-list-title ui-label">Что уменьшаем?</p>
          <ul className="tax__tag-list">
            <li className="tax__tag-item">
              <input
                className="visually-hidden tax__tag ui-tag"
                id="field-tag-1"
                type="radio"
                name="tag"
                checked={true}
              />
              <label
                className="tax__tag-label ui-tag-label"
                htmlFor="field-tag-1"
              >
                Платеж
              </label>
            </li>
            <li className="tax__tag-item">
              <input
                className="visually-hidden tax__tag ui-tag"
                id="field-tag-2"
                type="radio"
                name="tag"
                // checked={false}
              />
              <label
                className="tax__tag-label ui-tag-label"
                htmlFor="field-tag-2"
              >
                Срок
              </label>
            </li>
          </ul>
        </div>

        <button
          className="tax__btn-submit ui-button ui-button--primary"
          type="submit"
        >
          Добавить
        </button>
      </form>

    </section>
  );
};

export { Tax };
