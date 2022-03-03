import { GOAL_MOCK } from 'api/mock/playerMock';
import { render, screen } from 'tests';
import { Goals } from './Goals';

describe('Goal component', () => {
  it("renders user's goals correctly", () => {
    render(<Goals goals={GOAL_MOCK} />);

    expect(screen.getByText('Goals')).toBeInTheDocument();
    expect(screen.getByText('Points: 2,222')).toBeInTheDocument();
    expect(screen.getByText('Push ups: 10,000')).toBeInTheDocument();
  });
});
