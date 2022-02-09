import { translations } from 'i18n/messages';
import { render, screen } from 'tests';
import { RANKIG_MOCK } from 'tests/mock/rankingMock';
import { RankigTable } from './RankingTable';

describe('RankingTable component', () => {
  it('renders ranking table correctly', () => {
    render(<RankigTable data={RANKIG_MOCK} />);

    expect(screen.getByText(translations.en['rankingTable.summary'])).toBeInTheDocument();
    expect(screen.getByText(translations.en['rankingTable.cycling'])).toBeInTheDocument();
    expect(screen.getByText(translations.en['rankingTable.running'])).toBeInTheDocument();
    expect(screen.getByText(translations.en['rankingTable.swimming'])).toBeInTheDocument();
    expect(screen.getByText(translations.en['rankingTable.walking'])).toBeInTheDocument();
    expect(screen.getByText(translations.en['rankingTable.others'])).toBeInTheDocument();
    expect(screen.getByText(translations.en['rankingTable.pushUps'])).toBeInTheDocument();

    expect(screen.getByText(translations.en['rankingTable.cycling'])).toHaveStyle({ fontWeight: 500 });
    expect(screen.getByText(translations.en['rankingTable.running'])).toHaveStyle({ fontWeight: 500 });
    expect(screen.getByText(translations.en['rankingTable.swimming'])).toHaveStyle({ fontWeight: 500 });
    expect(screen.getByText(translations.en['rankingTable.walking'])).toHaveStyle({ fontWeight: 500 });
    expect(screen.getByText(translations.en['rankingTable.others'])).toHaveStyle({ fontWeight: 500 });
    expect(screen.getByText(translations.en['rankingTable.pushUps'])).toHaveStyle({ fontWeight: 500 });

    RANKIG_MOCK.forEach((rank) => {
      expect(screen.getByText(rank.name, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(rank.cycling, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(rank.running, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(rank.swimming, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(rank.walking, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(rank.others, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(rank.pushUps, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(rank.name)).toHaveStyle({ fontWeight: 500 });
    });
  });
});
