import {
    test,
    chromium,
    Browser,
    BrowserContext,
    Page,
} from '@playwright/test';
import fs from 'fs';

const year = new Date().getFullYear(); // Change this to get data from a different year

const leagues = [
    {
        day: 'Leeds Monday Combined',
        url: '/Leeds-MonComb',
    },
    {
        day: 'Leeds Tuesday Vets',
        url: '/Leeds-TueVets',
    },
    {
        day: 'Leeds Tuesday',
        url: '/Leeds-Tue',
    },
    {
        day: 'Leeds Half Holiday',
        url: '/Leeds-Wed',
    },
    {
        day: 'Leeds Thursday Vets',
        url: '/Leeds-ThuVets',
    },
    {
        day: 'Leeds Saturday',
        url: '/Leeds-Sat',
    },
    {
        day: 'Leeds Ladies',
        url: '/LeedsLadies',
    },
    {
        day: 'Mirfield',
        url: '/Mirfield',
    },
    {
        day: 'Spen Valley',
        url: '/WestRiding',
    },
    {
        day: 'Ossett and Horbury',
        url: '/Ossett',
    },
    {
        day: 'AireWharfe Monday',
        url: '/AW-Mon',
    },
    {
        day: 'AireWharfe Wednesday Pairs',
        url: '/AW-WedPairs',
    },
    {
        day: 'AireWharfe Vets',
        url: '/AW-Vets',
    },
    // TODO add back in?
    // {
    //     day: 'AireWharfe Saturday',
    //     url: '/AW-Sat',
    // },
    {
        day: 'Bradford Monday',
        url: '/Bradford-Mon',
    },
    {
        day: 'Bradford Half Holiday',
        url: '/Bradford-HalfHol',
    },
    {
        day: 'Bradford Vets',
        url: '/Bradford-Vets',
    },
    {
        day: 'Bradford Saturday',
        url: '/Bradford-Sat',
    },
    {
        day: 'Tadcaster',
        url: '/Tadcaster',
    },
    // Other leagues of interest
    // {
    //     day: 'North East Leeds Vets',
    //     url: '/NELeedsVets',
    // },
    // {
    //     day: 'AireWharfe Wednesday',
    //     url: '/AW-WedSingles',
    // },
    // {
    //     day: 'Barkston Ash',
    //     url: '/BarkstonAsh',
    // },
    // {
    //     day: 'Guiseley Winter',
    //     url: '/GuiseleyWinter',
    // },
    // {
    //     day: 'Wetherby Autumn',
    //     url: '/WetherbyAutumn',
    // },
    // {
    //     day: 'AireWharfe Tuesday Pairs',
    //     url: '/AW-TuePairs',
    // },
    // {
    //     day: 'Heavy Woolen Monday',
    //     url: '/HeavyWoollenAfternoon',
    // },
    // {
    //     day: 'Crossgates',
    //     url: '/Crossgates',
    // },
    // {
    //     day: 'Elland',
    //     url: '/Halifax-Elland',
    // },
    // {
    //     day: 'Halifax Wednesday',
    //     url: '/Halifax-WedEvening',
    // },
    // {
    //     day: 'Castleford Vets',
    //     url: '/CastlefordVets-Singles',
    // },
    // {
    //     day: 'Castleford Wednesday',
    //     url: '/Castleford-Evening',
    // },
    // {
    //     day: 'Wakefield Saturday',
    //     url: '/WakefieldSat',
    // },
];

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
