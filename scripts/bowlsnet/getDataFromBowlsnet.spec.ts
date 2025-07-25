import {
    test,
    chromium,
    Browser,
    BrowserContext,
    Page,
} from '@playwright/test';
import fs from 'fs';
import { leagues } from './leagueInformation';

const year = new Date().getFullYear(); // Change this to get data from a different year

for (const league of leagues) {
    test(`${league.day} Stats`, async () => {
        // Browser set up
        const browser: Browser = await chromium.launch();
        const context: BrowserContext = await browser.newContext();
        let page: Page = await context.newPage();

        // Navigate to Bowlsnet and wait for page to load
        await page.goto(`${league.url}?DB=${year}`);
        await sleep();

        // Click pop up if present
        try {
            const noticePage = page
                .locator('iframe[title="BowlsNet Page"]')
                .contentFrame()
                .getByRole('button', { name: 'Continue' });
            const popUpCount = await noticePage.count();
            if (popUpCount > 0) {
                await noticePage.click();
            }
        } catch (error) {
            console.log(`No popup to click for ${league.day}, continuing...`);
        }

        // Find league fixtures
        await page
            .frameLocator('iframe[title="BowlsNet Page"]')
            .getByText('Fixtures', { exact: true })
            .click();

        await page
            .frameLocator('iframe[title="BowlsNet Page"]')
            .getByText('League Fixtures')
            .click();

        await sleep(); // Wait for the page to load

        // Export MatchCards
        await page
            .frameLocator('iframe[title="BowlsNet Page"]')
            .locator('div')
            .filter({ hasText: /^\.\.\. ▼$/ })
            .click();

        await page
            .frameLocator('iframe[title="BowlsNet Page"]')
            .getByText('Export MatchCards...')
            .click();

        const newPagePromise = page.waitForEvent('popup');
        await page
            .frameLocator('iframe[title="BowlsNet Page"]')
            .frameLocator('iframe[title="BowlsNet Dlg"]')
            .getByRole('button', { name: 'In Text Format' })
            .click();

        // View report in new tab
        const newPage = await newPagePromise;
        await newPage.bringToFront();
        await newPage.waitForLoadState('domcontentloaded');

        // Create text file
        const value = await newPage.evaluate(
            () => document.querySelector('body > pre')?.textContent
        );
        const filePath = `./bowlsnetReports/${year}/${league.day}.txt`;
        fs.writeFile(filePath, value as string, (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
}

function sleep() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
}
