import { test, expect } from '@playwright/test';
import { config } from '../../src/config';

const clubName = config.teamNames.fullName;

test.describe('Each page loads', () => {
    test('Default', async ({ page }) => {
        await page.goto('');

        await expect(page).toHaveTitle(`${clubName}`);
        await expect(page.locator('#home-page')).toBeVisible();
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.locator('#header')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
        await expect(page.locator('#carousel')).toBeVisible();
        await expect(page.locator('#news')).toBeVisible();
        await expect(page.locator('#supporters')).toBeVisible();
    });

    test('Home', async ({ page }) => {
        await page.goto('#/home');

        await expect(page.locator('#home-page')).toBeVisible();
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
    });

    test('membership', async ({ page }) => {
        await page.goto('#/membership');

        await expect(page.locator('#membership-page')).toBeVisible();
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
    });

    test('Team info', async ({ page }) => {
        await page.goto('#/teams');

        await expect(page.locator('#team-info-page')).toBeVisible();
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
    });

    test('Fixtures', async ({ page }) => {
        await page.goto('#/fixtures');

        await expect(page.locator('#fixtures-page')).toBeVisible();
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
    });

    test('Contact', async ({ page }) => {
        await page.goto('#/contact');

        await expect(page.locator('#contact-page')).toBeVisible();
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
    });

    test('Sponsors', async ({ page }) => {
        await page.goto('#/sponsors');

        await expect(page.locator('#sponsors-page')).toBeVisible();
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
    });

    test('About Us', async ({ page }) => {
        await page.goto('#/about');

        await expect(page.locator('#about-page')).toBeVisible();
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
    });

    test('History', async ({ page }) => {
        await page.goto('#/history');

        await expect(page.locator('#history-page')).toBeVisible();
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
    });

    test('Social', async ({ page }) => {
        await page.goto('#/social');

        await expect(page.locator('#social-info-page')).toBeVisible();
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
    });
});
