import { useParams } from 'react-router-dom';

import { createGetPlayerDetailsAction } from 'api/actions/player/playerActions';
import { PlayerResponse } from 'api/types';
import { Profile } from './Profile';
import { useQuery } from 'api/hooks';

export const ProfileContainer = () => {
  const { name } = useParams();

  const { isLoading, isError, data } = useQuery<PlayerResponse>(createGetPlayerDetailsAction(String(name)), {
    refetchOnWindowFocus: true,
  });

  return <Profile profileDetails={data} isLoading={isLoading} isError={isError} pageTitle={name} />;
};
