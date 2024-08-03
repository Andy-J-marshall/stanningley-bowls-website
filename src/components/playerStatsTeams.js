import { Accordion } from 'react-bootstrap';

function PlayerStatsTeams(props) {
    const stats = props.stats;

    const { allTeamStats } = stats;

    return (
        <div id="player-stats-teams">
            <Accordion.Item eventKey="4">
                <Accordion.Header id="stats-teams">TEAMS</Accordion.Header>
                <Accordion.Body>
                    <div>
                        {allTeamStats.map(
                            (team, idx) =>
                                team.teamGames > 0 && (
                                    <div key={idx}>
                                        <h3>{team.teamName.toUpperCase()}</h3>
                                        <p>Games: {team.teamGames}</p>
                                        <p>Wins: {team.teamWins}</p>
                                        <p>Losses: {team.teamLosses}</p>
                                        <p>
                                            Average: {team.teamAvg.toFixed(2)}
                                        </p>
                                        <p>
                                            Win percentage:{' '}
                                            {team.teamWinPerc.toFixed(0)}%
                                        </p>
                                    </div>
                                )
                        )}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
}

export default PlayerStatsTeams;
