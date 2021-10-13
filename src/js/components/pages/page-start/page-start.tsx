import React from 'react';

import { ButtonStart } from '../../share/button-start/button-start';

const PageStart: React.FC = () => {
  return (
    <section className="page-start">
      <h1 className="visually-hidden">Стартовая страница</h1>

      <ButtonStart parentClass="page-start__link" />
    </section>
  );
};

export { PageStart };
