import { AxiosResponse } from 'axios';

import { RankingResponseData } from 'api/types';

export const requestPascalToCamelCase = (response: AxiosResponse<RankingResponseData>) => {
  const responseObject = { ...JSON.parse(JSON.stringify(response)) };

  const pushUps = Object.fromEntries(
    Object.keys(responseObject.data.stats).map((name) => {
      return [name, { pushUps: responseObject.data.stats[name].push_ups }];
    }),
  );

  return {
    ...responseObject,
    data: {
      ...responseObject.data,
      stats: {
        ...Object.fromEntries(
          Object.keys(responseObject.data.stats).map((player) => {
            return [player, { ...responseObject.data.stats[player], ...pushUps[player] }];
          }),
        ),
      },
    },
  };
};
