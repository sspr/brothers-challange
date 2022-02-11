import { Disciplines } from 'api/actions/ranking/ranking.types';
import { translations } from 'i18n/messages';
import { render, screen } from 'tests';
import { STATS_MOCK } from 'api/mock/rankingMock';
import { RankingTable } from './RankingTable';

describe('RankingTable component', () => {
  it('renders ranking table correctly', () => {
    render(<RankingTable stats={STATS_MOCK} />);
    Object.values(Disciplines).forEach((discipline) => {
      expect(screen.getByText(translations.en[`rankingTable.${discipline}`])).toBeInTheDocument();
      expect(screen.getByText(translations.en[`rankingTable.${discipline}`])).toHaveStyle({ fontWeight: 500 });
    });

    Object.keys(STATS_MOCK).forEach((name) => {
      expect(screen.getByText(name, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(name)).toHaveStyle({ fontWeight: 500 });
      expect(screen.getByText(`${STATS_MOCK[name].bike} km`, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(`${STATS_MOCK[name].running} km`, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(`${STATS_MOCK[name].swimming} km`, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(`${STATS_MOCK[name].walking} km`, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(`${STATS_MOCK[name].elevation} m`, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(`${STATS_MOCK[name].other} pts`, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(String(STATS_MOCK[name].pushUps), { exact: false })).toBeInTheDocument();
    });
  });
});
