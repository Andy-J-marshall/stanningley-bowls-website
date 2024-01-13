import { test } from '@playwright/test';
import { BasePage } from './pages/basePage';
import { ResultPage } from './pages/resultPage';

let basePage: BasePage;
let resultPage: ResultPage;

test.beforeEach(async ({ page }) => {
  basePage = new BasePage(page);
  resultPage = new ResultPage(page);
  await resultPage.goto();
});

test('Teams results appear for previous years', async () => {
  await basePage.select2023Year();
  resultPage.resultsForAll2023TeamsAppear();
});

test(`Stats year dropdown appears if there are multiple years of stats available`, async () => {
  await basePage.checkYearDropdownHasAllYearOptions();
});
