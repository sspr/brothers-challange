import { theme } from 'assets/styles/theme';
import { render, screen } from 'tests';
import { UnitLabel } from 'ui';

describe('UnitLabel component', () => {
  it('renders unit label correctly for elevation', () => {
    render(<UnitLabel discipline="elevation" />);

    expect(screen.getByText('m')).toBeInTheDocument();
    expect(screen.getByText('m')).toHaveStyle({ color: theme.color.grey });
  });

  it('renders unit label correctly for other', () => {
    render(<UnitLabel discipline="other" />);

    expect(screen.getByText('pts')).toBeInTheDocument();
  });

  it('renders unit label correctly for pushups', () => {
    render(<UnitLabel discipline="pushUps" />);

    expect(screen.queryByText('m')).not.toBeInTheDocument();
    expect(screen.queryByText('pts')).not.toBeInTheDocument();
    expect(screen.queryByText('km')).not.toBeInTheDocument();
  });

  it('renders unit label correctly for any', () => {
    render(<UnitLabel discipline="bike" />);

    expect(screen.getByText('km')).toBeInTheDocument();
  });
});
