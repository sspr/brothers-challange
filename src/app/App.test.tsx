import { render, screen } from '@testing-library/react';

import { translations } from 'i18n/messages';
import { AppProviders } from 'providers/AppProviders';
import { App } from './App';

describe('App component', () => {
  it('renders page title', () => {
    render(
      <AppProviders>
        <App />
      </AppProviders>,
    );

    expect(screen.getByText(translations.en['page.title'])).toBeInTheDocument();
  });
});
