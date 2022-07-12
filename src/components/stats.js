import React, { useState, useEffect } from 'react';
import {
    Navbar,
    Nav,
    Container,
    Dropdown,
    DropdownButton,
} from 'react-bootstrap';
import Records from './records';
import TeamStats from './teamStats';
import PlayerStats from './playerStats';
import bowlsStats2021 from '../data/bowlsStats2021.json';
import bowlsStats2022 from '../data/bowlsStats2022.json';

// TODO display stats year prominently
let currentYear = new Date().getFullYear();
const url = window.location.href.toLowerCase();
if (url.includes('#stats20')) {
    const yearFromUrl = url.split('#stats')[1];
    currentYear = yearFromUrl;
}

const allYearStats = {
    year2022: bowlsStats2022,
    year2021: bowlsStats2021,
};
const defaultStats = allYearStats[`year${currentYear}`];

function Stats() {
    const [showPlayerStats, setShowPlayerStats] = useState(true);
    const [showTeamStats, setShowTeamStats] = useState(false);
    const [showRecords, setShowRecords] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [playerResults, setPlayerResults] = useState(
        defaultStats.playerResults
    );
    const [teamResults, setTeamResults] = useState(defaultStats.teamResults);

    useEffect(() => {
        window.scrollTo(0, 0);
        const url = window.location.href.toLowerCase();
        if (loaded === false) {
            if (url.includes('#team-stats')) {
                displayTeamStats();
            }
            if (url.includes('#player-stats')) {
                displayPlayerStats();
            }
            if (url.includes('#records')) {
                displayRecords();
            }
            setLoaded(true);
        }
    });

    function displayPlayerStats() {
        setShowPlayerStats(true);
        setShowTeamStats(false);
        setShowRecords(false);
    }

    function displayTeamStats() {
        setShowTeamStats(true);
        setShowPlayerStats(false);
        setShowRecords(false);
    }

    function displayRecords() {
        setShowRecords(true);
        setShowPlayerStats(false);
        setShowTeamStats(false);
    }

    function changeStatsYear(event) {
        event = event.replace('#stats', '').toString();
        let statsForSelectedYear;
        switch (event) {
            case '2021':
                statsForSelectedYear = allYearStats['year2021'];
                break;
            case '2022':
                statsForSelectedYear = allYearStats['year2022'];
                break;
            default:
                statsForSelectedYear = allYearStats[`year${currentYear}`];
                break;
        }
        setPlayerResults(statsForSelectedYear.playerResults);
        setTeamResults(statsForSelectedYear.teamResults);
    }

    return (
        <div>
            <Navbar
                collapseOnSelect
                id="navbar-stats"
                bg="light"
                variant="light"
            >
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Nav
                        className="me-auto center"
                        style={{ maxHeight: '700px' }}
                        navbarScroll
                        activeKey="/player-stats"
                        onSelect={(selectedKey) => {
                            if (selectedKey === '#player-stats') {
                                displayPlayerStats();
                            }
                            if (selectedKey === '#team-stats') {
                                displayTeamStats();
                            }
                            if (selectedKey === '#records') {
                                displayRecords();
                            }
                        }}
                    >
                        <Nav.Item>
                            <Nav.Link
                                href="#player-stats"
                                eventKey="#player-stats"
                            >
                                PLAYERS
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#team-stats" eventKey="#team-stats">
                                TEAMS
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#records" eventKey="#records">
                                RECORDS
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            {/* TODO need to align right */}
            {/* TODO add year to the button? */}
            <DropdownButton
                variant="secondary"
                onSelect={changeStatsYear}
                id="dropdown-basic-button"
                title="Year"
            >
                <Dropdown.Item href="#stats2022">2022</Dropdown.Item>
                <Dropdown.Item href="#stats2021">2021</Dropdown.Item>
            </DropdownButton>
            <div id="stat" className="page-component">
                {showRecords && (
                    <Records
                        teamStats={teamResults}
                        playersStats={playerResults}
                    />
                )}
                {showTeamStats && (
                    <TeamStats
                        teamStats={teamResults}
                        playersStats={playerResults}
                    />
                )}
                {showPlayerStats && (
                    <PlayerStats playersStats={playerResults} />
                )}
            </div>
        </div>
    );
}

export default Stats;
