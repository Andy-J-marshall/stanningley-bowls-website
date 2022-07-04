import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import TeamStats from './teamStats';
import PlayerStats from './playerStats';
import TeamRecords from './teamRecords';
import PlayerRecords from './playerRecords';
import bowlsStats from '../data/bowlsStats.json';
import smallLogo from './brand-logo-tiny.png';
import logo from './brand-logo.png';

function Home() {
    const [showPlayerStats, setShowPlayerStats] = useState(false);
    const [showTeamStats, setShowTeamStats] = useState(false);
    const [showPlayerRecords, setShowPlayerRecords] = useState(false);
    const [showTeamRecords, setShowTeamRecords] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const playersStats = bowlsStats.playerResults;
    const teamStats = bowlsStats.teamResults;

    // TODO Handle multiple years worth of stats
    useEffect(() => {
        window.scrollTo(0, 0);
        const url = window.location.href.toLowerCase();
        if (loaded === false) {
            if (url.includes('#team-stats')) {
                displayTeamStats();
            }
            if (url.includes('#team-records')) {
                displayTeamRecords();
            }
            if (url.includes('#player-stats')) {
                displayPlayerStats();
            }
            if (url.includes('#player-records')) {
                displayPlayerRecords();
            }
            // TODO this isn't working when clicking on home page
            if (url.includes('#home')) {
                setShowPlayerStats(false);
                setShowTeamStats(false);
                setShowPlayerRecords(false);
                setShowTeamRecords(false);
            }
            setLoaded(true);
        }
    });

    function displayPlayerStats() {
        setShowPlayerStats(true);
        setShowTeamStats(false);
        setShowPlayerRecords(false);
        setShowTeamRecords(false);
    }

    function displayTeamStats() {
        setShowTeamStats(true);
        setShowPlayerStats(false);
        setShowPlayerRecords(false);
        setShowTeamRecords(false);
    }

    function displayPlayerRecords() {
        setShowPlayerRecords(true);
        setShowTeamRecords(false);
        setShowPlayerStats(false);
        setShowTeamStats(false);
    }

    function displayTeamRecords() {
        setShowTeamRecords(true);
        setShowPlayerRecords(false);
        setShowPlayerStats(false);
        setShowTeamStats(false);
    }

    return (
        <div id="home">
            <Navbar
                collapseOnSelect
                id="navbar"
                fixed="top"
                bg="light"
                variant="light"
                expand="md"
            >
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            alt="logo"
                            src={smallLogo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        SPBC
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto"
                            style={{ maxHeight: '700px' }}
                            navbarScroll
                        >
                            <Nav.Link
                                onSelect={displayPlayerRecords}
                                href="#player-records"
                            >
                                PLAYER RECORDS
                            </Nav.Link>
                            <Nav.Link
                                onSelect={displayTeamRecords}
                                href="#team-records"
                            >
                                TEAM RECORDS
                            </Nav.Link>
                            <Nav.Link
                                onSelect={displayPlayerStats}
                                href="#player-stats"
                            >
                                PLAYER STATS
                            </Nav.Link>
                            <Nav.Link
                                onSelect={displayTeamStats}
                                href="#team-stats"
                            >
                                TEAM STATS
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div id="header">
                <img
                    alt="logo"
                    src={logo}
                    width="240"
                    height="240"
                    className="d-inline-block align-top"
                />
            </div>
            {!showPlayerStats &&
                !showTeamStats &&
                !showTeamRecords &&
                !showPlayerRecords && (
                    <div id="welcome-text">
                        <p>
                            Welcome to Stanningley Park Crown Green Bowling
                            Club's website
                        </p>
                    </div>
                )}
            {/* TODO create links for socials */}
            {/* TODO should I be passing the stats around or importing? */}
            {showPlayerRecords && <PlayerRecords playersStats={playersStats} />}
            {showTeamRecords && <TeamRecords stats={teamStats} />}
            {showPlayerStats && <PlayerStats />}
            {showTeamStats && <TeamStats />}
        </div>
    );
}

export default Home;
