import { expect } from 'chai';
import {
    combineTeamStats,
    returnPlayerStatsForTeam,
    returnTeamNamesWithGames,
    findAllTeamStats,
} from '../teamStatsHelper';
import { PlayerResultsStatsFile } from '../../types/interfaces';
import stats2022 from '../../data/stanningleyStats2022.json';
import stats2023 from '../../data/stanningleyStats2023.json';
import stats2024 from '../../data/stanningleyStats2024.json';

describe('#teamStatsHelper Tests', () => {
    describe('#CombinedTeamStats()', () => {
        const stats = stats2022;

        let combinedStats = combineTeamStats(stats.teamResults);

        it('Total wins are calculated correctly', () => {
            expect(combinedStats.totalWins).to.equal(51);
        });

        it('Win breakdown are calculated correctly', () => {
            expect(combinedStats.combinedAwayWins).to.equal(22);
            expect(combinedStats.combinedHomeWins).to.equal(28);
            expect(combinedStats.combinedCupWins).to.equal(1);
        });

        it('Total losses are calculated correctly', () => {
            expect(combinedStats.totalLosses).to.equal(14);
        });

        it('Losses breakdown are calculated correctly', () => {
            expect(combinedStats.combinedAwayLosses).to.equal(8);
            expect(combinedStats.combinedHomeLosses).to.equal(3);
            expect(combinedStats.combinedCupLosses).to.equal(3);
        });

        it('Total draws are calculated correctly', () => {
            expect(combinedStats.totalDraws).to.equal(3);
        });

        it('Draws breakdown are calculated correctly', () => {
            expect(combinedStats.combinedAwayDraws).to.equal(2);
            expect(combinedStats.combinedHomeDraws).to.equal(1);
        });
    });

    describe('#returnPlayerStatsForTeam()', () => {
        it('Correctly returns player stats for a specific day', () => {
            const playerStats: PlayerResultsStatsFile = stats2022.playerResults;

            const allPlayerStats = returnPlayerStatsForTeam(
                playerStats,
                'leeds saturday'
            );
            const player = allPlayerStats.find(
                (player) => player.player === 'andrew marshall'
            );

            expect(player).to.deep.contain({
                player: 'andrew marshall',
                games: 14,
                wins: 6,
                average: 1.0714285714285714,
                winPerc: 42.857142857142854,
            });
        });
    });

    describe('#returnTeamNamesWithGames()', () => {
        it('Correctly returns team names with games', () => {
            const playerStats: PlayerResultsStatsFile = stats2023.playerResults;

            const teamNames = returnTeamNamesWithGames(playerStats);
            expect(teamNames).to.deep.equal([
                'leeds half holiday',
                'leeds monday combined',
                'leeds saturday',
                'leeds thursday vets',
                'leeds tuesday',
                'leeds tuesday vets',
            ]);
        });
    });

    describe('#findAllTeamStats()', () => {
        const teams = [
            'leeds monday combined',
            'leeds saturday',
            'leeds tuesday',
            'leeds thursday vets',
            'leeds tuesday vets',
            'leeds half holiday',
        ];

        it('Should return stats for all teams with data', () => {
            const allStats = findAllTeamStats(teams, stats2024.teamResults);

            expect(allStats).to.be.an('array');
            expect(allStats.length).to.be.greaterThan(0);

            // Check that each item has the expected structure
            allStats.forEach((teamStat) => {
                expect(teamStat).to.have.property('teamName');
                expect(teamStat).to.have.property('teamStats');
                expect(teamStat).to.have.property('bTeamStats');
                expect(teamStat.teamName).to.be.a('string');
            });
        });

        it('Should include both A and B team stats when B teams exist', () => {
            const allStats = findAllTeamStats(teams, stats2024.teamResults);

            const saturdayTeam = allStats.find(
                (team) => team.teamName === 'leeds saturday'
            );

            expect(saturdayTeam).to.not.be.undefined;
            expect(saturdayTeam!.teamStats).to.not.be.null;
            expect(saturdayTeam!.bTeamStats).to.not.be.null;
        });

        it('Should have null B team stats when no B team exists', () => {
            const allStats = findAllTeamStats(teams, stats2022.teamResults);

            allStats.forEach((teamStat) => {
                expect(teamStat.bTeamStats).to.be.null;
            });
        });

        it('Should return correct team names based on historic team info', () => {
            const allStats = findAllTeamStats(teams, stats2023.teamResults);
            const teamNames = allStats.map((stat) => stat.teamName);

            expect(teamNames).to.include('leeds half holiday');
            expect(teamNames).to.include('leeds monday combined');
            expect(teamNames).to.include('leeds saturday');
            expect(teamNames).to.include('leeds thursday vets');
            expect(teamNames).to.include('leeds tuesday');
            expect(teamNames).to.include('leeds tuesday vets');
        });

        it('Should handle empty team results gracefully', () => {
            const allStats = findAllTeamStats(['leeds monday combined'], []);

            expect(allStats).to.be.an('array');
            allStats.forEach((teamStat) => {
                expect(teamStat.teamStats).to.be.null;
                expect(teamStat.bTeamStats).to.be.null;
            });
        });
    });
});
