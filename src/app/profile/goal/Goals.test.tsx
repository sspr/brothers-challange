import { render, screen } from 'tests';
import { Goals } from './Goals';

describe('Goal component', () => {
  it("renders user's goals correctly", () => {
    render(<Goals points={2222} pushUps={10000} />);

    expect(screen.getByText('Goals')).toBeInTheDocument();
    expect(screen.getByText('Points: 2,222')).toBeInTheDocument();
    expect(screen.getByText('Push ups: 10,000')).toBeInTheDocument();
  });
});
