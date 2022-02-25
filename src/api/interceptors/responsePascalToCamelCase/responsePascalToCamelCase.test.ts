import { responsePascalToCamelCase } from './responsePascalToCamelCase';

describe('responsePascalToCamelCase interceptor', () => {
  it('changes object keys notation from pascal ', () => {
    const obj = {
      A_a_: 'I love pizza',
      b__b: 'I love pizza',
      c_c: {
        D_d: 'I love pizza',
        _e___e: {
          Ff: 'I love pizza',
          g_g: [{ H_h: 'I love pizza' }],
          ąśżźć_ńłóę: 'I love pizza',
        },
      },
    };

    expect(responsePascalToCamelCase(obj)).toStrictEqual({
      AA: 'I love pizza',
      bB: 'I love pizza',
      cC: {
        DD: 'I love pizza',
        EE: {
          Ff: 'I love pizza',
          gG: [{ HH: 'I love pizza' }],
          ąśżźćŃłóę: 'I love pizza',
        },
      },
    });
  });
});
