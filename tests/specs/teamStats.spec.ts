import { expect } from '@playwright/test';
import { test } from '../utils/fixture';

test.describe('Team Stats', () => {
    test.beforeEach(async ({ teamStatsPage }) => {
        await teamStatsPage.goto();
    });

    test('Teams stats overview has correct stats for 2023', async ({
        teamStatsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2023);

        expect(teamStatsPage.totalGamesValue).toBeVisible();
        expect(teamStatsPage.tuesVetsGamesValue).toBeVisible({
            visible: false,
        });

        expect(teamStatsPage.totalGamesValue).toContainText('112');
        expect(teamStatsPage.totalWinsValue).toContainText('87');
        expect(teamStatsPage.totalLossesValue).toContainText('20');
        expect(teamStatsPage.totalDrawsValue).toContainText('5');
        expect(teamStatsPage.totalWinPercValue).toContainText('78%');
        expect(teamStatsPage.totalHomeWinPercValue).toContainText('94%');
        expect(teamStatsPage.totalAwayWinPercValue).toContainText('59%');
        expect(teamStatsPage.totalCupWinPercValue).toContainText('86%');
    });

    test('Teams stats for Tuesday Vets has correct stats for 2023', async ({
        teamStatsPage,
        teamTabsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2023);
        await teamTabsPage.selectTuesdayTab();

        expect(teamStatsPage.tuesVetsGamesValue).toBeVisible();
        expect(teamStatsPage.totalGamesValue).toBeVisible({ visible: false });

        expect(teamStatsPage.tuesVetsGamesValue).toContainText('22');
        expect(teamStatsPage.tuesVetsWinsValue).toContainText('21');
        expect(teamStatsPage.tuesVetsLossesValue).toContainText('1');
        expect(teamStatsPage.tuesVetsDrawsValue).toHaveCount(0);
        expect(teamStatsPage.tuesVetsWinPercValue).toContainText('95%');
        expect(teamStatsPage.tuesVetsHomeWinPercValue).toContainText('100%');
        expect(teamStatsPage.tuesVetsAwayWinPercValue).toContainText('89%');
        expect(teamStatsPage.tuesVetsCupWinPercValue).toContainText('100%');
    });

    test('Teams stats for Monday has correct stats for 2022', async ({
        teamStatsPage,
        teamTabsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2022);
        await teamTabsPage.selectMondayTab();

        expect(teamStatsPage.mondayGamesValue).toBeVisible();
        expect(teamStatsPage.totalGamesValue).toBeVisible({ visible: false });

        expect(teamStatsPage.mondayGamesValue).toContainText('20');
        expect(teamStatsPage.mondayWinsValue).toContainText('12');
        expect(teamStatsPage.mondayLossesValue).toContainText('5');
        expect(teamStatsPage.mondayDrawsValue).toContainText('3');
        expect(teamStatsPage.mondayWinPercValue).toContainText('60%');
        expect(teamStatsPage.mondayHomeWinPercValue).toContainText('70%');
        expect(teamStatsPage.mondayAwayWinPercValue).toContainText('50%');
        expect(teamStatsPage.mondayCupWinPercValue).toHaveCount(0);
    });

    test('Team stats dot not show for Wednesday in 2023 as teams did not exist', async ({
        teamTabsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2024);
        await teamTabsPage.selectWednesdayTab();

        await yearSelectPage.selectYear(2022);
        await expect(teamTabsPage.wednesdayTab).not.toBeVisible();
    });

    test('Team stats show B team if there is one', async ({
        teamStatsPage,
        teamTabsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2024);
        await teamTabsPage.selectMondayTab();

        await yearSelectPage.selectYear(2013);
        await expect(teamStatsPage.mondayTeamStats).toHaveCount(2);

        await yearSelectPage.selectYear(2021);
        await expect(teamStatsPage.mondayTeamStats).toHaveCount(1);
    });

    test('All Team stats show when all years is selected', async ({
        teamStatsPage,
        teamTabsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectAllYears();
        await expect(teamStatsPage.totalWinsValue).toBeVisible();

        const totalGames = await teamStatsPage.totalGamesValue.textContent();
        expect(Number(totalGames)).toBeGreaterThan(1700);
        const totalWins = await teamStatsPage.totalWinsValue.textContent();
        expect(Number(totalWins)).toBeGreaterThan(950);
        const totalLosses = await teamStatsPage.totalLossesValue.textContent();
        expect(Number(totalLosses)).toBeGreaterThan(650);
        const totalDraws = await teamStatsPage.totalDrawsValue.textContent();
        expect(Number(totalDraws)).toBeGreaterThan(40);
        expect(teamStatsPage.totalWinPercValue).toContainText('%');
        expect(teamStatsPage.totalHomeWinPercValue).toContainText('%');
        expect(teamStatsPage.totalAwayWinPercValue).toContainText('%');
        expect(teamStatsPage.totalCupWinPercValue).toContainText('%');

        await teamTabsPage.selectMondayTab();
        await expect(teamStatsPage.mondayTeamStats).toHaveCount(3);
    });

    test(`Stats year dropdown appears if there are multiple years of stats available`, async ({
        yearSelectPage,
    }) => {
        await yearSelectPage.checkYearDropdownHasEveryYearPlusAllYearsOption();
    });
});
