import { Disciplines } from 'api/actions/ranking/ranking.types';
import { translations } from 'i18n/messages';
import { render, screen } from 'tests';
import { STATS_MOCK } from 'api/mock/rankingMock';
import { RankingTable } from './RankingTable';

describe('RankingTable component', () => {
  it('renders ranking table correctly', () => {
    render(<RankingTable stats={STATS_MOCK.stats} />);
    Object.values(Disciplines).forEach((discipline) => {
      expect(screen.getByText(translations.en[`rankingTable.${discipline}`])).toBeInTheDocument();
      expect(screen.getByText(translations.en[`rankingTable.${discipline}`])).toHaveStyle({ fontWeight: 500 });
    });

    Object.keys(STATS_MOCK.stats).forEach((name) => {
      expect(screen.getByText(name, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(name)).toHaveStyle({ fontWeight: 500 });
      expect(screen.getByText(`${STATS_MOCK.stats[name].bike}`, { exact: false }).parentNode).toHaveTextContent(
        `${STATS_MOCK.stats[name].bike} km`,
      );
      expect(screen.getByText(`${STATS_MOCK.stats[name].running}`, { exact: false })).toHaveTextContent(
        `${STATS_MOCK.stats[name].running} km`,
      );
      expect(screen.getByText(`${STATS_MOCK.stats[name].swimming}`, { exact: false })).toHaveTextContent(
        `${STATS_MOCK.stats[name].swimming} km`,
      );
      expect(screen.getByText(`${STATS_MOCK.stats[name].walking}`, { exact: false })).toHaveTextContent(
        `${STATS_MOCK.stats[name].walking} km`,
      );
      expect(screen.getByText(`${STATS_MOCK.stats[name].elevation}`, { exact: false })).toHaveTextContent(
        `${STATS_MOCK.stats[name].elevation} m`,
      );
      expect(screen.getByText(`${STATS_MOCK.stats[name].other}`, { exact: false })).toHaveTextContent(
        `${STATS_MOCK.stats[name].other} pts`,
      );
      expect(screen.getByText(String(STATS_MOCK.stats[name].pushUps), { exact: false })).toBeInTheDocument();
    });
  });
});
