import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { capitalizeText } from '../helpers/utils';
import GameTypeButton from './gameTypeButtons';

function PlayerStatsWinsLosses(props) {
    const stats = props.stats;
    const showStatSummary = props.showStatSummary;

    const {
        awayLosses,
        homeLosses,
        pairLosses,
        cupLosses,
        totalLosses,
        pairHomeLosses,
        pairAwayLosses,
        pairCupLosses,
        homeWins,
        awayWins,
        cupWins,
        pairWins,
        totalWins,
        pairHomeWins,
        pairAwayWins,
        pairCupWins,
        gamesPlayed,
        homeGamesPlayed,
        awayGamesPlayed,
        pairHomeGamesPlayed,
        pairAwayGamesPlayed,
        pairCupGamesPlayed,
        cupGamesPlayed,
        singlesGames,
        pairsGames,
        mondayWins,
        mondayLosses,
        mondayGames,
        tuesdayVetsWins,
        tuesdayVetsLosses,
        tuesdayVetsGames,
        tuesdayEveningWins,
        tuesdayEveningLosses,
        tuesdayEveningGames,
        wednesdayWins,
        wednesdayLosses,
        wednesdayGames,
        thursdayWins,
        thursdayLosses,
        thursdayGames,
        saturdayWins,
        saturdayLosses,
        saturdayGames,
        pairsPartnersCount,
        pairsPartnersCountWins,
        pairsPartnersCountLosses,
    } = stats;

    const [displayTotalWins, setDisplayTotalWins] = useState(totalWins);
    const [displayHomeWins, setDisplayHomeWins] = useState(homeWins);
    const [displayAwayWins, setDisplayAwayWins] = useState(awayWins);
    const [displayCupWins, setDisplayCupWins] = useState(cupWins);

    const [displayTotalLosses, setDisplayTotalLosses] = useState(totalLosses);
    const [displayHomeLosses, setDisplayHomeLosses] = useState(homeLosses);
    const [displayAwayLosses, setDisplayAwayLosses] = useState(awayLosses);
    const [displayCupLosses, setDisplayCupLosses] = useState(cupLosses);

    const [displayGamesPlayed, setDisplayGamesPlayed] = useState(gamesPlayed);
    const [displayHomeGamesPlayed, setDisplayHomeGamesPlayed] =
        useState(homeGamesPlayed);
    const [displayAwayGamesPlayed, setDisplayAwayGamesPlayed] =
        useState(awayGamesPlayed);
    const [displayCupGamesPlayed, setDisplayCupGamesPlayed] =
        useState(cupGamesPlayed);

    function displayAll() {
        setDisplayTotalWins(totalWins);
        setDisplayHomeWins(homeWins);
        setDisplayAwayWins(awayWins);
        setDisplayCupWins(cupWins);

        setDisplayTotalLosses(totalLosses);
        setDisplayHomeLosses(homeLosses);
        setDisplayAwayLosses(awayLosses);
        setDisplayCupLosses(cupLosses);

        setDisplayGamesPlayed(gamesPlayed);
        setDisplayHomeGamesPlayed(homeGamesPlayed);
        setDisplayAwayGamesPlayed(awayGamesPlayed);
        setDisplayCupGamesPlayed(cupGamesPlayed);
    }

    function displaySingles() {
        setDisplayTotalWins(totalWins - pairWins);
        setDisplayHomeWins(homeWins - pairHomeWins);
        setDisplayAwayWins(awayWins - pairAwayWins);
        setDisplayCupWins(cupWins - pairCupWins);

        setDisplayTotalLosses(totalLosses - pairLosses);
        setDisplayHomeLosses(homeLosses - pairHomeLosses);
        setDisplayAwayLosses(awayLosses - pairAwayLosses);
        setDisplayCupLosses(cupLosses - pairCupLosses);

        setDisplayGamesPlayed(gamesPlayed - pairsGames);
        setDisplayHomeGamesPlayed(homeGamesPlayed - pairHomeGamesPlayed);
        setDisplayAwayGamesPlayed(awayGamesPlayed - pairAwayGamesPlayed);
        setDisplayCupGamesPlayed(cupGamesPlayed - pairCupGamesPlayed);
    }

    function displayPairs() {
        setDisplayTotalWins(pairWins);
        setDisplayHomeWins(pairHomeWins);
        setDisplayAwayWins(pairAwayWins);
        setDisplayCupWins(pairCupWins);

        setDisplayTotalLosses(pairLosses);
        setDisplayHomeLosses(pairHomeLosses);
        setDisplayAwayLosses(pairAwayLosses);
        setDisplayCupLosses(pairCupLosses);

        setDisplayGamesPlayed(pairsGames);
        setDisplayHomeGamesPlayed(pairHomeGamesPlayed);
        setDisplayAwayGamesPlayed(pairAwayGamesPlayed);
        setDisplayCupGamesPlayed(pairCupGamesPlayed);
    }

    // TODO move games played stats into here as well and remove that component (remember to change eventKeys)?
    return (
        <div id="player-stats-wins-losses">
            <Accordion.Item eventKey="2">
                <Accordion.Header id="stats-wl">WINS & LOSSES</Accordion.Header>
                <Accordion.Body>
                    {pairsGames > 0 && singlesGames > 0 && (
                        <GameTypeButton
                            displayAllCallback={displayAll}
                            displaySinglesCallback={displaySingles}
                            displayPairsCallback={displayPairs}
                        />
                    )}

                    {displayGamesPlayed > 0 && (
                        <div>
                            <h3>TOTAL</h3>
                            <p>Wins: {displayTotalWins}</p>
                            <p>Losses: {displayTotalLosses}</p>
                            <p>
                                Win percentage:{' '}
                                {(
                                    (displayTotalWins / displayGamesPlayed) *
                                    100
                                ).toFixed(0)}
                                %
                            </p>
                        </div>
                    )}
                    {displayHomeGamesPlayed > 0 && (
                        <div>
                            <h3>HOME</h3>
                            <p>Wins: {displayHomeWins}</p>
                            <p>Losses: {displayHomeLosses}</p>
                            <p>
                                Win percentage:{' '}
                                {(
                                    (displayHomeWins / displayHomeGamesPlayed) *
                                    100
                                ).toFixed(0)}
                                %
                            </p>
                        </div>
                    )}
                    {displayAwayGamesPlayed > 0 && (
                        <div>
                            <h3>AWAY</h3>
                            <p>Wins: {displayAwayWins}</p>
                            <p>Losses: {displayAwayLosses}</p>
                            <p>
                                Win percentage:{' '}
                                {(
                                    (displayAwayWins / displayAwayGamesPlayed) *
                                    100
                                ).toFixed(0)}
                                %
                            </p>
                        </div>
                    )}

                    {displayCupGamesPlayed > 0 && (
                        <div>
                            <h3>CUP</h3>
                            <p>Wins: {displayCupWins}</p>
                            <p>Losses: {displayCupLosses}</p>
                            <p>
                                Win percentage:{' '}
                                {(
                                    (displayCupWins / displayCupGamesPlayed) *
                                    100
                                ).toFixed(0)}
                                %
                            </p>
                        </div>
                    )}
                    {/* TODO make it obvious visually that it's all game types */}
                    {!showStatSummary && (
                        <div>
                            <h3>TEAMS</h3>
                            <div>
                                {mondayGames > 0 && (
                                    <div>
                                        <h5>MONDAY</h5>
                                        <p>Wins: {mondayWins}</p>
                                        <p>Losses: {mondayLosses}</p>
                                        <p>
                                            Win percentage:{' '}
                                            {(
                                                (mondayWins / mondayGames) *
                                                100
                                            ).toFixed(0)}
                                            %
                                        </p>
                                    </div>
                                )}
                                {tuesdayVetsGames > 0 && (
                                    <div>
                                        <h5>TUESDAY VETS</h5>
                                        <p>Wins: {tuesdayVetsWins}</p>
                                        <p>Losses: {tuesdayVetsLosses}</p>
                                        <p>
                                            Win percentage:{' '}
                                            {(
                                                (tuesdayVetsWins /
                                                    tuesdayVetsGames) *
                                                100
                                            ).toFixed(0)}
                                            %
                                        </p>
                                    </div>
                                )}
                                {tuesdayEveningGames > 0 && (
                                    <div>
                                        <h5>TUESDAY EVENING</h5>
                                        <p>Wins: {tuesdayEveningWins}</p>
                                        <p>Losses: {tuesdayEveningLosses}</p>
                                        <p>
                                            Win percentage:{' '}
                                            {(
                                                (tuesdayEveningWins /
                                                    tuesdayEveningGames) *
                                                100
                                            ).toFixed(0)}
                                            %
                                        </p>
                                    </div>
                                )}
                                {wednesdayGames > 0 && (
                                    <div>
                                        <h5>WEDNESDAY</h5>
                                        <p>Wins: {wednesdayWins}</p>
                                        <p>Losses: {wednesdayLosses}</p>
                                        <p>
                                            Win percentage:{' '}
                                            {(
                                                (wednesdayWins /
                                                    wednesdayGames) *
                                                100
                                            ).toFixed(0)}
                                            %
                                        </p>
                                    </div>
                                )}
                                {thursdayGames > 0 && (
                                    <div>
                                        <h5>THURSDAY VETS</h5>
                                        <p>Wins: {thursdayWins}</p>
                                        <p>Losses: {thursdayLosses}</p>
                                        <p>
                                            Win percentage:{' '}
                                            {(
                                                (thursdayWins / thursdayGames) *
                                                100
                                            ).toFixed(0)}
                                            %
                                        </p>
                                    </div>
                                )}
                                {saturdayGames > 0 && (
                                    <div>
                                        <h5>SATURDAY</h5>
                                        <p>Wins: {saturdayWins}</p>
                                        <p>Losses: {saturdayLosses}</p>
                                        <p>
                                            Win percentage:{' '}
                                            {(
                                                (saturdayWins / saturdayGames) *
                                                100
                                            ).toFixed(0)}
                                            %
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    {pairsGames > 0 && (
                        <div>
                            {Object.keys(pairsPartnersCount).length > 0 && (
                                <div>
                                    <h3>PAIRS PARTNERS</h3>
                                    {Object.keys(pairsPartnersCount).map(
                                        (partner, key) => {
                                            return (
                                                <p key={key}>
                                                    {
                                                        pairsPartnersCount[
                                                            partner
                                                        ].timesPaired
                                                    }{' '}
                                                    played with{' '}
                                                    {capitalizeText([partner])}
                                                </p>
                                            );
                                        }
                                    )}
                                    {Object.keys(pairsPartnersCountWins).map(
                                        (partner, key) => {
                                            return (
                                                <p key={key}>
                                                    {
                                                        pairsPartnersCountWins[
                                                            partner
                                                        ].timesPaired
                                                    }{' '}
                                                    won with{' '}
                                                    {capitalizeText([partner])}
                                                </p>
                                            );
                                        }
                                    )}
                                    {Object.keys(pairsPartnersCountLosses).map(
                                        (partner, key) => {
                                            return (
                                                <p key={key}>
                                                    {
                                                        pairsPartnersCountLosses[
                                                            partner
                                                        ].timesPaired
                                                    }{' '}
                                                    lost with{' '}
                                                    {capitalizeText([partner])}
                                                </p>
                                            );
                                        }
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
}

export default PlayerStatsWinsLosses;
