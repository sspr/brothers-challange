import { useParams } from 'react-router-dom';

import { Profile } from './Profile';
import { GOAL_MOCK, PLAYER_MOCK } from 'api/mock/playerMock';

export const ProfileContainer = () => {
  const { name } = useParams();

  return <Profile data={PLAYER_MOCK[name === 'Marcin' ? 0 : 1]} goal={GOAL_MOCK} isLoading={false} isError={false} />;
};
