import userEvent from '@testing-library/user-event';

import { render, screen, within } from 'tests';
import { AddActivityForm } from './AddActivityForm';

describe('AddActivityForm component', () => {
  it('renders form for adding activities correctly for cycling', () => {
    render(<AddActivityForm onSubmit={() => {}} />);

    userEvent.click(screen.getByLabelText('Discipline'));
    userEvent.click(within(screen.getByRole('listbox')).getByText('Cycling'));

    expect(screen.queryAllByText('Date')).toHaveLength(2);
    expect(screen.queryAllByText('Distance in kilometers')).toHaveLength(2);
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
