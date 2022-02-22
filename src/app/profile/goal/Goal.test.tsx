import { AppLocale } from 'context/locale/appLocale.enum';
import { render, screen } from 'tests';
import { Goal } from './Goal';

describe('Goal component', () => {
  it("renders user's goals correctly", () => {
    render(<Goal points={2222} pushUps={10000} />);

    expect(screen.getByText('Goals')).toBeInTheDocument();
    expect(screen.getByText('Points: 2,222')).toBeInTheDocument();
    expect(screen.getByText('Pushups: 10,000')).toBeInTheDocument();
  });

  it("renders user's goals correctly in Polish", () => {
    render(<Goal points={2222} pushUps={10000} />, { locale: AppLocale.pl });

    expect(screen.getByText('Punkty: 2222')).toBeInTheDocument();
    expect(screen.getByText('Pompki: 10 000')).toBeInTheDocument();
  });
});
