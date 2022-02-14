import { client } from 'api/client';

export const getRanking = async () => {
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
