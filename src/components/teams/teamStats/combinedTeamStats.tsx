import TeamStatsTable from './teamStatsTable';
import { CombinedTeamStatsProps } from '../../../types/interfaces';
import { combineTeamStats } from '../../../helpers/teamStatsHelper';

function CombinedTeamStats(props: CombinedTeamStatsProps) {
    const stats = props.stats;

    const combinedStats = combineTeamStats(stats);
    const {
        combinedAwayWins,
        combinedHomeWins,
        combinedAwayLosses,
        combinedHomeLosses,
        combinedCupWins,
        combinedCupLosses,
        combinedHomeDraws,
        combinedAwayDraws,
        totalDraws,
        totalWins,
        totalLosses,
        totalGames,
    } = combinedStats;

    if (totalGames > 0) {
        return (
            <div id="combined-team-win-losses">
                <TeamStatsTable
                    totalGames={totalGames}
                    totalWins={totalWins}
                    totalLosses={totalLosses}
                    totalDraws={totalDraws}
                    homeWins={combinedHomeWins}
                    awayWins={combinedAwayWins}
                    cupWins={combinedCupWins}
                    homeLosses={combinedHomeLosses}
                    awayLosses={combinedAwayLosses}
                    cupLosses={combinedCupLosses}
                    homeDraws={combinedHomeDraws}
                    awayDraws={combinedAwayDraws}
                />
            </div>
        );
    } else {
        return <p>No games played</p>;
    }
}

export default CombinedTeamStats;
