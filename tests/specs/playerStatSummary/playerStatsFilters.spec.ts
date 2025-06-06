import { expect } from '@playwright/test';
import { test } from '../../utils/fixture';

test.describe('Player summary stats - filters', () => {
    test.beforeEach(async ({ playerSummaryPage }) => {
        await playerSummaryPage.goto();
    });

    test('Summary of Andrew Marshall stats for club with filters are correct', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        playerSummaryPage.setPlayerToFind('andrew marshall');

        await yearSelectPage.selectYear(2023);

        // All venues
        await playerSummaryPage.validateSummaryStats(51, 40, 78, 5.49);

        await playerStatOptionsPage.selectSinglesOnlyRadio();
        await playerSummaryPage.validateSummaryStats(36, 30, 83, 5.81);

        await playerStatOptionsPage.selectPairsOnlyRadio();
        await playerSummaryPage.validateSummaryStats(15, 10, 67, 4.73);

        // Home only
        await playerStatOptionsPage.selectHomeOnlyRadio();

        await playerStatOptionsPage.selectAllGameTypesRadio();
        await playerSummaryPage.validateSummaryStats(24, 21, 88, 7.96);

        await playerStatOptionsPage.selectSinglesOnlyRadio();
        await playerSummaryPage.validateSummaryStats(16, 14, 88, 7.94);

        await playerStatOptionsPage.selectPairsOnlyRadio();
        await playerSummaryPage.validateSummaryStats(8, 7, 88, 8.0);

        // Away only
        await playerStatOptionsPage.selectAwayOnlyRadio();

        await playerStatOptionsPage.selectAllGameTypesRadio();
        await playerSummaryPage.validateSummaryStats(20, 14, 70, 4.0);

        await playerStatOptionsPage.selectSinglesOnlyRadio();
        await playerSummaryPage.validateSummaryStats(13, 11, 85, 5.62);

        await playerStatOptionsPage.selectPairsOnlyRadio();
        await playerSummaryPage.validateSummaryStats(7, 3, 43, 1.0);

        // Cup only
        await playerStatOptionsPage.selectCupOnlyRadio();

        await playerStatOptionsPage.selectAllGameTypesRadio();
        await playerSummaryPage.validateSummaryStats(7, 5, 71, 1.29);

        await playerStatOptionsPage.selectSinglesOnlyRadio();
        await playerSummaryPage.validateSummaryStats(7, 5, 71, 1.29);
    });

    test('Summary of Richard Hodgson stats for all clubs with filters are correct', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        playerSummaryPage.setPlayerToFind('richard hodgson');

        await playerStatOptionsPage.selectAllClubsFromDropdown();
        await yearSelectPage.selectYear(2023);

        // All venues
        await playerSummaryPage.validateSummaryStats(58, 33, 57, 1.86);

        await playerStatOptionsPage.selectSinglesOnlyRadio();
        await playerSummaryPage.validateSummaryStats(55, 32, 58, 1.96);

        await playerStatOptionsPage.selectPairsOnlyRadio();
        await playerSummaryPage.validateSummaryStats(3, 1, 33, 0.0);

        // Home only
        await playerStatOptionsPage.selectHomeOnlyRadio();

        await playerStatOptionsPage.selectAllGameTypesRadio();
        await playerSummaryPage.validateSummaryStats(31, 20, 65, 3.9);

        await playerStatOptionsPage.selectSinglesOnlyRadio();
        await playerSummaryPage.validateSummaryStats(31, 20, 65, 3.9);

        // Away only
        await playerStatOptionsPage.selectAwayOnlyRadio();

        await playerStatOptionsPage.selectAllGameTypesRadio();
        await playerSummaryPage.validateSummaryStats(25, 11, 44, -1.28);

        await playerStatOptionsPage.selectSinglesOnlyRadio();
        await playerSummaryPage.validateSummaryStats(23, 11, 48, -0.91);

        await playerStatOptionsPage.selectPairsOnlyRadio();
        await playerSummaryPage.validateSummaryStats(2, 0, 0, -5.5);

        // Cup only
        await playerStatOptionsPage.selectCupOnlyRadio();

        await playerStatOptionsPage.selectAllGameTypesRadio();
        await playerSummaryPage.validateSummaryStats(2, 2, 100, 9.5);

        await playerStatOptionsPage.selectSinglesOnlyRadio();
        await playerSummaryPage.validateSummaryStats(1, 1, 100, 8.0);

        await playerStatOptionsPage.selectPairsOnlyRadio();
        await playerSummaryPage.validateSummaryStats(1, 1, 100, 11.0);
    });

    test('Summary of Bernie Miller stats since 2013 for club are correct', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        playerSummaryPage.setPlayerToFind('bernie miller');

        await yearSelectPage.selectAllYears();
        await playerSummaryPage.validateSummaryStats(416, 242, 58, 2.37);

        await playerStatOptionsPage.selectSinglesOnlyRadio();
        await playerSummaryPage.validateSummaryStats(354, 211, 60, 2.42);

        await playerStatOptionsPage.selectPairsOnlyRadio();
        await playerSummaryPage.validateSummaryStats(62, 31, 50, 2.08);
    });

    test('Summary of Neil Porter stats for singles and pairs games for all clubs are correct', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        playerSummaryPage.setPlayerToFind('neil porter');

        await playerStatOptionsPage.selectAllClubsFromDropdown();
        await yearSelectPage.selectYear(2024);

        await playerStatOptionsPage.selectSinglesOnlyRadio();
        await playerSummaryPage.validateSummaryStats(77, 55, 71, 5.26);
        
        await playerStatOptionsPage.selectAllGameTypesRadio();
        await playerSummaryPage.validateSummaryStats(78, 56, 72, 5.35);

        await playerStatOptionsPage.selectPairsOnlyRadio();
        await playerSummaryPage.validateSummaryStats(1, 1, 100, 12);
    });

    test('Summary of Bernie Miller stats since 2013 for all clubs and all years is correct', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        playerSummaryPage.setPlayerToFind('bernie miller');
        await playerStatOptionsPage.selectAllClubsFromDropdown();

        await yearSelectPage.selectAllYears();
        await playerSummaryPage.validateSummaryStats(416, 242, 58, 2.37);

        await playerStatOptionsPage.selectSinglesOnlyRadio();
        await playerSummaryPage.validateSummaryStats(354, 211, 60, 2.42);

        await playerStatOptionsPage.selectPairsOnlyRadio();
        await playerSummaryPage.validateSummaryStats(62, 31, 50, 2.08);
    });

    test('Can filter for team specific stats in 2022', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        playerSummaryPage.setPlayerToFind('kevin waller');

        await yearSelectPage.selectYear(2022);
        await playerStatOptionsPage.selectTeamFromDropdown('Leeds Saturday');

        await playerSummaryPage.validateSummaryStats(13, 10, 77, 6.46);
    });

    test('Can filter for team specific stats in 2013', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        playerSummaryPage.setPlayerToFind('chris gardner');

        await yearSelectPage.selectYear(2013);
        await playerStatOptionsPage.selectTeamFromDropdown('Bradford Saturday');

        await expect(playerSummaryPage.playerRows).toHaveCount(12);
        await playerSummaryPage.validateSummaryStats(20, 16, 80, 6.0);
    });

    test('Can filter for team specific stats for all years', async ({
        playerSummaryPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        playerSummaryPage.setPlayerToFind('adam sandilands');

        await yearSelectPage.selectAllYears();
        await playerStatOptionsPage.selectTeamFromDropdown(
            'Airewharfe Monday (B)'
        );

        await playerSummaryPage.validateSummaryStats(60, 20, 33, -4.03);
    });

    test('Other options are disabled when selecting specific team', async ({
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2023);

        await playerStatOptionsPage.selectTeamFromDropdown('Leeds Saturday');

        await expect(playerStatOptionsPage.clubSelectDropdown).toBeEnabled();
        await expect(playerStatOptionsPage.singlesOnlyRadio).toBeDisabled();
        await expect(playerStatOptionsPage.pairsOnlyRadio).toBeDisabled();
        await expect(playerStatOptionsPage.allGameTypesRadio).toBeDisabled();
        await expect(playerStatOptionsPage.homeOnlyRadio).toBeDisabled();
        await expect(playerStatOptionsPage.awayOnlyRadio).toBeDisabled();
        await expect(playerStatOptionsPage.cupOnlyRadio).toBeDisabled();
        await expect(playerStatOptionsPage.allVenuesRadio).toBeDisabled();

        await playerStatOptionsPage.selectTeamFromDropdown('All Teams');
        await expect(playerStatOptionsPage.clubSelectDropdown).toBeEnabled();
        await expect(playerStatOptionsPage.singlesOnlyRadio).toBeEnabled();
        await expect(playerStatOptionsPage.pairsOnlyRadio).toBeEnabled();
        await expect(playerStatOptionsPage.allGameTypesRadio).toBeEnabled();
        await expect(playerStatOptionsPage.homeOnlyRadio).toBeEnabled();
        await expect(playerStatOptionsPage.awayOnlyRadio).toBeEnabled();
        await expect(playerStatOptionsPage.cupOnlyRadio).toBeEnabled();
        await expect(playerStatOptionsPage.allVenuesRadio).toBeEnabled();
    });

    test('Team dropdown defaults to All Teams when selecting All Clubs', async ({
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2023);

        await playerStatOptionsPage.selectTeamFromDropdown('Leeds Saturday');
        await expect(playerStatOptionsPage.teamSelectDropdown).toHaveText(
            'Leeds Saturday'
        );

        await playerStatOptionsPage.selectAllClubsFromDropdown();
        await expect(playerStatOptionsPage.teamSelectDropdown).toHaveText(
            'All Teams'
        );
        await expect(playerStatOptionsPage.singlesOnlyRadio).toBeEnabled();
        await expect(playerStatOptionsPage.pairsOnlyRadio).toBeEnabled();
        await expect(playerStatOptionsPage.allGameTypesRadio).toBeEnabled();
        await expect(playerStatOptionsPage.homeOnlyRadio).toBeEnabled();
        await expect(playerStatOptionsPage.awayOnlyRadio).toBeEnabled();
        await expect(playerStatOptionsPage.cupOnlyRadio).toBeEnabled();
        await expect(playerStatOptionsPage.allVenuesRadio).toBeEnabled();
    });

    test('Clicking back to summary button remembers state of all stat toggles', async ({
        playerSummaryPage,
        playerSearchPage,
        playerStatOptionsPage,
        yearSelectPage,
    }) => {
        const name = 'Mabel Shaw';
        playerSummaryPage.setPlayerToFind(name);

        await playerStatOptionsPage.selectAllClubsFromDropdown();
        await yearSelectPage.selectAllYears();
        await playerStatOptionsPage.selectSinglesOnlyRadio();
        await playerStatOptionsPage.selectAwayOnlyRadio();

        await playerSummaryPage.validateSummaryStats(270, 149, 55, 1.29);

        await playerSearchPage.searchForPlayer(name);
        await playerSearchPage.clickBackToSummary();

        await expect(playerStatOptionsPage.singlesOnlyRadio).toBeChecked();
        await expect(playerStatOptionsPage.awayOnlyRadio).toBeChecked();

        await playerSummaryPage.validateSummaryStats(270, 149, 55, 1.29);
    });
});
