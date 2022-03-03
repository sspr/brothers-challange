import { useParams } from 'react-router-dom';

import { PLAYER_MOCK } from 'api/mock/playerMock';
import { SummaryTable } from './SummaryTable';

export const SummaryTableContainer = () => {
  const { name } = useParams();

  return <SummaryTable data={PLAYER_MOCK[name === 'Marcin' ? 0 : 1]} />;
};
