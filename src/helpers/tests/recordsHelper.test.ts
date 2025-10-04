import { assert, expect } from 'chai';
import {
    findLeaguesAvailableInData,
    findMinNumberOfGames,
    findPlayerRecords,
    findTeamRecords,
    findAllTeamRecords,
} from '../recordsHelper';
import { config } from '../../config';
import stats2022 from '../../data/stanningleyStats2022.json';
import stats2024 from '../../data/stanningleyStats2024.json';

const playerResults22 = JSON.parse(JSON.stringify(stats2022.playerResults));
const playerResults24 = JSON.parse(JSON.stringify(stats2024.playerResults));

describe('#RecordsHelper Tests', () => {
    describe('findLeaguesAvailableInData', () => {
        it('Can return list of teams found', () => {
            const { teamsFound } = findLeaguesAvailableInData(playerResults22);
            expect(teamsFound).to.deep.equal([
                'leeds monday combined',
                'leeds tuesday vets',
                'leeds thursday vets',
                'leeds saturday',
            ]);
        });

        it('Can return correct teams records', () => {
            const { initialTeamRecords } =
                findLeaguesAvailableInData(playerResults22);

            expect(Object.keys(initialTeamRecords).length).to.equal(39);
            const teamRecord = initialTeamRecords['leeds monday combined'];

            expect(teamRecord).to.deep.equal({
                minGames: 1,
                mostGames: 0,
                mostWins: 0,
                bestAverage: -27,
                bestWinPerc: 0,
                mostGamesPlayer: [],
                mostWinsPlayer: [],
                bestAveragePlayer: [],
                bestWinPercPlayer: [],
            });
        });
    });

    describe('findMinNumberOfGames', () => {
        it('Returns minimum number of games to qualify for team records', () => {
            const { teamsFound, initialTeamRecords } =
                findLeaguesAvailableInData(playerResults22);
            const { highestTotalGames } = findMinNumberOfGames(
                playerResults22,
                teamsFound,
                initialTeamRecords
            );

            expect(highestTotalGames).to.equal(53);
        });

        it('Returns minimum number of games to qualify for each team in the team records', () => {
            const { teamsFound, initialTeamRecords } =
                findLeaguesAvailableInData(playerResults22);
            const { teamRecordsWithMinGames } = findMinNumberOfGames(
                playerResults22,
                teamsFound,
                initialTeamRecords
            );

            const teamRecord = teamRecordsWithMinGames['leeds monday combined'];
            const teamRecord2 = teamRecordsWithMinGames['leeds saturday'];
            const teamWithNoStatsDataForYear =
                teamRecordsWithMinGames['leeds tuesday'];

            expect(teamRecord.mostGames).to.equal(19);
            expect(teamRecord2.mostGames).to.equal(17);
            expect(teamWithNoStatsDataForYear.mostGames).to.equal(0);
        });
    });

    describe('findPlayerRecords', () => {
        it('Return player records', () => {
            const { teamsFound, initialTeamRecords } =
                findLeaguesAvailableInData(playerResults22);
            const { highestTotalGames, teamRecordsWithMinGames } =
                findMinNumberOfGames(
                    playerResults22,
                    teamsFound,
                    initialTeamRecords
                );
            const { teamRecords, combinedStats } = findPlayerRecords(
                playerResults22,
                teamsFound,
                teamRecordsWithMinGames,
                highestTotalGames
            );

            const teamsInTeamRecords = Object.keys(teamRecords);
            const teamsInRecordsWithGames = teamsInTeamRecords.filter(
                (t) => teamRecords[t].mostWins > 0
            );

            const {
                minGames,
                mostGamesPlayer,
                mostGames,
                mostWins,
                mostWinsPlayer,
                bestWinPerc,
                bestWinPercPlayer,
                bestAverage,
                bestAveragePlayer,
            } = combinedStats;

            expect(minGames).to.equal(15);
            expect(mostGamesPlayer).to.deep.equal(['paul bowes']);
            expect(mostGames).to.equal(53);
            expect(mostWins).to.equal(43);
            expect(mostWinsPlayer).to.deep.equal(['paul bowes']);
            expect(bestWinPerc).to.equal(100);
            expect(bestWinPercPlayer).to.deep.equal(['john armitage']);
            expect(bestAverage).to.equal(11.666666666666666);
            expect(bestAveragePlayer).to.deep.equal(['john armitage']);

            expect(teamsInTeamRecords).to.have.length(39);
            expect(teamsInRecordsWithGames).to.have.length(4);
        });
    });

    describe('findTeamRecords', () => {
        const { initialTeamRecords, teamsFound } =
            findLeaguesAvailableInData(playerResults24);

        const { teamRecordsWithMinGames, highestTotalGames } =
            findMinNumberOfGames(
                playerResults24,
                teamsFound,
                initialTeamRecords
            );

        const { teamRecords } = findPlayerRecords(
            playerResults24,
            teamsFound,
            teamRecordsWithMinGames,
            highestTotalGames
        );

        it('B team records should be null when there is no B team on that day', () => {
            const teamInfo = Object.values(config.historicTeamInfo).find((t) =>
                t.includes('leeds tuesday')
            );

            if (!teamInfo) {
                assert.fail('Team info not found in config file');
            }

            const { bTeamRecord } = findTeamRecords(
                teamInfo,
                teamRecordsWithMinGames
            );

            expect(bTeamRecord).to.be.null;
        });

        it('Team name should be correctly returned', () => {
            const teamInfo = Object.values(config.historicTeamInfo).find((t) =>
                t.includes('leeds saturday')
            );

            if (!teamInfo) {
                assert.fail('Team info not found in config file');
            }

            const { teamName } = findTeamRecords(teamInfo, teamRecords);

            expect(teamName).to.equal('leeds saturday');
        });

        it('Team records should be correct', () => {
            const teamInfo = Object.values(config.historicTeamInfo).find((t) =>
                t.includes('leeds saturday')
            );

            if (!teamInfo) {
                assert.fail('Team info not found in config file');
            }

            const { teamRecord } = findTeamRecords(
                teamInfo!,
                teamRecordsWithMinGames
            );

            expect(teamRecord).to.deep.equal({
                minGames: 15,
                mostGames: 21,
                mostWins: 18,
                bestAverage: 8.15,
                bestWinPerc: 85.71428571428571,
                mostGamesPlayer: ['andrew marshall'],
                mostWinsPlayer: ['andrew marshall'],
                bestAveragePlayer: ['paul bowes'],
                bestWinPercPlayer: ['andrew marshall'],
            });
        });

        it('B team records should be correct', () => {
            const teamInfo = Object.values(config.historicTeamInfo).find((t) =>
                t.includes('leeds saturday')
            );

            if (!teamInfo) {
                assert.fail('Team info not found in config file');
            }

            const { bTeamRecord } = findTeamRecords(
                teamInfo!,
                teamRecordsWithMinGames
            );

            expect(bTeamRecord).to.deep.equal({
                minGames: 12,
                mostGames: 17,
                mostWins: 13,
                bestAverage: 6.4,
                bestWinPerc: 81.25,
                mostGamesPlayer: ['colin haque'],
                mostWinsPlayer: ['paul leonard'],
                bestAveragePlayer: ['alison woodfine'],
                bestWinPercPlayer: ['paul leonard'],
            });
        });
    });

    describe('findAllTeamRecords', () => {
        const { initialTeamRecords, teamsFound } =
            findLeaguesAvailableInData(playerResults24);

        const { teamRecordsWithMinGames, highestTotalGames } =
            findMinNumberOfGames(
                playerResults24,
                teamsFound,
                initialTeamRecords
            );

        const { teamRecords } = findPlayerRecords(
            playerResults24,
            teamsFound,
            teamRecordsWithMinGames,
            highestTotalGames
        );

        const teams = [
            'leeds monday combined',
            'leeds saturday',
            'leeds tuesday',
            'leeds thursday vets',
            'leeds tuesday vets',
            'leeds half holiday',
        ];

        it('Should return records for all teams with data', () => {
            const allRecords = findAllTeamRecords(teams, teamRecords);

            expect(allRecords).to.be.an('array');
            expect(allRecords.length).to.be.greaterThan(0);

            allRecords.forEach((teamRecord) => {
                expect(teamRecord).to.have.property('teamName');
                expect(teamRecord).to.have.property('teamRecord');
                expect(teamRecord).to.have.property('bTeamRecord');
                expect(teamRecord.teamName).to.be.a('string');
            });
        });

        it('Should include both A and B team records when B teams exist', () => {
            const allRecords = findAllTeamRecords(teams, teamRecords);

            const saturdayTeam = allRecords.find(
                (team) => team.teamName === 'leeds saturday'
            );

            expect(saturdayTeam).to.not.be.undefined;
            expect(saturdayTeam!.teamRecord).to.not.be.null;
            expect(saturdayTeam!.bTeamRecord).to.not.be.null;
        });

        it('Should have null B team records when no B team exists', () => {
            const allRecords = findAllTeamRecords(teams, teamRecords);

            const tuesdayTeam = allRecords.find(
                (team) => team.teamName === 'leeds tuesday'
            );

            if (tuesdayTeam) {
                expect(tuesdayTeam.bTeamRecord).to.be.null;
            }
        });

        it('Should return correct team names', () => {
            const allRecords = findAllTeamRecords(teams, teamRecords);
            const teamNames = allRecords.map((record) => record.teamName);

            expect(teamNames).to.include('leeds monday combined');
            expect(teamNames).to.include('leeds saturday');
            expect(teamNames).to.include('leeds tuesday');
            expect(teamNames).to.include('leeds thursday vets');
        });

        it('Should only return teams with actual records (bestAverage > -21)', () => {
            const allRecords = findAllTeamRecords(teams, teamRecords);

            allRecords.forEach((teamRecord) => {
                expect(teamRecord.teamRecord.bestAverage).to.be.greaterThan(
                    -21
                );
            });
        });

        it('Should handle empty team list gracefully', () => {
            const allRecords = findAllTeamRecords([], teamRecords);

            expect(allRecords).to.be.an('array');
            expect(allRecords.length).to.equal(0);
        });
    });
});
