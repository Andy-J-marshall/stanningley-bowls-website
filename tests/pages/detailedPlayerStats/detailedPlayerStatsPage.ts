import { Locator, Page, expect } from '@playwright/test';

export class DetailedPlayerStatsPage {
    public readonly page: Page;
    public readonly playerStats: Locator;
    public readonly title: Locator;

    public readonly totalSubHeader: Locator;

    public readonly overviewAccordion: Locator;
    public readonly winLossAccordion: Locator;
    public readonly aggAccordion: Locator;
    public readonly teamAccordion: Locator;
    public readonly resultsAccordion: Locator;
    public readonly accordions: Locator;

    private readonly allButton: Locator;
    private readonly singlesButton: Locator;
    private readonly pairsButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.totalSubHeader = page.getByRole('heading', { name: 'total' });

        this.playerStats = page.locator('#detailed-player-stats');
        this.title = page.locator('#playerNameTitle');

        this.overviewAccordion = page.locator('#stats-overview > button');
        this.winLossAccordion = page.locator('#stats-wl > button');
        this.aggAccordion = page.locator('#stats-aggregate > button');
        this.teamAccordion = page.locator('#stats-teams > button');
        this.resultsAccordion = page.locator('#stats-results > button');
        this.accordions = page.locator(
            '#detailed-player-stats .accordion-button'
        );

        this.allButton = page.getByRole('group').getByText('All');
        this.singlesButton = page.getByRole('group').getByText('Singles');
        this.pairsButton = page.getByRole('group').getByText('Pairs');
    }

    async clickWinsAndLossesAccordion() {
        await this.winLossAccordion.click();
        await expect(this.winLossAccordion).toHaveAttribute(
            'aria-expanded',
            'true'
        );
    }

    async clickAggAccordion() {
        await this.aggAccordion.click();
        await expect(this.aggAccordion).toHaveAttribute(
            'aria-expanded',
            'true'
        );
    }

    async clickTeamAccordion() {
        await this.teamAccordion.click();
        await expect(this.teamAccordion).toHaveAttribute(
            'aria-expanded',
            'true'
        );
    }

    async clickResultsAccordion() {
        await this.resultsAccordion.click();
        await expect(this.resultsAccordion).toHaveAttribute(
            'aria-expanded',
            'true'
        );
    }

    async clickAllButton() {
        await this.allButton.click();
        await expect(this.totalSubHeader).toBeVisible();
    }

    async clickSinglesButton() {
        await this.singlesButton.click();
        await expect(this.totalSubHeader).toBeVisible();
    }

    async clickPairsButton() {
        await this.pairsButton.click();
        await expect(this.totalSubHeader).toBeVisible();
    }
}
