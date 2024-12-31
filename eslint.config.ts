import { sheriff, type SheriffSettings } from 'eslint-config-sheriff';
import { defineFlatConfig } from 'eslint-define-config';

const sheriffOptions: SheriffSettings = {
  react: true,
  lodash: false,
  remeda: false,
  next: false,
  astro: true,
  playwright: true,
  jest: false,
  vitest: true,
};

export default defineFlatConfig([...sheriff(sheriffOptions)]);
