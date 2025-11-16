import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import './app.css';
import Home from './pages/home';
import Membership from './pages/membership';
import Contact from './pages/contact';
import Results from './pages/results';
import Records from './pages/records';
import TeamStats from './pages/teamStats';
import TeamInfo from './pages/teamInfo';
import PlayerStats from './pages/playerStats';
import About from './pages/about';
import History from './pages/history';
import SocialInfo from './pages/socialInfo';
import Fixtures from './pages/fixtures';
import Sponsors from './pages/sponsors';
import Navigation from './components/homePage/navigation';
import Footer from './components/homePage/footer';
import YearSelectDropdown from './components/homePage/yearSelectDropdown';
import { ClubStatsMap, FullStatsFile } from './types/interfaces';
import statsData from './statsData';

const allYearStanningleyStats: ClubStatsMap = statsData.allYearStanningleyStats;
const allYearAllClubsStats: ClubStatsMap = statsData.allYearAllClubsStats;

function App() {
    const [stanningleyStats, setStanningleyStats] = useState<FullStatsFile>(
        statsData.allYearStanningleyStats.year2025
    );
    const [allClubsStats, setAllClubsStats] = useState<FullStatsFile>(
        statsData.allYearAllClubsStats.year2025
    );
    const [yearToDisplay, setYearToDisplay] = useState('2025');

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Alegreya Sans', 'Alegreya SC'],
            },
        });
    }, []);

    function statsSelectCallback(year: string) {
        const statsYearsProperty = isNaN(Number(year))
            ? 'allYears'
            : `year${year}`;

        if (
            allYearStanningleyStats[statsYearsProperty] &&
            allYearAllClubsStats[statsYearsProperty]
        ) {
            setStanningleyStats(allYearStanningleyStats[statsYearsProperty]);
            setAllClubsStats(allYearAllClubsStats[statsYearsProperty]);

            setYearToDisplay(year.toString());
        }
    }

    return (
        <div id="app">
            <main>
                <Navigation />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/membership" element={<Membership />} />
                    <Route path="/teams" element={<TeamInfo />} />
                    <Route path="/social" element={<SocialInfo />} />
                    <Route path="/fixtures" element={<Fixtures />} />
                    <Route
                        path="/results"
                        element={
                            <div className="stats-data-page-component center">
                                <YearSelectDropdown
                                    statsCallback={statsSelectCallback}
                                    yearToDisplay={yearToDisplay}
                                    displayAllYearsOption={false}
                                />
                                <Results
                                    stats={stanningleyStats}
                                    yearToDisplay={yearToDisplay}
                                />
                            </div>
                        }
                    />
                    <Route
                        path="/stats/player"
                        element={
                            <div className="stats-data-page-component center">
                                <YearSelectDropdown
                                    statsCallback={statsSelectCallback}
                                    yearToDisplay={yearToDisplay}
                                    displayAllYearsOption={true}
                                />
                                <PlayerStats
                                    stanningleyStats={stanningleyStats}
                                    allClubsStats={allClubsStats}
                                />
                            </div>
                        }
                    />
                    <Route
                        path="/stats/team"
                        element={
                            <div className="stats-data-page-component center">
                                <YearSelectDropdown
                                    statsCallback={statsSelectCallback}
                                    yearToDisplay={yearToDisplay}
                                    displayAllYearsOption={true}
                                />
                                <TeamStats
                                    stats={stanningleyStats}
                                    statsSelectCallback={statsSelectCallback}
                                    yearToDisplay={yearToDisplay}
                                />
                            </div>
                        }
                    />
                    <Route
                        path="/stats/records"
                        element={
                            <div className="stats-data-page-component center">
                                <YearSelectDropdown
                                    statsCallback={statsSelectCallback}
                                    yearToDisplay={yearToDisplay}
                                    displayAllYearsOption={true}
                                />
                                <Records
                                    stats={stanningleyStats}
                                    statsSelectCallback={statsSelectCallback}
                                    yearToDisplay={yearToDisplay}
                                />
                            </div>
                        }
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
