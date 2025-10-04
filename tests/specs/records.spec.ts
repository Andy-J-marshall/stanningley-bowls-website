import { expect } from '@playwright/test';
import { test } from '../utils/fixture';

test.describe('Records', () => {
    test.beforeEach(async ({ recordsPage }) => {
        await recordsPage.goto();
    });

    test('Records overview has correct records for 2023', async ({
        recordsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2023);

        expect(recordsPage.overallGamesRecord).toBeVisible();
        expect(recordsPage.thurVetsWinRecord).toBeVisible({ visible: false });

        expect(recordsPage.overallGamesRecord).toContainText('92');
        expect(recordsPage.overallGamesRecordPlayer).toContainText(
            'Shirley Biancardo'
        );
        expect(recordsPage.overallWinRecord).toContainText('81');
        expect(recordsPage.overallWinsRecordPlayer).toContainText(
            'Shirley Biancardo'
        );
        expect(recordsPage.overallWinPercRecord).toContainText('88%');
        expect(recordsPage.overallWinPercRecordPlayer).toContainText(
            'Shirley Biancardo'
        );
        expect(recordsPage.overallAverageRecord).toContainText('9.11');
        expect(recordsPage.overallAverageRecordPlayer).toContainText(
            'Mario Biancardo'
        );
    });

    test('Records has correct records for Thursday Vets in 2023', async ({
        recordsPage,
        teamTabsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2023);
        await teamTabsPage.selectThursdayTab();

        expect(recordsPage.thurVetsWinRecord).toBeVisible();
        expect(recordsPage.overallGamesRecord).toBeVisible({ visible: false });

        expect(recordsPage.thurVetsGameRecord).toContainText('13');
        expect(recordsPage.thurVetsGamesRecordPlayer).toContainText(
            'Dave Eaton, Mario Biancardo'
        );
        expect(recordsPage.thurVetsWinRecord).toContainText('12');
        expect(recordsPage.thurVetsWinsRecordPlayer).toContainText(
            'Mario Biancardo'
        );
        expect(recordsPage.thurVetsWinPercRecord).toContainText('92%');
        expect(recordsPage.thurVetsWinPercRecordPlayer).toContainText(
            'Mario Biancardo'
        );
        expect(recordsPage.thurVetsAverageRecord).toContainText('10.85');
        expect(recordsPage.thurVetsAverageRecordPlayer).toContainText(
            'Mario Biancardo'
        );
    });

    test('Records has correct records for Tuesday Vets in 2022', async ({
        recordsPage,
        teamTabsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2022);
        await teamTabsPage.selectTuesdayTab();

        expect(recordsPage.tuesVetsWinRecord).toBeVisible();
        expect(recordsPage.overallGamesRecord).toBeVisible({ visible: false });

        expect(recordsPage.tuesVetsGameRecord).toContainText('17');
        expect(recordsPage.tuesVetsGamesRecordPlayer).toContainText(
            'Duncan Mcphail, Jim Moorin, Mario Biancardo, Shirley Biancardo, Stewart Watson'
        );
        expect(recordsPage.tuesVetsWinRecord).toContainText('15');
        expect(recordsPage.tuesVetsWinsRecordPlayer).toContainText(
            'Jim Moorin, Shirley Biancardo, Stewart Watson'
        );
        expect(recordsPage.tuesVetsWinPercRecord).toContainText('100%');
        expect(recordsPage.tuesVetsWinPercRecordPlayer).toContainText(
            'John Armitage'
        );
        expect(recordsPage.tuesVetsAverageRecord).toContainText('12.36');
        expect(recordsPage.tuesVetsAverageRecordPlayer).toContainText(
            'John Armitage'
        );
    });

    test('Records not show for Wednesday in 2022 as teams did not exist', async ({
        teamTabsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2024);
        await teamTabsPage.selectWednesdayTab();

        await yearSelectPage.selectYear(2022);
        await expect(teamTabsPage.wednesdayTab).not.toBeVisible();
    });

    test('Team records show B team if there is one', async ({
        recordsPage,
        teamTabsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectYear(2024);
        await teamTabsPage.selectMondayTab();

        await yearSelectPage.selectYear(2018);
        await expect(recordsPage.mondayTeamRecords).toHaveCount(2);

        await yearSelectPage.selectYear(2021);
        await expect(recordsPage.mondayTeamRecords).toHaveCount(1);
    });

    test('All Team records show when all years is selected', async ({
        recordsPage,
        teamTabsPage,
        yearSelectPage,
    }) => {
        await yearSelectPage.selectAllYears();
        await expect(recordsPage.overallAverageRecord).toBeVisible();

        await teamTabsPage.selectMondayTab();
        await expect(recordsPage.mondayTeamRecords).toHaveCount(3);
    });

    test('Records overview displays for all years', async ({
        recordsPage,
        yearSelectPage,
    }) => {
        await recordsPage.goto();
        await yearSelectPage.selectAllYears();

        expect(
            Number(await recordsPage.overallGamesRecord.textContent())
        ).toBeGreaterThan(650);
        expect(recordsPage.overallGamesRecordPlayer).toContainText(
            'Donald Shaw'
        );
        expect(
            Number(await recordsPage.overallWinRecord.textContent())
        ).toBeGreaterThan(400);
        expect(recordsPage.overallWinsRecordPlayer).toContainText(
            'Donald Shaw'
        );
    });

    test(`Records year dropdown appears if there are multiple years of records available`, async ({
        yearSelectPage,
    }) => {
        await yearSelectPage.checkYearDropdownHasEveryYearPlusAllYearsOption();
    });
});
