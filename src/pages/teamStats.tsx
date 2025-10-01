import { useEffect } from 'react';
import IndividualTeamStats from '../components/teams/teamStats/individualTeamStats';
import CombinedTeamStats from '../components/teams/teamStats/combinedTeamStats';
import TeamTabs from '../components/teams/teamTabs';
import TeamTabsWrapper from '../components/teams/teamTabsWrapper';
import { TeamStatsProps } from '../types/interfaces';
import { findAllTeamStats } from '../helpers/teamStatsHelper';
import { config } from '../config';

function TeamStats(props: TeamStatsProps) {
    const stats = props.stats;

    const { teamResults } = stats;
    const currentYear = new Date().getFullYear();
    const yearInTitle =
        !isNaN(Number(stats.statsYear)) &&
        currentYear !== Number(stats.statsYear)
            ? `${stats.statsYear.toLowerCase()}`
            : '';

    const anyGamesPlayed = teamResults?.some(
        (team) => team.totalGamesPlayed > 0
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    function returnTeamComponents() {
        return Object.entries(config.historicTeamInfo)
            .map(([teamKey, teamNames]) => {
                const tabDisplayname = teamKey.toUpperCase();
                const teamsFound = findAllTeamStats(teamNames, teamResults);

                if (teamsFound.length > 0) {
                    return (
                        <TeamTabsWrapper
                            displayname={tabDisplayname}
                            children={
                                <div>
                                    {teamsFound.map(
                                        (
                                            { teamName, teamStats, bTeamStats },
                                            index
                                        ) => (
                                            <div key={`${teamName}-${index}`}>
                                                {teamStats && (
                                                    <IndividualTeamStats
                                                        day={teamName}
                                                        stats={teamStats}
                                                        bTeam={false}
                                                    />
                                                )}
                                                {bTeamStats && (
                                                    <IndividualTeamStats
                                                        day={
                                                            teamName.replace(
                                                                ' (a)',
                                                                ''
                                                            ) + ' (b)'
                                                        }
                                                        stats={bTeamStats}
                                                        bTeam={true}
                                                    />
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            }
                        ></TeamTabsWrapper>
                    );
                }
                // If no data, return null (no tab)
                return null;
            })
            .filter(Boolean) as React.ReactElement<{ displayname: string }>[]; // Remove nulls so only tabs with data are rendered
    }

    if (teamResults && anyGamesPlayed) {
        return (
            <div>
                <h1>{yearInTitle} team stats</h1>
                <TeamTabs
                    allCombinedComponent={
                        <CombinedTeamStats stats={teamResults} />
                    }
                    teamComponents={returnTeamComponents()}
                />
                <br />
                <p className="footnote">Last Updated: {stats.lastUpdated}</p>
            </div>
        );
    } else {
        return (
            <div className="center" style={{ width: '95%' }}>
                <h1>team stats</h1>
                <p>No stats available for the selected year</p>
            </div>
        );
    }
}

export default TeamStats;
