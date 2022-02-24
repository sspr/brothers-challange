import { theme } from 'assets/styles/theme';
import { render, screen } from 'tests';
import { PageTitle } from 'ui';

describe('PageTitle component', () => {
  it('renders page title and breadcrumbs correctly', () => {
    render(<PageTitle title="Profile - John" />);

    expect(screen.getAllByText('Profile - John')).toHaveLength(2);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toHaveStyle({ color: theme.palette.primary.main });
    expect(screen.getByText('/')).toBeInTheDocument();
  });
});
