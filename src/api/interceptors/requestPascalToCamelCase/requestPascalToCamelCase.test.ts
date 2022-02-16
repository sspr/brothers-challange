// if static etc
import { requestPascalToCamelCase } from './requestPascalToCamelCase';

describe('requestPascalToCamelCase function', () => {
  it('changes object keys notation from pascal ', () => {
    const obj = {
      A_a_: 'I love pizza',
      b__b: 'I love pizza',
      c_c: {
        D_d: 'I love pizza',
        _e___e: {
          Ff: 'I love pizza',
          g_g: [{ H_h: 'I love pizza' }],
        },
      },
    };

    expect(requestPascalToCamelCase(obj)).toStrictEqual({
      aA: 'I love pizza',
      bB: 'I love pizza',
      cC: {
        dD: 'I love pizza',
        eE: {
          ff: 'I love pizza',
          gG: [{ hH: 'I love pizza' }],
        },
      },
    });
  });
});
