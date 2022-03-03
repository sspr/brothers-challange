import { PLAYER_MOCK } from 'api/mock/playerMock';
import { Details } from './Details';

export const DetailsContainer = () => {
  return <Details avatar={PLAYER_MOCK[0].avatar} name={PLAYER_MOCK[0].name} />;
};
