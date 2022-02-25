import { maxLengthValidation } from './maxLengthValidation';

describe('maxLengthValidation function', () => {
  it('validates inputs length properly', () => {
    const validInput = 'i@love.pizza';
    const invalidInput = 'thisinputcontentistoolonggggggggggggggggggggggggggggg';

    expect(maxLengthValidation(30).maxLength.value > validInput.length).toEqual(true);
    expect(maxLengthValidation(30).maxLength.value > invalidInput.length).toEqual(false);
  });
});
