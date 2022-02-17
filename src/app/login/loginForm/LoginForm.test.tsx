import { render, screen, fireEvent } from 'tests';
import { LoginForm } from './LoginForm';

const mockLogin = jest.fn((data) => {
  return Promise.resolve({ data });
});

describe('LoginForm component', () => {
  it('renders login form correctly', () => {
    render(<LoginForm onSubmit={mockLogin} />);

    expect(screen.getAllByText('Email Address')).toHaveLength(2);
    expect(screen.getAllByText('Password')).toHaveLength(2);
    expect(screen.getByText('Remember me')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders proper error messages when inputs values are invalid', async () => {
    render(<LoginForm onSubmit={mockLogin} />);

    fireEvent.submit(screen.getByText('Login'));

    expect(await screen.findByText('Email address is required')).toBeInTheDocument();
    expect(await screen.findByText('Email address is required')).toHaveStyle({ color: '#d32f2f' });
    expect(await screen.findByText('Password is required')).toBeInTheDocument();
    expect(await screen.findByText('Password is required')).toHaveStyle({ color: '#d32f2f' });

    fireEvent.change(screen.getByLabelText('Email Address'), {
      target: { value: 'email@adres.longerthan30characersssssssssssssssssssssssssssssss' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'passwordlongerthan30characerssssssssssssssssssssssssssssssssssss' },
    });

    expect(await screen.findByText('Email address is too long. Maximum length of email is 30')).toBeInTheDocument();
    expect(await screen.findByText('Password is too long. Maximum length of password is 30')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'notvalidemail' } });

    expect(await screen.findByText('Email address is not valid')).toBeInTheDocument();
  });
});
