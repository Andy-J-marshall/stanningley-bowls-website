import { expect, Locator, Page } from '@playwright/test';

interface PlayerStats {
  totalGamesPlayed: number;
  totalWins: number;
  totalLosses: number;
  totalAverage: number;
}

export class PlayerStatsPage {
  private readonly page: Page;
  private readonly searchButton: Locator;
  private readonly backButton: Locator;
  private readonly searchBar: Locator;
  private readonly playerListInDropdown: Locator;
  private readonly playerStatsItem: Locator;
  private readonly playerStatsRows: Locator;
  private readonly playerNameTitle: Locator;
  private readonly overviewAccordionButton: Locator;
  private readonly winLossAccordionButton: Locator;
  private readonly teamAccordionButton: Locator;
  private readonly aggAccordionButton: Locator;
  private readonly resultsAccordionButton: Locator;
  private readonly accordionButtons: Locator;
  private readonly totalGamesPlayed: Locator;
  private readonly totalWins: Locator;
  private readonly totalLosses: Locator;
  private readonly totalAverage: Locator;
  private readonly teamCheckBox: Locator;
  private readonly allYearCheckBox: Locator;
  private readonly singlesOnlyCheckBox: Locator;

  private games: Locator;
  private wins: Locator;
  private winPerc: Locator;
  private avg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBar = page.locator(
      '#player-search-form input.rbt-input-main.form-control.rbt-input.form-control-lg'
    );
    this.playerListInDropdown = page.locator('#player-search');
    this.searchButton = page.locator('#search-button');
    this.backButton = page.locator('#back-button');
    this.playerStatsItem = page.locator('#stats .list-group-item');
    this.playerStatsRows = page.locator('#player-stats-per-team tbody');
    this.playerNameTitle = page.locator('#playerNameTitle');
    this.overviewAccordionButton = page.locator('#stats-overview');
    this.winLossAccordionButton = page.locator('#stats-wl');
    this.teamAccordionButton = page.locator('#stats-teams');
    this.aggAccordionButton = page.locator('#stats-aggregate');
    this.resultsAccordionButton = page.locator('#stats-results');
    this.accordionButtons = page.locator(
      '#detailed-player-stats .accordion-button'
    );
    this.totalGamesPlayed = page.locator('#totalGamesPlayed');
    this.totalWins = page.locator('#totalWins');
    this.totalLosses = page.locator('#totalLosses');
    this.totalAverage = page.locator('#totalAverage');
    this.teamCheckBox = page.locator(
      ".form-check input[id='#all-stats-select-checkbox']"
    );
    this.singlesOnlyCheckBox = page.locator(
      ".form-check input[id='#only-singles-checkbox']"
    );
    this.allYearCheckBox = page.locator(
      ".form-check input[id='#all-years-select-checkbox']"
    );
    this.games = page.locator('#steve-gardner-games');
    this.wins = page.locator('#steve-gardner-wins');
    this.winPerc = page.locator('#steve-gardner-win-perc');
    this.avg = page.locator('#steve-gardner-avg');
  }

  setPlayerToFind(name: string) {
    const nameWithHyphen = name.trim().toLowerCase().replace(' ', '-');

    this.games = this.page.locator(`#${nameWithHyphen}-games`);
    this.wins = this.page.locator(`#${nameWithHyphen}-wins`);
    this.winPerc = this.page.locator(`#${nameWithHyphen}-win-perc`);
    this.avg = this.page.locator(`#${nameWithHyphen}-avg`);
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

  async clickBackToSummary() {
    await this.backButton.click();
  }

  async checkNumberOfPlayersReturned(expectedNumberOfPlayers: number) {
    await expect(this.playerStatsRows).toHaveCount(expectedNumberOfPlayers);
  }

  async checkPlayerIsReturned() {
    await expect(this.playerStatsItem).toHaveCount(1);
  }

  async checkPlayerName(expectedPlayer: string) {
    await expect(this.playerNameTitle).toHaveText(expectedPlayer);
  }

  async checkTeamAccordionHeadersExist() {
    await expect(this.accordionButtons).toHaveCount(5);
    await expect(this.overviewAccordionButton).toHaveText('OVERVIEW');
    await expect(this.winLossAccordionButton).toHaveText('WINS & LOSSES');
    await expect(this.teamAccordionButton).toHaveText('TEAMS');
    await expect(this.aggAccordionButton).toHaveText('AGGREGATES');
    await expect(this.resultsAccordionButton).toHaveText('RESULTS');
  }

  async checkOnlyBasicAccordionHeadersExist() {
    await expect(this.accordionButtons).toHaveCount(4);
    await expect(this.overviewAccordionButton).toHaveText('OVERVIEW');
    await expect(this.winLossAccordionButton).toHaveText('WINS & LOSSES');
    await expect(this.aggAccordionButton).toHaveText('AGGREGATES');
    await expect(this.resultsAccordionButton).toHaveText('RESULTS');
  }

  async selectAllTeamStatsCheckbox() {
    await this.teamCheckBox.check();
  }

  async deselectTeamStatsCheckbox() {
    await this.teamCheckBox.uncheck();
  }

  async selectSinglesOnlyCheckbox() {
    await this.singlesOnlyCheckBox.check();
  }

  async deselectSinglesOnlyCheckbox() {
    await this.singlesOnlyCheckBox.uncheck();
  }

  async selectSince2022Checkbox() {
    await this.allYearCheckBox.check();
  }

  async deselectSince2022Checkbox() {
    await this.allYearCheckBox.uncheck();
  }

  async validateSummaryStats(playerStats: PlayerStats) {
    await expect(this.totalGamesPlayed).toHaveText(
      `Games played: ${playerStats.totalGamesPlayed}`
    );
    await expect(this.totalWins).toHaveText(`Wins: ${playerStats.totalWins}`);
    await expect(this.totalLosses).toHaveText(
      `Losses: ${playerStats.totalLosses}`
    );
    await expect(this.totalAverage).toHaveText(
      `Average: ${playerStats.totalAverage.toFixed(2)}`
    );
    expect(playerStats.totalAverage).toBeGreaterThan(-22);
    expect(playerStats.totalAverage).toBeLessThan(22);
  }

  playerStatsAreCorrectInTable(
    games: string,
    wins: string,
    winPerc: string,
    avg: string
  ) {
    expect(this.games).toContainText(games);
    expect(this.wins).toContainText(wins);
    expect(this.winPerc).toContainText(winPerc);
    expect(this.avg).toContainText(avg);
  }
}
