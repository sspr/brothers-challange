import { render, screen } from 'tests';
import { translations } from 'i18n/messages';
import { RankingCard } from './RankingCard';
import { RANKIG_MOCK } from 'tests/mock/rankingMock';
import { Goal } from 'api/ranking/ranking.types';

describe('RankingCard component', () => {
  it('renders ranking card correctly', () => {
    render(<RankingCard name={RANKIG_MOCK[0].name} points={RANKIG_MOCK[0].points} rank={1} />);

    expect(screen.getByText(RANKIG_MOCK[0].name)).toBeInTheDocument();
    expect(screen.getByText(`${RANKIG_MOCK[0].points} ${translations.en['rankingCard.points']}`)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${Math.round((RANKIG_MOCK[0].points / Goal.GOAL) * 100)} % ${translations.en['rankingCard.percentOfGoal']}`,
      ),
    ).toBeInTheDocument();
    expect(screen.getByTestId('EmojiEventsIcon')).toHaveStyle({ color: 'gold' });
    expect(document.querySelector('.MuiLinearProgress-bar')).toHaveStyle({
      transform: `translateX(${
        RANKIG_MOCK[0].points < Goal.GOAL ? Math.round((RANKIG_MOCK[0].points / Goal.GOAL) * 100) - 100 : 0
      }%)`,
    });
  });

  it('renders ranking card correctly, when index is euqal to 2', () => {
    render(<RankingCard name={RANKIG_MOCK[0].name} points={RANKIG_MOCK[0].points} rank={2} />);

    expect(screen.getByTestId('EmojiEventsIcon')).toHaveStyle({ color: 'silver' });
  });
});
