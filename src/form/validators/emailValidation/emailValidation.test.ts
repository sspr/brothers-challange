import { emailValidation } from './emailValidation';

describe('emailValidation function', () => {
  it('validates email adres properly', () => {
    const validEmail = 'i@love.pizza';
    const invalidEmails: string[] = [
      'ilove@pizzapizzapizzapizzapizzapizzapizzapizza',
      'ilove.pizza',
      'pizza@love.i',
      'i$@love.pizza',
      'i@love$.pizza',
      'i@love.pizza&',
      'i@love.pi-zza',
    ];

    expect(validEmail.match(emailValidation(30).pattern.value)).toHaveLength(1);
    expect(invalidEmails[0].length > emailValidation(30).maxLength.value).toEqual(true);

    invalidEmails.forEach((email) => {
      expect(email.match(emailValidation(30).pattern.value)).toEqual(null);
    });
  });
});
