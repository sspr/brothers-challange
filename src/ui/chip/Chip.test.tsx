import { render, screen } from 'tests';
import { Chip } from './Chip';

describe('Chip component', () => {
  it('renders Chip correctly', () => {
    render(<Chip backgroundColor={{ backgroundColor: '#000' }} label="koszykówka" />);

    expect(screen.getByText('koszykówka')).toBeInTheDocument();
    expect(screen.getByText('koszykówka').parentElement).toHaveStyle({ backgroundColor: '#000' });
  });
});
