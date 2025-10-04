import { Locator, Page } from '@playwright/test';

export class RecordsPage {
    public readonly page: Page;

    public readonly mondayTeamRecords: Locator;

    public readonly overallWinRecord: Locator;
    public readonly overallWinsRecordPlayer: Locator;
    public readonly overallGamesRecord: Locator;
    public readonly overallGamesRecordPlayer: Locator;
    public readonly overallWinPercRecord: Locator;
    public readonly overallWinPercRecordPlayer: Locator;
    public readonly overallAverageRecord: Locator;
    public readonly overallAverageRecordPlayer: Locator;

    public readonly tuesVetsGameRecord: Locator;
    public readonly tuesVetsGamesRecordPlayer: Locator;
    public readonly tuesVetsWinRecord: Locator;
    public readonly tuesVetsWinsRecordPlayer: Locator;
    public readonly tuesVetsWinPercRecord: Locator;
    public readonly tuesVetsWinPercRecordPlayer: Locator;
    public readonly tuesVetsAverageRecord: Locator;
    public readonly tuesVetsAverageRecordPlayer: Locator;

    public readonly thurVetsGameRecord: Locator;
    public readonly thurVetsGamesRecordPlayer: Locator;
    public readonly thurVetsWinRecord: Locator;
    public readonly thurVetsWinsRecordPlayer: Locator;
    public readonly thurVetsWinPercRecord: Locator;
    public readonly thurVetsWinPercRecordPlayer: Locator;
    public readonly thurVetsAverageRecord: Locator;
    public readonly thurVetsAverageRecordPlayer: Locator;

    constructor(page: Page) {
        this.page = page;

        this.mondayTeamRecords = page.locator(
            '#team-select-tabs-tabpane-monday .team-records'
        );

        // Overall locators
        this.overallGamesRecord = page.locator(
            '#team-select-tabs-tabpane-Combined #mostGames'
        );
        this.overallGamesRecordPlayer = page.locator(
            '#team-select-tabs-tabpane-Combined #mostGamesPlayer'
        );
        this.overallWinRecord = page.locator(
            '#team-select-tabs-tabpane-Combined #mostWins'
        );
        this.overallWinsRecordPlayer = page.locator(
            '#team-select-tabs-tabpane-Combined #mostWinsPlayer'
        );
        this.overallWinPercRecord = page.locator(
            '#team-select-tabs-tabpane-Combined #bestWinPerc'
        );
        this.overallWinPercRecordPlayer = page.locator(
            '#team-select-tabs-tabpane-Combined #bestWinPercPlayer'
        );
        this.overallAverageRecord = page.locator(
            '#team-select-tabs-tabpane-Combined #bestAverage'
        );
        this.overallAverageRecordPlayer = page.locator(
            '#team-select-tabs-tabpane-Combined #bestAveragePlayer'
        );

        // Tuesday Vets locators
        this.tuesVetsGameRecord = page.locator(
            '#leeds-tuesday-vets-records #mostGames'
        );
        this.tuesVetsGamesRecordPlayer = page.locator(
            '#leeds-tuesday-vets-records #mostGamesPlayer'
        );
        this.tuesVetsWinRecord = page.locator(
            '#leeds-tuesday-vets-records #mostWins'
        );
        this.tuesVetsWinsRecordPlayer = page.locator(
            '#leeds-tuesday-vets-records #mostWinsPlayer'
        );
        this.tuesVetsWinPercRecord = page.locator(
            '#leeds-tuesday-vets-records #bestWinPerc'
        );
        this.tuesVetsWinPercRecordPlayer = page.locator(
            '#leeds-tuesday-vets-records #bestWinPercPlayer'
        );
        this.tuesVetsAverageRecord = page.locator(
            '#leeds-tuesday-vets-records #bestAverage'
        );
        this.tuesVetsAverageRecordPlayer = page.locator(
            '#leeds-tuesday-vets-records #bestAveragePlayer'
        );

        // Thursday Vets locators
        this.thurVetsGameRecord = page.locator(
            '#leeds-thursday-vets-records #mostGames'
        );
        this.thurVetsGamesRecordPlayer = page.locator(
            '#leeds-thursday-vets-records #mostGamesPlayer'
        );
        this.thurVetsWinRecord = page.locator(
            '#leeds-thursday-vets-records #mostWins'
        );
        this.thurVetsWinsRecordPlayer = page.locator(
            '#leeds-thursday-vets-records #mostWinsPlayer'
        );
        this.thurVetsWinPercRecord = page.locator(
            '#leeds-thursday-vets-records #bestWinPerc'
        );
        this.thurVetsWinPercRecordPlayer = page.locator(
            '#leeds-thursday-vets-records #bestWinPercPlayer'
        );
        this.thurVetsAverageRecord = page.locator(
            '#leeds-thursday-vets-records #bestAverage'
        );
        this.thurVetsAverageRecordPlayer = page.locator(
            '#leeds-thursday-vets-records #bestAveragePlayer'
        );
    }

    async goto() {
        await this.page.goto('/#/stats/records');
    }
}
