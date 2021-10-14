import { MIN_INPUT_VALUE } from '../const';

const getMatchedNum = (value: string): string => {
  const matches = value.match(/\d/g);
  return matches ? matches.join('') : '';
};

const validateInput = (value: string): boolean => {
  return (Number(value) >= MIN_INPUT_VALUE);
};

export { getMatchedNum, validateInput };
