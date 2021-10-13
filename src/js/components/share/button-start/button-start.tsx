import React, { useContext } from 'react';

import { AppRoute } from '../../../const';
import { PageContext } from '../../../context';

interface IButtonStartProps {
  parentClass?: string,
}

const ButtonStart: React.FC<IButtonStartProps> = ({ parentClass }) => {
  const { setCurrentPage } = useContext(PageContext);

  return (
    <button
      className={`${parentClass} button-start ui-button ui-button--secondary`}
      type="button"
      onClick={() => setCurrentPage(AppRoute.PAGE_TAX)}
    >
      Налоговый вычет
    </button>
  );
};

export { ButtonStart };

