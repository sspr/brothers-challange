import { Disciplines } from 'api/types';
import { Converter } from './Converter.enum';

export const calcPoints = (value: number, discipline: string): number => {
  const converter = Object.keys(Converter).includes(discipline)
    ? Converter[discipline as Disciplines]
    : Converter['default'];

  return Math.round(value * converter);
};
