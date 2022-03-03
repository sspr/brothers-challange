import { minValueValidation } from './minValueValidation';

describe('minValueValidation function', () => {
  it('validates inputs min value properly', () => {
    const testedValue = 0;

    expect(minValueValidation(0).min.value <= testedValue).toEqual(true);
    expect(minValueValidation(1).min.value <= testedValue).toEqual(false);
  });
});
