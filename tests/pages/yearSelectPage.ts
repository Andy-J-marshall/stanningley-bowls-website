import { expect, Locator, Page } from '@playwright/test';

export class YearSelectPage {
    public readonly page: Page;

    private readonly yearSelectDropdown: Locator;
    private readonly AllYears: Locator;
    private readonly allYearsInDropdown: Locator;

    private readonly yearButtons: { [key: string]: Locator };

    constructor(page: Page) {
        this.page = page;
        this.yearSelectDropdown = page.locator('#year-select-dropdown-button');
        this.AllYears = page.getByRole('button', { name: 'All Years' });
        this.allYearsInDropdown = page.locator(
            '#full-stat-years-options > .dropdown-item'
        );

        this.yearButtons = {
            '2013': page.getByRole('button', { name: '2013' }),
            '2014': page.getByRole('button', { name: '2014' }),
            '2015': page.getByRole('button', { name: '2015' }),
            '2016': page.getByRole('button', { name: '2016' }),
            '2017': page.getByRole('button', { name: '2017' }),
            '2018': page.getByRole('button', { name: '2018' }),
            '2019': page.getByRole('button', { name: '2019' }),
            '2021': page.getByRole('button', { name: '2021' }),
            '2022': page.getByRole('button', { name: '2022' }),
            '2023': page.getByRole('button', { name: '2023' }),
            '2024': page.getByRole('button', { name: '2024' }),
            '2025': page.getByRole('button', { name: '2025' }),
        };
    }

    async selectAllYears() {
        await this.clickAllYearsDropDown();
        await this.AllYears.click();
    }

    async selectYear(year: number) {
        const yearButton = this.yearButtons[year];
        if (yearButton) {
            await this.clickAllYearsDropDown();
            await yearButton.click();
        } else {
            throw new Error(`Year ${year} button not found`);
        }
    }

    async clickAllYearsDropDown() {
        await this.page.waitForTimeout(750);
        await this.yearSelectDropdown.click();
    }

    async checkYearDropdownHasEveryYearOption() {
        await this.clickAllYearsDropDown();
        const numberOfYears = this.calculateNumberOfYearsSince2013();
        await expect(this.allYearsInDropdown).toHaveCount(numberOfYears);
    }

    async checkYearDropdownHasEveryYearPlusAllYearsOption() {
        await this.clickAllYearsDropDown();
        const numberOfYears = this.calculateNumberOfYearsSince2013() + 1; // Adds 1 for extra 'All Years' option
        await expect(this.allYearsInDropdown).toHaveCount(numberOfYears);
    }

    private calculateNumberOfYearsSince2013() {
        const firstStatYear = 2013;
        const currentYear = new Date().getFullYear();
        return currentYear - firstStatYear; // Excludes 2020 as no stats due to lockdown
    }
}
