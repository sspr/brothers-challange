import { GOAL_MOCK } from 'api/mock/playerMock';
import { Goals } from './Goals';

export const GoalsContainer = () => {
  return <Goals goals={GOAL_MOCK} />;
};
