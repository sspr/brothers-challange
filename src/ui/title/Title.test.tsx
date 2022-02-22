import { theme } from 'assets/styles/theme';
import { render, screen } from 'tests';
import { Title } from 'ui';

describe('Title component', () => {
  it('renders page title and breadcrumbs correctly', () => {
    render(<Title title="Profile - John" />);

    expect(screen.getAllByText('Profile - John')).toHaveLength(2);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toHaveStyle({ color: theme.palette.primary.main });
    expect(screen.getByText('/')).toBeInTheDocument();
  });
});
