import { config } from '../config';
import { Result, TeamResultsStatsFile } from '../types/interfaces';

export function returnStructuredResultsArray(results: string[]) {
    const resultsArray = results.map((result: string) => {
        const resultParts = result.split(' - ');

        const homePart = resultParts[0].trim();
        const homeScoreMatch = homePart.match(/([0-9.]+)$/);
        const homeScore = homeScoreMatch ? homeScoreMatch[1] : '';
        const homePlayer = homePart.replace(/([0-9.]+)$/, '').trim();

        const awayPart = resultParts[1].trim();
        const awayScoreMatch = awayPart.match(/^([0-9.]+)/);
        const awayScore = awayScoreMatch ? awayScoreMatch[1] : '';
        const awayPlayer = awayPart.replace(/^([0-9.]+)\s*/, '').trim();

        const structuredResult: Result = {
            home: {
                name: homePlayer,
                score: homeScore,
            },
            away: {
                name: awayPlayer,
                score: awayScore,
            },
        };

        return structuredResult;
    });

    return resultsArray;
}

export function returnResultsArrayForTeamsWithGames(
    teamResults: TeamResultsStatsFile[] | undefined
) {
    if (!teamResults) return [];

    return teamResults
        .map((team) => {
            const teamName = config.allTeamsInLeaguesSince2013.find((t) =>
                t.toLowerCase().endsWith(team.day.toLowerCase())
            );

            const results: Result[] = team.results
                ? returnStructuredResultsArray(team.results)
                : [];

            return {
                name: teamName,
                results,
            };
        })
        .filter((team) => team.results.length > 0);
}
