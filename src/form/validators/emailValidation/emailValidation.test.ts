import { emailValidation } from './emailValidation';

describe('emailValidation function', () => {
  it('validates email adres properly', () => {
    const validEmail = 'i@love.pizza';
    const invalidEmails: string[] = [
      'ilove.pizza',
      'pizza@love.i',
      'i$@love.pizza',
      'i@love$.pizza',
      'i@love.pizza&',
      'i@love.pi-zza',
    ];

    expect(validEmail.match(emailValidation().pattern.value)).toHaveLength(1);

    invalidEmails.forEach((email) => {
      expect(email.match(emailValidation().pattern.value)).toEqual(null);
    });
  });
});
