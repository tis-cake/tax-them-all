const EndNouns = {
  0: '-ый',
  1: '-ый',
  2: '-ой',
  3: '-ий',
  4: '-ый',
  5: '-ый',
  6: '-ой',
  7: '-ой',
  8: '-ой',
  9: '-ый',
};

const formatNumSpaces = (num: number): string => {
  return new Intl.NumberFormat('ru-RU').format(num);
};

const formatEndNouns = (num: number): string => {
  const currentNum: number = (num >= 100)
    ? num % 100
    : num;

  if (currentNum >= 12 && currentNum <= 18) {
    return '-ый';
  }

  if (currentNum === 40) {
    return '-ой';
  }

  return EndNouns[currentNum % 10];
};

const formatYearDesc = (num: number): string => {
  const PER_YEAR: string = (num === 2) ? 'во' : 'в';
  return `${PER_YEAR} ${num}${formatEndNouns(num)} год`;
};

export { formatNumSpaces, formatYearDesc };
