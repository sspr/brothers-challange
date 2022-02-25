import { PLAYER_MOCK } from 'api/mock/playerMock';
import { translations } from 'i18n/messages';
import { render, screen } from 'tests';
import { calculatePoints } from 'utils/calculatePoints/calculatePoints';
import { entries } from 'utils/entries/entries';
import { SummaryTable } from './SummaryTable';

describe('SummaryTable component', () => {
  it('renders summary table correctly', () => {
    render(<SummaryTable data={PLAYER_MOCK[0]} />);

    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('Discipline')).toBeInTheDocument();
    expect(screen.getByText('Discipline')).toHaveStyle({ fontWeight: 500 });
    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toHaveStyle({ fontWeight: 500 });
    expect(screen.getByText('Points')).toBeInTheDocument();
    expect(screen.getByText('Points')).toHaveStyle({ fontWeight: 500 });
    expect(screen.getByText(PLAYER_MOCK[0].score)).toBeInTheDocument();
    expect(screen.getByText(PLAYER_MOCK[0].score)).toHaveStyle({ fontWeight: 500 });

    entries(PLAYER_MOCK[0].stats).forEach(([discipline]) => {
      expect(screen.getByText(translations.en[`rankingTable.${discipline}`])).toBeInTheDocument();
      expect(screen.getByText(PLAYER_MOCK[0].stats[discipline])).toBeInTheDocument();
      expect(screen.getByText(calculatePoints(PLAYER_MOCK[0].stats[discipline], discipline))).toBeInTheDocument();
    });
  });
});
