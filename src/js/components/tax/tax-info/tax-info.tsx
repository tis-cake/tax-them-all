import React from 'react';

const TaxInfo: React.FC = () => {
  return (
    <>
      <h1 className="tax__title">Налоговый вычет</h1>
      <p className="tax__desc">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.
      </p>
    </>
  );
};

export { TaxInfo };
