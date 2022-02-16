import { render, screen } from 'tests';
import { translations } from 'i18n/messages';
import { RankingCard } from './RankingCard';
import { PLAYERS_MOCK } from 'api/mock/rankingMock';

const GOAL = 2222;

describe('RankingCard component', () => {
  it('renders ranking card correctly', () => {
    render(<RankingCard goal={2222} name={PLAYERS_MOCK[0].name} score={PLAYERS_MOCK[0].score} rank={1} />);

    const progressPercent = Math.round((PLAYERS_MOCK[0].score / GOAL) * 100);

    expect(screen.getByText(PLAYERS_MOCK[0].name)).toBeInTheDocument();
    expect(screen.getByText(`${PLAYERS_MOCK[0].score} ${translations.en['rankingCard.points']}`)).toBeInTheDocument();
    expect(
      screen.getByText(`${progressPercent} % ${translations.en['rankingCard.percentOfGoal']}`),
    ).toBeInTheDocument();
    expect(screen.getByTestId('EmojiEventsIcon')).toHaveStyle({ color: 'gold' });
    expect(document.querySelector('.MuiLinearProgress-bar')).toHaveStyle({
      transform: `translateX(${PLAYERS_MOCK[0].score < GOAL ? progressPercent - 100 : 0}%)`,
    });
  });

  it('renders ranking card correctly, when index is equal to 2', () => {
    render(<RankingCard goal={2222} name={PLAYERS_MOCK[0].name} score={PLAYERS_MOCK[0].score} rank={2} />);

    expect(screen.getByTestId('EmojiEventsIcon')).toHaveStyle({ color: 'silver' });
  });
});
