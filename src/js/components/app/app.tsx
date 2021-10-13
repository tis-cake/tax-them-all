import React, { useState } from 'react';

import { PageStart } from '../pages/page-start/page-start';
import { PageTax } from '../pages/page-tax/page-tax';

import { AppRoute } from '../../const';
import { PageContext } from '../../context';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(AppRoute.PAGE_DEFAULT);

  return (
    <PageContext.Provider value={{ setCurrentPage }}>
      <main>
        {(currentPage === AppRoute.PAGE_START) && <PageStart />}
        {(currentPage === AppRoute.PAGE_TAX) && <PageTax />}
      </main>
    </PageContext.Provider>
  );
};

export { App };
