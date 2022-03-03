import { render, screen } from 'tests';
import { PLAYER_WORKOUTS_MOCK } from 'api/mock/playerWorkoutsMock';
import { WorkoutsTable } from './WorkoutsTable';

describe('WorkoutsTable component', () => {
  it('renders workouts table correctly', () => {
    render(<WorkoutsTable monthNumber={0} data={PLAYER_WORKOUTS_MOCK[0]} isError={false} isLoading={false} />);

    expect(screen.getByText('Discipline')).toBeInTheDocument();
    expect(screen.getByText('Discipline')).toHaveStyle({ fontWeight: 500 });
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Date')).toHaveStyle({ fontWeight: 500 });
    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toHaveStyle({ fontWeight: 500 });
    expect(screen.getByText('Elevation')).toBeInTheDocument();
    expect(screen.getByText('Elevation')).toHaveStyle({ fontWeight: 500 });
    expect(screen.getByText('Points')).toBeInTheDocument();
    expect(screen.getByText('Points')).toHaveStyle({ fontWeight: 500 });
    expect(screen.getByText('Total:')).toBeInTheDocument();
    expect(screen.getByText('Total:')).toHaveStyle({ fontWeight: 500 });
    expect(screen.getByText('January 3')).toBeInTheDocument();
  });
});
