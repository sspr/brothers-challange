import { theme } from 'assets/styles/theme';
import { render, screen } from 'tests';
import { Chip } from './Chip';

describe('Chip component', () => {
  it('renders chip correctly for cycling', () => {
    render(<Chip label="bike" />);

    expect(screen.getByText('Cycling')).toBeInTheDocument();
    expect(screen.getByText('Cycling').parentElement).toHaveStyle({ backgroundColor: theme.color.yellow });
  });

  it('renders chip correctly for running', () => {
    render(<Chip label="running" />);

    expect(screen.getByText('Running')).toBeInTheDocument();
    expect(screen.getByText('Running').parentElement).toHaveStyle({ backgroundColor: theme.color.green });
  });

  it('renders chip correctly for swimming', () => {
    render(<Chip label="swimming" />);

    expect(screen.getByText('Swimming')).toBeInTheDocument();
    expect(screen.getByText('Swimming').parentElement).toHaveStyle({ backgroundColor: theme.color.blue });
  });

  it('renders chip correctly for walking', () => {
    render(<Chip label="walking" />);

    expect(screen.getByText('Walking')).toBeInTheDocument();
    expect(screen.getByText('Walking').parentElement).toHaveStyle({ backgroundColor: theme.color.pink });
  });

  it('renders chip correctly for elevation', () => {
    render(<Chip label="elevation" />);

    expect(screen.getByText('Elevation')).toBeInTheDocument();
    expect(screen.getByText('Elevation').parentElement).toHaveStyle({ backgroundColor: theme.color.cyan });
  });

  it('renders chip correctly for others', () => {
    render(<Chip label="other" />);

    expect(screen.getByText('Others')).toBeInTheDocument();
    expect(screen.getByText('Others').parentElement).toHaveStyle({ backgroundColor: theme.color.purple });
  });

  it('renders chip correctly for pushups', () => {
    render(<Chip label="pushUps" />);

    expect(screen.getByText('Pushups')).toBeInTheDocument();
    expect(screen.getByText('Pushups').parentElement).toHaveStyle({ backgroundColor: theme.color.brown });
  });
});
