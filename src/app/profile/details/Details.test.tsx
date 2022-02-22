import { translations } from 'i18n/messages';
import { render, screen } from 'tests';
import { Details } from './Details';

describe('Details component', () => {
  it('renders profile details correctly', () => {
    render(<Details name="John" avatar="img" />);

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'img');
    expect(screen.getByRole('img')).toHaveAttribute('alt', `${translations.en['profile.picture']} John`);
  });
});
