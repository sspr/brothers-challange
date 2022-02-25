import { requestAuthorization } from './requestAuthorization';

describe('requestAuthorization interceptor', () => {
  it('adds Authorization header to config headers', () => {
    const config = {
      someConfig: 'test config',
      headers: {
        someConfig: 'test config',
      },
    };

    expect(requestAuthorization(config, 'testToken')).toStrictEqual({
      someConfig: 'test config',
      headers: {
        someConfig: 'test config',
        Authorization: 'Bearer testToken',
      },
    });
  });
});
