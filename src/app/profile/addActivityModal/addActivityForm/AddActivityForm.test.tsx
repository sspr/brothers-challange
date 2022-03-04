import userEvent from '@testing-library/user-event';

import { render, screen, within, fireEvent, waitFor } from 'tests';
import { AddActivityForm } from './AddActivityForm';

const mockSubmit = jest.fn((data) => {
  return Promise.resolve({ data });
});

describe('AddActivityForm component', () => {
  it('renders form for adding activities correctly for cycling', async () => {
    render(<AddActivityForm onSubmit={mockSubmit} />);

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Cycling'));

    expect(screen.queryAllByText('Date')).toHaveLength(2);
    expect(screen.queryAllByText('Distance in kilometers')).toHaveLength(2);
  });

  it('fires callback correctly when inputs are valid', async () => {
    render(<AddActivityForm onSubmit={mockSubmit} />);

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Cycling'));
    fireEvent.change(screen.getByLabelText('Distance in kilometers'), {
      target: { value: 10 },
    });
    fireEvent.submit(screen.getByText('Add activity'));

    await waitFor(() => expect(mockSubmit).toHaveBeenCalled());
  });

  it('renders form for adding activities correctly for running', () => {
    render(<AddActivityForm onSubmit={() => {}} />);

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Running'));

    expect(screen.queryAllByText('Date')).toHaveLength(2);
    expect(screen.queryAllByText('Distance in kilometers')).toHaveLength(2);
  });

  it('renders form for adding activities correctly for swimming', () => {
    render(<AddActivityForm onSubmit={() => {}} />);

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Swimming'));

    expect(screen.queryAllByText('Date')).toHaveLength(2);
    expect(screen.queryAllByText('Distance in meters')).toHaveLength(2);
  });

  it('renders form for adding activities correctly for walking', () => {
    render(<AddActivityForm onSubmit={() => {}} />);

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Walking'));

    expect(screen.queryAllByText('Date')).toHaveLength(2);
    expect(screen.queryAllByText('Distance in kilometers')).toHaveLength(2);
    expect(screen.queryAllByText('Elevation in meters')).toHaveLength(2);
  });

  it('renders form for adding activities correctly for others', () => {
    render(<AddActivityForm onSubmit={() => {}} />);

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Others'));

    expect(screen.queryAllByText('Date')).toHaveLength(2);
    expect(screen.queryAllByText('Points')).toHaveLength(2);
    expect(screen.queryAllByText('Description')).toHaveLength(2);
  });

  it('renders form for adding activities correctly for push ups', () => {
    render(<AddActivityForm onSubmit={() => {}} />);

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Push ups'));

    expect(screen.queryAllByText('Date')).toHaveLength(2);
    expect(screen.queryAllByText('Amount')).toHaveLength(2);
  });
});
