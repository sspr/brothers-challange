import { requiredValidation } from './requiredValidation';

describe('requiredValidation function', () => {
  it('validates input properly', () => {
    expect(requiredValidation().required.value).toEqual(true);
  });
});
