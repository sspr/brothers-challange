import { maxValueValidation } from './maxValueValidation';

describe('maxValueValidation function', () => {
  it('validates inputs max value properly', () => {
    const testedValue = 100;

    expect(maxValueValidation(110).max.value >= testedValue).toEqual(true);
    expect(maxValueValidation(90).max.value >= testedValue).toEqual(false);
  });
});
