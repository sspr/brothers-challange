import { render, screen, fireEvent } from 'tests';
import { translations } from 'i18n/messages';
import { AppLocale } from 'context/locale/appLocale.enum';
import { Header } from './Header';

describe('Header component', () => {
  it('renders page title and login button correctly', () => {
    render(<Header isLoggedIn={false} />, { locale: AppLocale.en });

    expect(screen.getByText(translations.en['header.title'])).toBeInTheDocument();
    expect(screen.getByText(translations.en['header.login'])).toBeInTheDocument();
  });

  it('renders language switch correctly', () => {
    render(<Header isLoggedIn={false} />, { locale: AppLocale.en });

    expect(screen.getByText('EN')).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('languageSwitch').children[1], { target: { value: 'pl' } });

    expect(screen.getByText(/pl/i)).toBeInTheDocument();
    expect(screen.getByText(translations.pl['header.title'])).toBeInTheDocument();
  });

  it('renders login button correctly, when logged in', () => {
    render(<Header isLoggedIn={true} />, { locale: AppLocale.en });

    expect(screen.getByText(translations.en['header.logout'])).toBeInTheDocument();
  });
});
