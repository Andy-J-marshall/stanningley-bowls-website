import { Locator, Page } from '@playwright/test';

export class TeamTabsPage {
    public readonly page: Page;

    private readonly mondayTab: Locator;
    private readonly tuesdayTab: Locator;
    public readonly wednesdayTab: Locator;
    private readonly thursdayTab: Locator;
    private readonly saturdayTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mondayTab = page.getByRole('tab', { name: 'MONDAY' });
        this.tuesdayTab = page.getByRole('tab', { name: 'TUESDAY' });
        this.wednesdayTab = page.getByRole('tab', { name: 'WEDNESDAY' });
        this.thursdayTab = page.getByRole('tab', { name: 'THURSDAY' });
        this.saturdayTab = page.getByRole('tab', { name: 'SATURDAY' });
    }

    async selectMondayTab() {
        await this.mondayTab.click();
    }

    async selectTuesdayTab() {
        await this.tuesdayTab.click();
    }

    async selectWednesdayTab() {
        await this.wednesdayTab.click();
    }

    async selectThursdayTab() {
        await this.thursdayTab.click();
    }

    async selectSaturdayTab() {
        await this.saturdayTab.click();
    }
}
