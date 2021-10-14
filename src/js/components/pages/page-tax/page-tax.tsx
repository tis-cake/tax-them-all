import React, { useRef } from 'react';

import { Tax } from '../../tax/tax';

const PageTax: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <div className="page-tax" ref={overlayRef}>
      <Tax overlayRef={overlayRef} />
    </div>
  );
};

export { PageTax };
