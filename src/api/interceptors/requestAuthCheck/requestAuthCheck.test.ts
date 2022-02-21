import { requestAuthCheck } from './requestAuthCheck';

describe('requestAuthCheck function', () => {
  it('adds Authorization prop to config headers', () => {
    const config = {
      someConfig: 'test config',
      headers: {
        someConfig: 'test config',
      },
    };

    expect(requestAuthCheck(config, 'testToken')).toStrictEqual({
      someConfig: 'test config',
      headers: {
        someConfig: 'test config',
        Authorization: 'Bearer testToken',
      },
    });
  });
});
