import TeamStatsTable from './teamStatsTable';
import { IndividualTeamStatsProps } from '../../../types/interfaces';

function IndividualTeamStats(props: IndividualTeamStatsProps) {
    const day = props.day;
    const displayName = props.displayname; // this is used by TeamTabs component
    const stats = props.stats;
    const bTeam = props.bTeam;

    const {
        awayWins,
        homeWins,
        cupWins,
        cupLosses,
        awayLosses,
        homeLosses,
        homeDraws,
        awayDraws,
    } = stats;

    const totalDraws = awayDraws + homeDraws;
    const totalWins = awayWins + homeWins + cupWins;
    const totalLosses = awayLosses + homeLosses + cupLosses;
    const totalGames = totalDraws + totalWins + totalLosses;

    if (totalGames > 0) {
        return (
            <div
                className="team-stats"
                id={`${day.replaceAll(' ', '-')}-stats`}
            >
                <h4>{day.toLowerCase()}</h4>
                <TeamStatsTable
                    totalGames={totalGames}
                    totalWins={totalWins}
                    totalLosses={totalLosses}
                    totalDraws={totalDraws}
                    homeWins={homeWins}
                    awayWins={awayWins}
                    cupWins={cupWins}
                    homeLosses={homeLosses}
                    awayLosses={awayLosses}
                    cupLosses={cupLosses}
                    homeDraws={homeDraws}
                    awayDraws={awayDraws}
                />
                <br />
                <hr />
            </div>
        );
    } else {
        return <p>No games played</p>;
    }
}

export default IndividualTeamStats;
