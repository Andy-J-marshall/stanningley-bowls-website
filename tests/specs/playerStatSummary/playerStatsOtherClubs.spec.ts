import { expect } from '@playwright/test';
import { test } from '../../utils/fixture';

test.describe('Player stats - Other Clubs', () => {
    test.beforeEach(async ({ playerSummaryPage }) => {
        await playerSummaryPage.goto();
    });

    test('Detailed stats for John Armitage stats are correct', async ({
        detailedPlayerStatsPage,
        playerSearchPage,
        playerStatOptionsPage,
        playerStatsOverviewPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2023);
        await playerStatOptionsPage.selectClubFromDropdown('Littlemoor');

        await playerSearchPage.searchForPlayer('john armitage');

        await playerStatsOverviewPage.validateOverviewStats(57, 43, 5.21);
        await expect(playerStatsOverviewPage.biggestWin).toHaveText('21 - 3');

        await expect(detailedPlayerStatsPage.overviewAccordion).toBeVisible();
        await expect(detailedPlayerStatsPage.winLossAccordion).toBeVisible();
        await expect(detailedPlayerStatsPage.aggAccordion).toBeVisible();
        await expect(detailedPlayerStatsPage.teamAccordion).toBeVisible();
        await expect(detailedPlayerStatsPage.resultsAccordion).toBeVisible();
    });

    test('Summary of John Armitage stats are correct', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        playerSummaryPage.setPlayerToFind('john armitage');

        await playerStatOptionsPage.selectClubFromDropdown('Littlemoor');

        await yearSelectPage.selectYear(2023);
        await playerSummaryPage.validateSummaryStats(57, 43, 75, 5.21);

        await yearSelectPage.selectYear(2022);
        await playerSummaryPage.validateSummaryStats(58, 40, 69, 3.76);
    });

    test('Summary of Jim Moorin stats for all clubs is correct', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        playerSummaryPage.setPlayerToFind('jim moorin');

        await playerStatOptionsPage.selectClubFromDropdown('Littlemoor');
        await playerStatOptionsPage.selectAllClubsFromDropdown();

        await yearSelectPage.selectYear(2023);
        await playerSummaryPage.validateSummaryStats(111, 66, 59, 2.23);

        await yearSelectPage.selectYear(2022);
        await playerSummaryPage.validateSummaryStats(114, 83, 73, 5.57);
    });

    test('Can filter for team specific stats in 2014', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        playerSummaryPage.setPlayerToFind('steve gardner');

        await playerStatOptionsPage.selectClubFromDropdown('Littlemoor');
        await yearSelectPage.selectYear(2014);
        await playerStatOptionsPage.selectTeamFromDropdown('Mirfield (B)');

        await expect(playerSummaryPage.playerRows).toHaveCount(3);
        await playerSummaryPage.validateSummaryStats(14, 9, 64, 2.07);
    });

    test('Can filter venue stats in 2024', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        playerSummaryPage.setPlayerToFind('linda barrand');

        await playerStatOptionsPage.selectClubFromDropdown('Pudsey');
        await yearSelectPage.selectYear(2024);

        await playerSummaryPage.validateSummaryStats(26, 4, 15, -8.35);

        await playerStatOptionsPage.selectCupOnlyRadio();
        await playerSummaryPage.validateSummaryStats(1, 0, 0, -16.0);

        await playerStatOptionsPage.selectHomeOnlyRadio();
        await playerSummaryPage.validateSummaryStats(12, 2, 17, -6.50);

        await playerStatOptionsPage.selectAwayOnlyRadio();
        await playerSummaryPage.validateSummaryStats(13, 2, 15, -9.46);
    });

    test('Can filter game type stats in 2023', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        playerSummaryPage.setPlayerToFind('richard hodgson');

        await playerStatOptionsPage.selectClubFromDropdown('Pudsey');
        await yearSelectPage.selectYear(2023);

        await playerStatOptionsPage.selectSinglesOnlyRadio();
        await playerSummaryPage.validateSummaryStats(55, 32, 58, 1.96);

        await playerStatOptionsPage.selectPairsOnlyRadio();
        await playerSummaryPage.validateSummaryStats(3, 1, 33, 0.0);
    });

    test('Summary of Jack Roberts stats since 2013 are correct', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        playerSummaryPage.setPlayerToFind('jack roberts');

        await playerStatOptionsPage.selectClubFromDropdown('Littlemoor');
        await yearSelectPage.selectAllYears();

        await playerSummaryPage.validateSummaryStats(110, 40, 36, -2.06);
    });

    test('Can switch between different club stats', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2023);
        await expect(playerSummaryPage.playerRows).toHaveCount(32);

        await playerStatOptionsPage.selectClubFromDropdown('Littlemoor');
        await expect(playerSummaryPage.playerRows).toHaveCount(6);

        await playerStatOptionsPage.selectClubFromDropdown('Stanningley');
        await expect(playerSummaryPage.playerRows).toHaveCount(32);
    });

    test('Switching clubs does not reset the team dropdown', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2019);
        await playerStatOptionsPage.selectTeamFromDropdown(
            'Bradford Half Holiday'
        );
        await expect(playerSummaryPage.playerRows).toHaveCount(9);

        await playerStatOptionsPage.selectClubFromDropdown('Littlemoor');
        await expect(playerSummaryPage.playerRows).toHaveCount(1);

        await playerStatOptionsPage.selectClubFromDropdown('Pudsey');
        await expect(playerSummaryPage.playerRows).toHaveCount(1);

        await playerStatOptionsPage.selectTeamFromDropdown('Bradford Saturday');
        await expect(playerSummaryPage.playerRows).toHaveCount(2);

        await playerStatOptionsPage.selectClubFromDropdown('Stanningley');
        await expect(playerSummaryPage.playerRows).toHaveCount(15);

        await playerStatOptionsPage.selectClubFromDropdown('Littlemoor');
        await expect(playerSummaryPage.playerRows).toHaveCount(1);
    });
});
