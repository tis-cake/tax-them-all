const AppRoute = {
  PAGE_DEFAULT: 'PAGE_START',
  PAGE_START: 'PAGE_START',
  PAGE_TAX: 'PAGE_TAX',
};

const TaxRoute = {
  CATEGORY_PAYMENT: 'CATEGORY_PAYMENT',
  CATEGORY_TERM: 'CATEGORY_TERM',
};

const MIN_INPUT_VALUE: number = 10000;
const VAT_PER_PERCENT: number = 0.13;
const TAX_DEDUCTION_MAX: number = 260000;

const INVALID_MESSAGE_PATTERN_MIN: string = `Минимальное допустимое значение: ${MIN_INPUT_VALUE}`;

export {
  AppRoute,
  TaxRoute,

  MIN_INPUT_VALUE,
  VAT_PER_PERCENT,
  TAX_DEDUCTION_MAX,
  INVALID_MESSAGE_PATTERN_MIN,
};
