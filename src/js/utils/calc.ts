import { VAT_PER_PERCENT, TAX_DEDUCTION_MAX } from '../const';

const MONTHS: number = 12;

const getTaxDeductions = (salary: string): number[] => {
  const TAX_DEDUCTION: number = Number(salary) * MONTHS * VAT_PER_PERCENT;
  const TAX_DEDUCTION_REMAINDER: number = TAX_DEDUCTION_MAX % TAX_DEDUCTION;
  const TAX_DEDUCTION_PERIOD: number = Math.floor(TAX_DEDUCTION_MAX / TAX_DEDUCTION);

  const result = new Array(TAX_DEDUCTION_PERIOD).fill('').map(() => TAX_DEDUCTION);
  if (TAX_DEDUCTION_REMAINDER) {
    result.push(TAX_DEDUCTION_REMAINDER);
  }

  return result;
};

export { getTaxDeductions };
