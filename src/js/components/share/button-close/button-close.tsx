import React, { useContext } from 'react';

import { AppRoute } from '../../../const';
import { PageContext } from '../../../context';

interface IButtonCloseProps {
  parentClass?: string,
}

const ButtonClose: React.FC<IButtonCloseProps> = ({ parentClass }) => {
  const { setCurrentPage } = useContext(PageContext);

  return (
    <button
      className={`${parentClass} button-close`}
      type="button"
      onClick={() => setCurrentPage(AppRoute.PAGE_DEFAULT)}
    >
      <p className="visually-hidden">
        Вернуться к начальной странице.
      </p>
    </button>
  );
};

export { ButtonClose };
