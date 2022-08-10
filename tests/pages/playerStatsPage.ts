import { expect, Locator, Page } from '@playwright/test';

interface PlayerStats {
  totalGamesPlayed: number;
  totalWins: number;
  totalLosses: number;
  totalAverage: number;
}

export class PlayerStatsPage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly searchBar: Locator;
  readonly playerListInDropdown: Locator;
  readonly playerStatsItem: Locator;
  readonly playerNameTitle: Locator;
  readonly summaryAccordionButton: Locator;
  readonly gamesAccordionButton: Locator;
  readonly winLossAccordionButton: Locator;
  readonly averageAccordionButton: Locator;
  readonly pointsAccordionButton: Locator;
  readonly aggAccordionButton: Locator;
  readonly resultsAccordionButton: Locator;
  readonly opponentsAccordionButton: Locator;
  readonly totalGamesPlayed: Locator;
  readonly totalWins: Locator;
  readonly totalLosses: Locator;
  readonly totalAverage: Locator;
  readonly teamDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBar = page.locator(
      '#player-search-form input.rbt-input-main.form-control.rbt-input.form-control-lg'
    );
    this.playerListInDropdown = page.locator('#player-search');
    this.searchButton = page.locator('#player-search-form > button');
    this.playerStatsItem = page.locator('#stats .list-group-item');
    this.playerNameTitle = page.locator('#playerNameTitle');
    this.summaryAccordionButton = page.locator('#stats-summary');
    this.gamesAccordionButton = page.locator('#stats-games');
    this.winLossAccordionButton = page.locator('#stats-wl');
    this.averageAccordionButton = page.locator('#stats-average');
    this.pointsAccordionButton = page.locator('#stats-points');
    this.aggAccordionButton = page.locator('#stats-aggregate');
    this.resultsAccordionButton = page.locator('#stats-results');
    this.opponentsAccordionButton = page.locator('#stats-opponents');
    this.totalGamesPlayed = page.locator('#totalGamesPlayed');
    this.totalWins = page.locator('#totalWins');
    this.totalLosses = page.locator('#totalLosses');
    this.totalAverage = page.locator('#totalAverage');
    this.teamDropDown = page.locator('#allStatsSelectDropDown');
  }

  async goto() {
    await this.page.goto('/#/stats/player');
  }

  async searchForPlayer(playerName: string) {
    await this.searchBar.fill(playerName);
    await this.playerListInDropdown.click();
  }

  async clickSearch() {
    await this.searchButton.click();
  }

  async checkNumberOfPlayersReturned(expectedNumberOfPlayers: number) {
    await expect(this.playerStatsItem).toHaveCount(expectedNumberOfPlayers);
  }

  async checkPlayerName(expectedPlayer: string) {
    await expect(this.playerNameTitle).toHaveText(expectedPlayer);
  }

  async checkStatsDropdownExists(expected: boolean) {
    if (expected) {
      await expect(this.teamDropDown).toBeNull();
    }
  }

  async checkAccordionHeadersExist() {
    await expect(this.summaryAccordionButton).toHaveText('SUMMARY');
    await expect(this.gamesAccordionButton).toHaveText('GAMES PLAYED');
    await expect(this.winLossAccordionButton).toHaveText('WINS & LOSSES');
    await expect(this.averageAccordionButton).toHaveText('AVERAGES');
    await expect(this.pointsAccordionButton).toHaveText('POINTS');
    await expect(this.aggAccordionButton).toHaveText('AGGREGATES');
    await expect(this.resultsAccordionButton).toHaveText('RESULTS');
    await expect(this.opponentsAccordionButton).toHaveText('OPPONENTS');
  }

  async validateSummaryStats(playerStats: PlayerStats) {
    await expect(this.totalGamesPlayed).toHaveText(
      `Games played = ${playerStats.totalGamesPlayed}`
    );
    await expect(this.totalWins).toHaveText(`Wins = ${playerStats.totalWins}`);
    await expect(this.totalLosses).toHaveText(
      `Losses = ${playerStats.totalLosses}`
    );
    await expect(this.totalAverage).toHaveText(
      `Average = ${playerStats.totalAverage.toFixed(2)}`
    );
  }
}
