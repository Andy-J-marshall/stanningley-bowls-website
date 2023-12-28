import { useEffect } from 'react';
import TeamRecords from './teamRecords';
import PlayerRecords from './playerRecords';
import config from '../config';

function Records(props) {
    const stats = props.stats;

    const { playerResults, teamResults } = stats;

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="record" className="center">
            <PlayerRecords
                playerResults={playerResults}
                clubCupWinner={stats.clubCupWinner}
            />
            <TeamRecords teamResults={teamResults} />
            <p className="footnote">
                ** The number in brackets indicates the number of games played.
            </p>
        </div>
    );
}

export default Records;
