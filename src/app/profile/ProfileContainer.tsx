import { useLocation } from 'react-router-dom';

import { Profile } from './Profile';
import { GOAL_MOCK, PLAYER_MOCK } from 'api/mock/playerMock';

export const ProfileContainer = () => {
  const userName: string = useLocation().pathname.substring(1);

  return (
    <Profile data={PLAYER_MOCK[userName === 'Marcin' ? 0 : 1]} goal={GOAL_MOCK} isLoading={false} isError={false} />
  );
};
