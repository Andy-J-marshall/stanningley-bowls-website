import { useEffect } from 'react';
import IndividualTeamStats from './individualTeamStats';
import CombinedTeamStats from './combinedTeamStats';
import TeamTabs from './teamTabs';
import config from '../config';

function TeamStats(props) {
    const stats = props.stats;

    const teamName = config.teamNames.shortName;

    const { playerResults, teamResults } = stats;

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    function allComponent() {
        return <CombinedTeamStats stats={teamResults} />;
    }

    function returnTeamComponents() {
        const possibleTeamNames = config.allTeamsInLeaguesSince2013;

        return teamResults.map((teamResult) => {
            if (possibleTeamNames.includes(teamResult.day.toLowerCase())) {
                // TODO move to function?
                let displayName = teamResult.day.substring(0, 3).toUpperCase();
                if (teamResult.day.toLowerCase().includes(' vets')) {
                    displayName += ' (VETS)';
                }
                if (teamResult.day.toLowerCase().includes(' (b)')) {
                    displayName += ' (B)';
                }
                if (teamResult.day.toLowerCase().includes(' pairs')) {
                    displayName += ' (PAIRS)';
                }
                return (
                    <IndividualTeamStats
                        displayName={displayName}
                        day={teamResult.day}
                        stats={teamResult}
                        playerStats={playerResults}
                    />
                );
            }
        });
    }

    if (teamResults) {
        return (
            <div id="team-stats" className="center page-component">
                <h1>TEAM STATS</h1>
                <TeamTabs
                    allComponent={allComponent()}
                    teamComponents={returnTeamComponents()}
                />
                <br />
            </div>
        );
    } else {
        return (
            <div id="team-stats-unavailable" className="center page-component">
                <h1>TEAM STATS</h1>
                <p>
                    No {teamName} team stats available, please select another
                    year.
                </p>
            </div>
        );
    }
}

export default TeamStats;
