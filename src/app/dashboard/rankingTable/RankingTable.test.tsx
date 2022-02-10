import { Disciplines } from 'api/ranking/ranking.types';
import { translations } from 'i18n/messages';
import { render, screen } from 'tests';
import { RANKING_MOCK } from 'tests/mock/rankingMock';
import { RankingTable } from './RankingTable';

describe('RankingTable component', () => {
  it('renders ranking table correctly', () => {
    render(<RankingTable data={RANKING_MOCK} />);

    Object.values(Disciplines).forEach((discipline) => {
      expect(screen.getByText(translations.en[`rankingTable.${discipline}`])).toBeInTheDocument();
      expect(screen.getByText(translations.en[`rankingTable.${discipline}`])).toHaveStyle({ fontWeight: 500 });
    });

    RANKING_MOCK.forEach((rank) => {
      expect(screen.getByText(rank.name, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(rank.name)).toHaveStyle({ fontWeight: 500 });

      expect(screen.getByText(`${rank.cycling} km`, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(`${rank.running} km`, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(`${rank.swimming} km`, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(`${rank.walking} km`, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(`${rank.elevation} m`, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(`${rank.others} pts`, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(rank.pushUps, { exact: false })).toBeInTheDocument();
    });
  });
});
