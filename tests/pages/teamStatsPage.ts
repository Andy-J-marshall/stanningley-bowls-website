import { Locator, Page } from '@playwright/test';

export class TeamStatsPage {
    public readonly page: Page;

    public readonly noStatsMessage: Locator;

    public readonly mondayTeamStats: Locator;

    public readonly totalGamesValue: Locator;
    public readonly totalWinsValue: Locator;
    public readonly totalLossesValue: Locator;
    public readonly totalDrawsValue: Locator;
    public readonly totalWinPercValue: Locator;
    public readonly totalHomeWinPercValue: Locator;
    public readonly totalAwayWinPercValue: Locator;
    public readonly totalCupWinPercValue: Locator;

    public readonly mondayGamesValue: Locator;
    public readonly mondayWinsValue: Locator;
    public readonly mondayLossesValue: Locator;
    public readonly mondayDrawsValue: Locator;
    public readonly mondayWinPercValue: Locator;
    public readonly mondayHomeWinPercValue: Locator;
    public readonly mondayAwayWinPercValue: Locator;
    public readonly mondayCupWinPercValue: Locator;

    public readonly tuesVetsGamesValue: Locator;
    public readonly tuesVetsWinsValue: Locator;
    public readonly tuesVetsLossesValue: Locator;
    public readonly tuesVetsDrawsValue: Locator;
    public readonly tuesVetsWinPercValue: Locator;
    public readonly tuesVetsHomeWinPercValue: Locator;
    public readonly tuesVetsAwayWinPercValue: Locator;
    public readonly tuesVetsCupWinPercValue: Locator;

    constructor(page: Page) {
        this.page = page;

        this.noStatsMessage = page.getByText(
            'No stats available for the selected year'
        );

        this.mondayTeamStats = page.locator(
            '#team-select-tabs-tabpane-monday .team-stats'
        );

        this.totalGamesValue = page.locator(
            '#combined-team-win-losses #totalGamesValue'
        );
        this.totalWinsValue = page.locator(
            '#combined-team-win-losses #totalWinsValue'
        );
        this.totalLossesValue = page.locator(
            '#combined-team-win-losses #totalLossesValue'
        );
        this.totalDrawsValue = page.locator(
            '#combined-team-win-losses #totalDrawsValue'
        );
        this.totalWinPercValue = page.locator(
            '#combined-team-win-losses #totalWinPercValue'
        );
        this.totalHomeWinPercValue = page.locator(
            '#combined-team-win-losses #totalHomeWinPercValue'
        );
        this.totalAwayWinPercValue = page.locator(
            '#combined-team-win-losses #totalAwayWinPercValue'
        );
        this.totalCupWinPercValue = page.locator(
            '#combined-team-win-losses #totalCupWinPercValue'
        );

        this.mondayGamesValue = page.locator(
            '#leeds-monday-combined-stats #totalGamesValue'
        );
        this.mondayWinsValue = page.locator(
            '#leeds-monday-combined-stats #totalWinsValue'
        );
        this.mondayLossesValue = page.locator(
            '#leeds-monday-combined-stats #totalLossesValue'
        );
        this.mondayDrawsValue = page.locator(
            '#leeds-monday-combined-stats #totalDrawsValue'
        );
        this.mondayWinPercValue = page.locator(
            '#leeds-monday-combined-stats #totalWinPercValue'
        );
        this.mondayHomeWinPercValue = page.locator(
            '#leeds-monday-combined-stats #totalHomeWinPercValue'
        );
        this.mondayAwayWinPercValue = page.locator(
            '#leeds-monday-combined-stats #totalAwayWinPercValue'
        );
        this.mondayCupWinPercValue = page.locator(
            '#leeds-monday-combined-stats #totalCupWinPercValue'
        );

        this.tuesVetsGamesValue = page.locator(
            '#leeds-tuesday-vets-stats #totalGamesValue'
        );
        this.tuesVetsWinsValue = page.locator(
            '#leeds-tuesday-vets-stats #totalWinsValue'
        );
        this.tuesVetsLossesValue = page.locator(
            '#leeds-tuesday-vets-stats #totalLossesValue'
        );
        this.tuesVetsDrawsValue = page.locator(
            '#leeds-tuesday-vets-stats #totalDrawsValue'
        );
        this.tuesVetsWinPercValue = page.locator(
            '#leeds-tuesday-vets-stats #totalWinPercValue'
        );
        this.tuesVetsHomeWinPercValue = page.locator(
            '#leeds-tuesday-vets-stats #totalHomeWinPercValue'
        );
        this.tuesVetsAwayWinPercValue = page.locator(
            '#leeds-tuesday-vets-stats #totalAwayWinPercValue'
        );
        this.tuesVetsCupWinPercValue = page.locator(
            '#leeds-tuesday-vets-stats #totalCupWinPercValue'
        );
    }

    async goto() {
        await this.page.goto('/#/stats/team');
    }
}
