import { PLAYER_MOCK } from 'api/mock/playerMock';
import { Discipline } from 'api/types';
import { translations } from 'i18n/messages';
import { render, screen } from 'tests';
import { calcPoints } from 'utils/calcPoints';
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

    Object.keys(PLAYER_MOCK[0].stats).forEach((discipline) => {
      expect(screen.getByText(translations.en[`rankingTable.${discipline as Discipline}`])).toBeInTheDocument();
      expect(screen.getByText(PLAYER_MOCK[0].stats[discipline as Discipline])).toBeInTheDocument();
      expect(
        screen.getByText(calcPoints(PLAYER_MOCK[0].stats[discipline as Discipline], discipline)),
      ).toBeInTheDocument();
    });
  });
});
