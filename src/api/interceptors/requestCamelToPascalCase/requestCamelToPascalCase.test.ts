import { requestCamelToPascalCase } from './requestCamelToPascalCase';

describe('requestCamelToPascalCase interceptor', () => {
  it('changes object values notation from camel pascal case', () => {
    const obj = {
      name1: 'camelCase',
      name2: {
        name3: 'camelCase',
        name4: [{ name5: 'camelCase' }],
      },
    };

    expect(requestCamelToPascalCase(obj)).toStrictEqual({
      name1: 'camel_case',
      name2: {
        name3: 'camel_case',
        name4: [{ name5: 'camel_case' }],
      },
    });
  });
});
