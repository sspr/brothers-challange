import { render, screen, fireEvent, waitFor } from 'tests';
import { LoginForm } from './LoginForm';

const mockLogin = jest.fn((data) => {
  return Promise.resolve({ data });
});

describe('LoginForm component', () => {
  it('renders login form correctly', () => {
    render(<LoginForm isLoading={false} onSubmit={mockLogin} error="" />);

    expect(screen.getAllByText('Email Address')).toHaveLength(2);
    expect(screen.getAllByText('Password')).toHaveLength(2);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders proper error messages when inputs values are invalid', async () => {
    render(<LoginForm isLoading={false} onSubmit={mockLogin} error="" />);

    fireEvent.submit(screen.getByText('Login'));

    expect(await screen.findAllByText('This field is required')).toHaveLength(2);

    fireEvent.change(screen.getByLabelText('Email Address'), {
      target: { value: 'email@adres.longerthan30characersssssssssssssssssssssssssssssss' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'passwordlongerthan30characerssssssssssssssssssssssssssssssssssss' },
    });

    expect(await screen.findAllByText('The given value is too long')).toHaveLength(2);

    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'notvalidemail' } });

    expect(await screen.findByText('Email address is not valid')).toBeInTheDocument();
  });

  it('fires submit callback correctly, when inputs are valid', async () => {
    render(<LoginForm isLoading={false} onSubmit={mockLogin} error="" />);

    fireEvent.change(screen.getByLabelText('Email Address'), {
      target: { value: 'test@test.test' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'test' },
    });

    fireEvent.submit(screen.getByText('Login'));

    await waitFor(() => expect(mockLogin).toHaveBeenCalled());
  });
});
