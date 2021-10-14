import React, { useState, useRef, useContext, useEffect } from 'react';

import { TaxInfo } from './tax-info/tax-info';
import { TaxInput } from './tax-input/tax-input';
import { TaxCategory } from './tax-category/tax-category';
import { TaxButtonCalc } from './tax-button-calc/tax-button-calc';
import { TaxDetailTerm } from './tax-detail-term/tax-detail-term';
import { TaxDetailPayment } from './tax-detail-payment/tax-detail-payment';
import { TaxButtonSubmit } from './tax-button-submit/tax-button-submit';
import { ButtonClose } from '../share/button-close/button-close';

import { AppRoute, TaxRoute } from '../../const';
import { PageContext } from '../../context';

interface ITaxProps {
  overlayRef: React.MutableRefObject<HTMLDivElement>
}

const KEY_ESC: string = 'Escape';
const KEY_ENTER: string = 'Enter';

const Tax: React.FC<ITaxProps> = ({ overlayRef }) => {
  const [salary, setSalary] = useState('');
  const [category, setCategory] = useState(TaxRoute.CATEGORY_PAYMENT);
  const [calculated, setCalculated] = useState(false);
  const [validated, setValidated] = useState(false);

  const { setCurrentPage } = useContext(PageContext);
  const salaryRef = useRef<HTMLInputElement>(null);
  const calcRef = useRef<HTMLButtonElement>(null);

  const isCategoryPayment = category === TaxRoute.CATEGORY_PAYMENT;
  const isCategoryTerm = category === TaxRoute.CATEGORY_TERM;

  const handleInputSalaryChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setCalculated(false);
    setSalary(evt.currentTarget.value);
    setValidated(salaryRef.current.validity.valid);
  };

  // Enter по заполненному инпуту вызовет подсчёт и вывод данных
  // без необходимости наводить мышку и кликать по кнопке "Рассчитать"
  const handleInputSalaryEnterKeyPress = (evt: React.KeyboardEvent<HTMLInputElement>): void => {
    if (evt.key === KEY_ENTER) {
      evt.preventDefault();
      calcRef.current.click();
    }
  };

  const handleButtonCalcClick = (): void => {
    setCalculated(true);
  };

  const handleButtonSubmitClick = (evt: React.FormEvent<HTMLButtonElement>): void => {
    evt.preventDefault();
    closeModal();
  };

  // ESC -> закрыть окно
  const handleEscKeyPress = (evt: KeyboardEvent): void => {
    if (evt.key === KEY_ESC) {
      closeModal();
    }
  };

  // overlay click -> закрыть окно
  const handleTaxFormOutsideClick = (evt: MouseEvent): void => {
    if (evt.target === overlayRef.current) {
      closeModal();
    }
  };

  // закрыть окно
  function closeModal(): void {
    setCurrentPage(AppRoute.PAGE_DEFAULT);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEscKeyPress);
    window.addEventListener('click', handleTaxFormOutsideClick);
    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
      window.removeEventListener('click', handleTaxFormOutsideClick);
    };
  }, []);

  return (
    <section className="page-tax__tax tax">
      <ButtonClose parentClass="tax__btn-close" />

      <TaxInfo />

      <form className="tax__form">
        <TaxInput
          salary={salary}
          salaryRef={salaryRef}
          handleInputSalaryChange={handleInputSalaryChange}
          handleInputSalaryEnterKeyPress={handleInputSalaryEnterKeyPress}
        />

        <TaxButtonCalc
          calcRef={calcRef}
          validated={validated}
          handleButtonCalcClick={handleButtonCalcClick}
        />

        {isCategoryPayment && calculated && <TaxDetailPayment salary={salary} />}

        {isCategoryTerm && calculated && <TaxDetailTerm />}

        <TaxCategory
          category={category}
          setCategory={setCategory}
        />

        <TaxButtonSubmit
          calculated={calculated}
          handleButtonSubmitClick={handleButtonSubmitClick}
        />
      </form>
    </section>
  );
};

export { Tax };
