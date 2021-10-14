import React from 'react';

interface ITaxInputProps {
  salary: string,
  salaryRef: React.MutableRefObject<HTMLInputElement>,
  handleInputSalaryChange(evt: React.ChangeEvent<HTMLInputElement>): void,
  handleInputSalaryEnterKeyPress(evt: React.KeyboardEvent<HTMLInputElement>): void,
}

const TaxInput: React.FC<ITaxInputProps> = (props) => {
  const {
    salary,
    salaryRef,
    handleInputSalaryChange,
    handleInputSalaryEnterKeyPress,
  } = props;

  return (
    <>
      <label
        className="tax__input-salary-label ui-label"
        htmlFor="field-salary"
      >
        Ваша зарплата в месяц
      </label>
      <input
        className="tax__input-salary ui-input"
        type="number"
        id="field-salary"
        step="100"
        min="10000"
        required
        placeholder="Введите данные"
        ref={salaryRef}
        value={salary}
        onChange={handleInputSalaryChange}
        onKeyDown={handleInputSalaryEnterKeyPress}
      />
    </>
  );
};

export { TaxInput };
