import userEvent from '@testing-library/user-event';

import { render, screen, within, fireEvent, waitFor } from 'tests';
import { AddActivityForm } from './AddActivityForm';

describe('AddActivityForm component', () => {
  it('renders form for adding activities correctly for cycling', async () => {
    render(
      <AddActivityForm
        currentMonth={1}
        setCurrentMonth={() => {}}
        isFromSubmittedSuccessfully={false}
        isLoading={false}
        error={undefined}
        onSubmit={() => {}}
      />,
    );

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Cycling'));

    expect(screen.queryAllByText('Date')).toHaveLength(2);
    expect(screen.queryAllByText('Distance in kilometers')).toHaveLength(2);
  });

  it('renders form for adding activities correctly for running', () => {
    render(
      <AddActivityForm
        currentMonth={1}
        setCurrentMonth={() => {}}
        isFromSubmittedSuccessfully={false}
        isLoading={false}
        error={undefined}
        onSubmit={() => {}}
      />,
    );

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Running'));

    expect(screen.queryAllByText('Date')).toHaveLength(2);
    expect(screen.queryAllByText('Distance in kilometers')).toHaveLength(2);
  });

  it('renders form for adding activities correctly for swimming', () => {
    render(
      <AddActivityForm
        currentMonth={1}
        setCurrentMonth={() => {}}
        isFromSubmittedSuccessfully={false}
        isLoading={false}
        error={undefined}
        onSubmit={() => {}}
      />,
    );

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Swimming'));

    expect(screen.queryAllByText('Date')).toHaveLength(2);
    expect(screen.queryAllByText('Distance in meters')).toHaveLength(2);
  });

  it('renders form for adding activities correctly for walking', () => {
    render(
      <AddActivityForm
        currentMonth={1}
        setCurrentMonth={() => {}}
        isFromSubmittedSuccessfully={false}
        isLoading={false}
        error={undefined}
        onSubmit={() => {}}
      />,
    );

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Walking'));

    expect(screen.queryAllByText('Date')).toHaveLength(2);
    expect(screen.queryAllByText('Distance in kilometers')).toHaveLength(2);
    expect(screen.queryAllByText('Elevation in meters')).toHaveLength(2);
  });

  it('renders form for adding activities correctly for others', () => {
    render(
      <AddActivityForm
        currentMonth={1}
        setCurrentMonth={() => {}}
        isFromSubmittedSuccessfully={false}
        isLoading={false}
        error={undefined}
        onSubmit={() => {}}
      />,
    );

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Others'));

    expect(screen.queryAllByText('Date')).toHaveLength(2);
    expect(screen.queryAllByText('Points')).toHaveLength(2);
    expect(screen.queryAllByText('Description')).toHaveLength(2);
  });

  it('renders form for adding activities correctly for push ups', () => {
    render(
      <AddActivityForm
        currentMonth={1}
        setCurrentMonth={() => {}}
        isFromSubmittedSuccessfully={false}
        isLoading={false}
        error={undefined}
        onSubmit={() => {}}
      />,
    );

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Push ups'));

    expect(screen.queryAllByText('Date')).toHaveLength(2);
    expect(screen.queryAllByText('Amount')).toHaveLength(2);
  });

  it('fires callback correctly when inputs are valid', async () => {
    const mockSubmit = jest.fn((data) => {
      return Promise.resolve({ data });
    });

    render(
      <AddActivityForm
        currentMonth={1}
        setCurrentMonth={() => {}}
        isFromSubmittedSuccessfully={false}
        isLoading={false}
        error={undefined}
        onSubmit={mockSubmit}
      />,
    );

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Cycling'));

    fireEvent.change(screen.getByLabelText('Distance in kilometers'), {
      target: { value: 10 },
    });
    fireEvent.submit(screen.getByText('Add activity'));

    await waitFor(() => expect(mockSubmit).toHaveBeenCalled());
  });

  it('validates inputs correctly for walking', async () => {
    const mockSubmit = jest.fn((data) => {
      return Promise.resolve({ data });
    });

    render(
      <AddActivityForm
        currentMonth={1}
        setCurrentMonth={() => {}}
        isFromSubmittedSuccessfully={false}
        isLoading={false}
        error={undefined}
        onSubmit={mockSubmit}
      />,
    );

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Walking'));
    fireEvent.change(screen.getByLabelText('Distance in kilometers'), {
      target: { value: 10000 },
    });
    fireEvent.change(screen.getByLabelText('Elevation in meters'), {
      target: { value: 10000 },
    });
    fireEvent.submit(screen.getByText('Add activity'));

    expect(await screen.findAllByText('The value is too big')).toHaveLength(2);

    fireEvent.change(screen.getByLabelText('Distance in kilometers'), {
      target: { value: 0 },
    });
    fireEvent.change(screen.getByLabelText('Elevation in meters'), {
      target: { value: -1 },
    });
    fireEvent.submit(screen.getByText('Add activity'));

    expect(await screen.findAllByText('The value is too small')).toHaveLength(2);
  });

  it('validates inputs correctly for other', async () => {
    const mockSubmit = jest.fn((data) => {
      return Promise.resolve({ data });
    });

    render(
      <AddActivityForm
        currentMonth={1}
        setCurrentMonth={() => {}}
        isFromSubmittedSuccessfully={false}
        isLoading={false}
        error={undefined}
        onSubmit={mockSubmit}
      />,
    );

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Others'));
    fireEvent.submit(screen.getByText('Add activity'));

    expect(await screen.findAllByText('This field is required')).toHaveLength(2);

    fireEvent.change(screen.getByLabelText('Description'), {
      target: { value: 'Thi description is to loooooooooooooooooooooooooooooooong' },
    });
    expect(await screen.findAllByText('The given value is too long')).toHaveLength(1);
  });
});
