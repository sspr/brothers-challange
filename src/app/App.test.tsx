import { render, screen } from 'tests';
import { translations } from 'i18n/messages';
import { App } from './App';
import { AppLocale } from 'context/locale/appLocale.enum';

describe('App component', () => {
  it('renders page title', () => {
    render(<App />, { locale: AppLocale.en });

    expect(screen.getByText(translations.en['header.title'])).toBeInTheDocument();
  });
});
