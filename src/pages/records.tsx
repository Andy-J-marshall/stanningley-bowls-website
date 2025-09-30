import { useEffect } from 'react';
import TeamTabs from '../components/teams/teamTabs';
import TeamTabsWrapper from '../components/teams/teamTabsWrapper';
import CombinedRecords from '../components/teams/records/combinedRecords';
import IndividualRecords from '../components/teams/records/individualRecords';
import { RecordsProps } from '../types/interfaces';
import {
    findLeaguesAvailableInData,
    findMinNumberOfGames,
    findPlayerRecords,
    findAllTeamRecords,
} from '../helpers/recordsHelper';
import { config } from '../config';

function Records(props: RecordsProps) {
    const stats = props.stats;

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const currentYear = new Date().getFullYear();
    const yearInTitle =
        !isNaN(Number(stats.statsYear)) &&
        currentYear !== Number(stats.statsYear)
            ? `${stats.statsYear.toLowerCase()}`
            : '';

    const { initialTeamRecords, teamsFound } = findLeaguesAvailableInData(
        stats.playerResults
    );

    const { highestTotalGames, teamRecordsWithMinGames } = findMinNumberOfGames(
        stats.playerResults,
        teamsFound,
        initialTeamRecords
    );

    const { teamRecords, combinedStats } = findPlayerRecords(
        stats.playerResults,
        teamsFound,
        teamRecordsWithMinGames,
        highestTotalGames
    );

    function returnAllComponentsForTeams() {
        return Object.entries(config.historicTeamInfo)
            .map(([teamKey, teamNames]) => {
                const tabDisplayname = teamKey.toUpperCase();
                const teamsFound = findAllTeamRecords(teamNames, teamRecords);

                if (teamsFound.length > 0) {
                    return (
                        <TeamTabsWrapper
                            displayname={tabDisplayname}
                            children={
                                <div>
                                    {teamsFound.map(
                                        (
                                            {
                                                teamName,
                                                teamRecord,
                                                bTeamRecord,
                                            },
                                            index
                                        ) => (
                                            <div key={`${teamName}-${index}`}>
                                                {teamRecord && (
                                                    <IndividualRecords
                                                        stats={teamRecord}
                                                        teamName={teamName}
                                                        bTeam={false}
                                                    />
                                                )}
                                                {bTeamRecord && (
                                                    <IndividualRecords
                                                        stats={bTeamRecord}
                                                        teamName={teamName}
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

                return null;
            })
            .filter(Boolean) as React.ReactElement<{ displayname: string }>[]; // Remove nulls so only tabs with data are rendered
    }

    if (combinedStats?.mostGames > 0) {
        return (
            <div id="records">
                <h1>{yearInTitle} records</h1>
                <TeamTabs
                    allCombinedComponent={
                        <CombinedRecords stats={combinedStats} />
                    }
                    teamComponents={returnAllComponentsForTeams()}
                />
                <br />
                <p className="footnote">Last Updated: {stats.lastUpdated}</p>
            </div>
        );
    } else {
        return (
            <div className="center" style={{ width: '95%' }}>
                <h1>records</h1>
                <p>No records available for the selected year</p>
            </div>
        );
    }
}

export default Records;
