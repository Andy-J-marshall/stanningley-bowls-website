import { Locator, Page, expect } from '@playwright/test';

export class PlayerSearchPage {
    public readonly page: Page;

    public readonly header: Locator;

    public readonly noResultsMessage: Locator;
    private readonly backButton: Locator;
    private readonly searchBar: Locator;
    private readonly playerTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('h1');
        this.searchBar = page.getByPlaceholder('Player Search...');
        this.backButton = page.getByRole('button', { name: 'BACK TO SUMMARY' });
        this.noResultsMessage = page.getByText('No games played this year');
        this.playerTitle = page.locator('#playerNameTitle');
    }

    async goto() {
        await this.page.goto('/#/stats/player');
        await expect(this.header).toContainText('player stats', {
            ignoreCase: true,
        });
    }

    async searchForPlayer(playerName: string) {
        await this.searchBar.fill(playerName);
        await this.page.getByRole('option', { name: playerName }).click();
        await expect(this.playerTitle).toContainText(playerName, {
            ignoreCase: true,
        });
    }

    async clickBackToSummary() {
        await this.backButton.click();
    }
}
