import React, { useState, Fragment, useEffect } from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import Player from './players';
import PlayerStatChoiceDropdown from './playerStatChoiceDropdown';
import config from '../config';

import 'react-bootstrap-typeahead/css/Typeahead.css';

function PlayerStats(props) {
    const combinedStats = props.combinedStats;
    const stats = props.stats;

    const { playerResults } = stats;
    const combinedPlayerResults = combinedStats.playerResults;

    const [searchedPlayerName, setSearchedPlayerName] = useState('');
    const [value, setValue] = useState(['']);
    const [loaded, setLoaded] = useState(false);
    const [showStatSummary, setShowStatSummary] = useState(false);
    const [showStatSelectionDropdown, setShowStatSelectionDropdown] =
        useState(false);
    const [statsToUse, setStatsToUse] = useState(playerResults);
    const defaultDropDownText = 'Stanningley Stats';
    const [dropDownText, setDropDownText] = useState(defaultDropDownText);

    const keys = Object.keys(combinedPlayerResults).sort();
    const playerNameArray = keys.map((p) => p.toUpperCase());

    useEffect(() => {
        if (!loaded) {
            window.scrollTo(0, 0);
        }
        setLoaded(true);
    });

    function statsCallback(showAllBoolean) {
        if (showAllBoolean) {
            setStatsToUse(combinedPlayerResults);
            setShowStatSummary(true);
            setDropDownText('All Team Stats');
        } else {
            setStatsToUse(playerResults);
            setShowStatSummary(false);
            setDropDownText(defaultDropDownText);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue(['']);
        setShowStatSelectionDropdown(false);
        setShowStatSummary(false);
        setStatsToUse(playerResults);
        setDropDownText(defaultDropDownText);
        const searchedName = event.target[0].value.toLowerCase().trim();
        setSearchedPlayerName(searchedName);

        if (searchedName && !searchedName.includes('show all')) {
            const stanDays = Object.keys(config.days);
            const daysPlayed = combinedPlayerResults[searchedName].dayPlayed;
            let anyStanDays = false;
            daysPlayed.forEach((day) => {
                const formattedDay = day.split(' (')[0].toLowerCase().trim();
                if (!stanDays.includes(formattedDay)) {
                    setShowStatSelectionDropdown(true);
                }
                if (stanDays.includes(formattedDay)) {
                    anyStanDays = true;
                }
            });
            if (!anyStanDays) {
                setStatsToUse(combinedPlayerResults);
                setShowStatSummary(true);
                setShowStatSelectionDropdown(false);
            }
        }
    };

    const handleChange = (selected) => {
        setValue(selected);
    };

    function showPlayerStats(index, player, playerName) {
        return (
            <Player
                key={index}
                player={player}
                name={playerName}
                playersStats={statsToUse}
                showStatSummary={showStatSummary}
                playedForOtherTeam={showStatSelectionDropdown}
            ></Player>
        );
    }

    return (
        <div id="player-stat" className="center">
            <h1>PLAYER STATS</h1>
            <Form
                id="player-search-form"
                className="center"
                onSubmit={handleSubmit}
            >
                <Fragment>
                    <Form.Group className="mb-3">
                        <Typeahead
                            id="player-search"
                            placeholder="Player..."
                            onChange={handleChange}
                            options={['SHOW ALL'].concat(playerNameArray)}
                            selected={value}
                            size="lg"
                        />
                    </Form.Group>
                </Fragment>
                <Button variant="light" type="submit">
                    Search
                </Button>
            </Form>
            <br />

            {/* Shows all players */}
            {(!searchedPlayerName ||
                searchedPlayerName.toLowerCase() === 'show all') && (
                <ListGroup>
                    {keys.map((p, index) => {
                        const playerName = keys[index];
                        {
                            return showPlayerStats(index, p, playerName);
                        }
                    })}
                </ListGroup>
            )}

            {/* Only shows searched for player */}
            {searchedPlayerName && (
                <ListGroup>
                    {showStatSelectionDropdown && (
                        <PlayerStatChoiceDropdown
                            dropDownText={dropDownText}
                            statsCallback={statsCallback}
                        />
                    )}
                    {keys.map((p, index) => {
                        const playerName = keys[index];
                        if (
                            playerName.toLowerCase() ===
                            searchedPlayerName.toLowerCase()
                        ) {
                            {
                                return showPlayerStats(index, p, playerName);
                            }
                        }
                    })}
                </ListGroup>
            )}
        </div>
    );
}

export default PlayerStats;
