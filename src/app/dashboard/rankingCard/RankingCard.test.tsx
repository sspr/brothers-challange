import { render, screen } from 'tests';
import { translations } from 'i18n/messages';
import { RankingCard } from './RankingCard';
import { RANKING_MOCK } from 'tests/mock/rankingMock';

describe('RankingCard component', () => {
  it('renders ranking card correctly', () => {
    render(<RankingCard name={RANKING_MOCK[0].name} score={RANKING_MOCK[0].score} rank={1} />);

    const progressPercent = Math.round((RANKING_MOCK[0].score / 2222) * 100);

    expect(screen.getByText(RANKING_MOCK[0].name)).toBeInTheDocument();
    expect(screen.getByText(`${RANKING_MOCK[0].score} ${translations.en['rankingCard.points']}`)).toBeInTheDocument();
    expect(
      screen.getByText(`${progressPercent} % ${translations.en['rankingCard.percentOfGoal']}`),
    ).toBeInTheDocument();
    expect(screen.getByTestId('EmojiEventsIcon')).toHaveStyle({ color: 'gold' });
    expect(document.querySelector('.MuiLinearProgress-bar')).toHaveStyle({
      transform: `translateX(${RANKING_MOCK[0].score < 2222 ? progressPercent - 100 : 0}%)`,
    });
  });

  it('renders ranking card correctly, when index is equal to 2', () => {
    render(<RankingCard name={RANKING_MOCK[0].name} score={RANKING_MOCK[0].score} rank={2} />);

    expect(screen.getByTestId('EmojiEventsIcon')).toHaveStyle({ color: 'silver' });
  });
});
