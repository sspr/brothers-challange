import { client } from 'api/client';
import { requestPascalToCamelCase } from 'api/interceptors/requestPascalToCamelCase';

export const getRanking = async () => {
  client.interceptors.response.use(
    (response) => requestPascalToCamelCase(response),
    (error) => Promise.reject(error),
  );

  try {
    const response = await client.get('board');

    if (response.status !== 200) {
      throw new Error('Something went wrong');
    }

    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
