# STANNINGLEY PARK BOWLING CLUB

Welcome to the Stanningley Park Bowling Club website.

### Overview

This repository contains multiple components:

-   React web application to display club information and stats
-   Scripts to scrape data from bowlsnet.uk and generate the stats
-   GitHub Actions to automate the process of updating the stats and deploying the web app
-   Playwright UI tests to ensure the web app is working as expected

### Data flow

1. The Playwright script in `scripts/bowlsnet` generates text reports from bowlsnet.uk for each tracked league and saves them locally
2. The python scripts in `scripts/statsScripts` reads the text reports and generates two JSON files for the stats, one for the club stats and one for all tracked club stats
3. The react application in `src/` reads the generated JSON files and displays the data

## Pre-requisites

Install:

-   git
-   NodeJS
-   python 3

Optional:

-   GH CLI (e.g. on macOS, run: `brew install gh`)

# WEB APPLICATION

## Running Locally

Run the following:

-   `npm i`
-   `npm run start`

The application should be running on: http://localhost:5173

## Deploy to Github Pages

You should use the pipeline to deploy to production. When you merge your PR to master the pipeline will automatically deploy and run the UI tests.

However, if you need to deploy from your local machine, you can run the following:

-   `npm i`
-   `npm run tests` (not required but recommended)
-   `npm run build-deploy`

If this fails, then you may need to run `gh auth login` and login to GitHub (this is required for the scripts to create PRs).

Note: If the website isn't found then navigate to the Github repository Pages settings and re-add the custom domain.

## Pipelines

There are several GitHub Action jobs that run. These can be found in `/.github/workflows`.

-   `deploy-master.yml` - this deploys to prod whenever there is a push to master and then runs the tests
-   `run-ui-tests-on-pr.yml` - this runs the UI tests against prod whenever a PR is opened or changed
-   `update-stats.yml` - this updates the stats on a branch and creates a PR, and is run on a schedule
-   `merge-master.yml` - merges master into the release branch

Note: if the branch names change (e.g. `update_stats_prod` or `master`) then the jobs will need to be updated.

## Tests

-   `npx playwright install --with-deps` - Installs Playwright
-   `npm run tests` - Runs the unit and UI tests
-   `npm run ui-test-reports` - View the UI test reports

## Maintenance

Most of the club details are stored in the `config.ts` file (e.g. membership price, team names etc.), so any changes will need to be updated here. See the [END OF SEASON MAINTENANCE](#end-of-season-maintenance) section for more details on the changes required after each season.

# STATS SCRIPTS

The script that collates stats from all club teams can be found in the `/scripts/statsScripts` directory.

Four JSON files will be generated after running the scripts:

-   `stanningleyStats{year}.json` - contains the stats for all Stanningley players
-   `littlemoorStats{year}.json` - contains the stats for Littlemoor players who also play for Stanningley
-   `pudseyStats{year}.json` - contains the stats for Pudsey players who also play for Stanningley
-   `allClubsStats{year}.json` - contains the stats for all Stanningley players, including other clubs they play for

## Update the player stats

There are two stages to updating the player stats:

-   Generate the reports from bowlsnet
-   Update the stats JSON files

The scripts to automate the process can be found in the `package.json` file.

The JSON file will be created/updated in `src/data/`.

#### Update stats automatically

Run `npm run get-stats-and-update`. This will use Playwright to generate text reports from Bowlsnet, save them locally, and then run the scripts to update the stats JSON files.

Advanced: You can also run `npm run get-stats-update-pr` to get, update and commit the stats, then create a pull request in GitHub. Once the PR is merged it should automatically deploy master to prod.

#### Update stats manually

If the step to generate the reports from Bowlsnet fails, you can manually update the stats:

-   Navigate to the Bowlsnet league URLs
-   Go to Fixtures, then click the "..." dropdown and select Export matchcards, then select In text format
-   Copy the outputted reports to a text file
-   Save the file in the `/bowlsnetReports/{year}` directory
-   Run `npm run update-stats` to generate the stats JSON files
-   Commit the changes and merge to master

#### Update stats via the Pipeline

The pipeline will run the `update-stats.yml` job on a schedule (see the cron schedule in that file for details). This will update the stats and create a PR. Once the PR is merged it will automatically deploy master to prod.

#### Update stats via local Cron job

You can also set up a cron job on your local machine to run the script automatically:

-   run `crontab -e` from your terminal
-   Add something like the below, replacing the path to the repo and the PATH value e.g. this runs at 10.15am and 10.15pm most days during the bowls season

```
PATH=[insert path here]
15 10,22 1-30 4-9 1,2,3,4,6 cd /path/to/repo && npm run get-stats-update-pr
```

# END OF SEASON MAINTENANCE

A number of manual changes are required at the end of each calendar year.

## Scripts

1. Update `stanningleyDetails.py`, `pudseyDetails.py` and `littlemoorDetails.py`:

    - Update the player information:
        - `players` - players who play for the club
        - `traitorPlayers` - players who play for other clubs on certain days
        - `duplicatePlayerNames` - alternative spellings for player names
    - If adding or removing a second team, updated the following:
        - `teamNames` - Add the lowercase team names for the B team
        - `teamDays` - Suffix the league name with (A) and (B) for each team e.g. `['Leeds Saturday (A)', 'Leeds Saturday (B)']`. If there is no longer a B team, remove any suffixes
        - `teamsWithWithDifferentNumberOfPlayersToLeagueNorm` - Add any teams that have a different number of players to the league norm e.g. Bradford Saturday teams only have 8 players outside of the top 3 divisions

2. Update `playerDetails.py`:

    - Add names from `duplicatePlayerNames` above to `deduplicateNames` and assign the correct name
    - Update `allClubs` with any other club members plays for
    - Update `allLeagues` for any other leagues that need tracking

3. If entering a new league, make sure the `bowlsClubStats.py` script will still work e.g. different scoring methods, or different number of players in a team might cause issues
4. Check the scripts still work for the new season. The Bowlsnet website or text reports may have changed which could cause the scripts to fail
5. Consider whether to add league reports for any non-tracked leagues for the previous season i.e. the ones commented out in `scripts/bowlsnet/getDataFromBowlsnet.spec.ts`. This might make it easier in the future to track these leagues if a new player joins who has played in them

## Web application

1. Import the new stats files into `statsData.ts` and update the exported objects and arrays with the new files.
2. Update `statsSelectCallback` in `App.tsx` with the reference to the new year's stats file. Also update the default stats and year to display in the useState hook.
3. Add a dropdown item for the new year in the `yearSelectDropdown.tsx` component
4. If there are any new teams added, update the `records.tsx`, `teamStats.tsx` and `teamInfo.tsx` components. Make sure `returnTabName` in `statsHelper.ts` displays the team name correctly. Check the team stats appear in the dropdown in the `playerStats.tsx` component, and in `playerStatsTeams.tsx`.
5. Update `History.tsx` with any trophies won
6. Configure the `config.ts` file with the new year's data:

    - Change the `historicTeamInfo` property include league data for any new teams or second teams
    - Update the `allTeamsInLeaguesSince2013` array to include an extra keys (second team teams need to be suffixed with ' (b)')
7. Update the bowlsnet URLs in `teamInfo.tsx` if any have changed
8. Update the `membership.tsx`, `about.tsx`, and `socialInfo.tsx` components with any new information

## Data

1. Update the `clubCupWinners.json` file with the club cup winner
2. Add fixtures to Google calendar for all teams

## Tests

1. Update `checkYearDropdownHasAllYearOptions` function in `yearSelectPage.tsx`
