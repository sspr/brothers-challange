import { Discipline } from 'api/actions/ranking/ranking.types';
import { translations } from 'i18n/messages';
import { render, screen } from 'tests';
import { STATS_MOCK } from 'api/mock/rankingMock';
import { RankingTable } from './RankingTable';

describe('RankingTable component', () => {
  it('renders ranking table correctly', () => {
    render(<RankingTable stats={STATS_MOCK} />);
    Object.values(Discipline).forEach((discipline) => {
      expect(screen.getByText(translations.en[`rankingTable.${discipline}`])).toBeInTheDocument();
      expect(screen.getByText(translations.en[`rankingTable.${discipline}`])).toHaveStyle({ fontWeight: 500 });
    });

    Object.keys(STATS_MOCK).forEach((name) => {
      expect(screen.getByText(name, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(`${STATS_MOCK[name].bike}`, { exact: false }).parentNode).toHaveTextContent(
        `${STATS_MOCK[name].bike} km`,
      );
      expect(screen.getByText(`${STATS_MOCK[name].running}`, { exact: false })).toHaveTextContent(
        `${STATS_MOCK[name].running} km`,
      );
      expect(screen.getByText(`${STATS_MOCK[name].swimming}`, { exact: false })).toHaveTextContent(
        `${STATS_MOCK[name].swimming} km`,
      );
      expect(screen.getByText(`${STATS_MOCK[name].walking}`, { exact: false })).toHaveTextContent(
        `${STATS_MOCK[name].walking} km`,
      );
      expect(screen.getByText(`${STATS_MOCK[name].elevation}`, { exact: false })).toHaveTextContent(
        `${STATS_MOCK[name].elevation} m`,
      );
      expect(screen.getByText(`${STATS_MOCK[name].other}`, { exact: false })).toHaveTextContent(
        `${STATS_MOCK[name].other} pts`,
      );
      expect(screen.getByText(String(STATS_MOCK[name].pushUps), { exact: false })).toBeInTheDocument();
    });
  });
});
