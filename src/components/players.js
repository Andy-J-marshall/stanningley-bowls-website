import React from 'react';
import { ListGroup, Accordion } from 'react-bootstrap';
import { capitalizeText, arrayToList } from '../helpers/utils';

function Players(props) {
    const player = props.player;
    const playersStats = props.playersStats;
    const name = props.name;

    const playerData = playersStats[player];
    let {
        totalAgg,
        totalAggAgainst,
        totalPairsAgg,
        totalPairsAggAgainst,
        totalScore,
        totalScoreAgainst,
        awayLosses,
        homeLosses,
        cupLosses,
        homeWins,
        awayWins,
        cupWins,
        winningPairsPartners,
        losingPairsPartners,
        beatenBy,
        beatenByTeam,
        beatenOpponents,
        beatenTeam,
        pairLosses,
        pairWins,
        pairsPartners,
        totalHomeAgg,
        totalHomeAggAgainst,
        totalAwayAgg,
        totalAwayAggAgainst,
        totalHomeScore,
        totalHomeScoreAgainst,
        totalAwayScore,
        totalAwayScoreAgainst,
        monday,
        tuesday,
        thursday,
        saturday,
    } = playerData;
    const totalLosses = awayLosses + homeLosses + cupLosses;
    const totalWins = awayWins + homeWins + cupWins;
    const gamesPlayed = totalLosses + totalWins;
    const homeGamesPlayed = homeWins + homeLosses;
    const awayGamesPlayed = awayWins + awayLosses;
    const average = (totalAgg - totalAggAgainst) / gamesPlayed;
    const homeAverage = (totalHomeAgg - totalHomeAggAgainst) / homeGamesPlayed;
    const awayAverage = (totalAwayAgg - totalAwayAggAgainst) / awayGamesPlayed;
    const averageScore = totalScore / (gamesPlayed - cupWins - cupLosses);
    const averageScoreAgainst =
        totalScoreAgainst / (gamesPlayed - cupWins - cupLosses);
    const homeAverageScore = totalHomeScore / homeGamesPlayed;
    const homeAverageScoreAgainst = totalHomeScoreAgainst / homeGamesPlayed;
    const awayAverageScore = totalAwayScore / awayGamesPlayed;
    const awayAverageScoreAgainst = totalAwayScoreAgainst / awayGamesPlayed;
    const pairsGames = pairLosses + pairWins;
    const singlesGames = gamesPlayed - pairsGames;
    const singlesAgg = totalAgg - totalPairsAgg;
    const singlesAggAgainst = totalAggAgainst - totalPairsAggAgainst;
    const singlesAvg = (singlesAgg - singlesAggAgainst) / singlesGames;
    const pairsAvg = (totalPairsAgg - totalPairsAggAgainst) / pairsGames;
    beatenBy = beatenBy ? arrayToList(beatenBy) : beatenBy;
    beatenOpponents = beatenOpponents
        ? arrayToList(beatenOpponents)
        : beatenOpponents;
    beatenByTeam = beatenByTeam ? arrayToList(beatenByTeam) : beatenByTeam;
    beatenTeam = beatenTeam ? arrayToList(beatenTeam) : beatenTeam;
    const mondayWins = monday.wins;
    const mondayLosses = monday.games - monday.wins;
    const mondayGames = monday.games;
    const mondayAvg = monday.aggDiff / mondayGames;
    const tuesdayWins = tuesday.wins;
    const tuesdayLosses = tuesday.games - tuesday.wins;
    const tuesdayGames = tuesday.games;
    const tuesdayAvg = tuesday.aggDiff / tuesdayGames;
    const thursdayWins = thursday.wins;
    const thursdayLosses = thursday.games - thursday.wins;
    const thursdayGames = thursday.games;
    const thursdayAvg = thursday.aggDiff / thursdayGames;
    const saturdayWins = saturday.wins;
    const saturdayLosses = saturday.games - saturday.wins;
    const saturdayGames = saturday.games;
    const saturdayAvg = saturday.aggDiff / saturdayGames;
    let daysPlayedCount = [
        { day: 'Monday', gamesPlayed: mondayGames },
        { day: 'Tuesday', gamesPlayed: tuesdayGames },
        { day: 'Thursday', gamesPlayed: thursdayGames },
        { day: 'Saturday', gamesPlayed: saturdayGames },
    ];
    daysPlayedCount = daysPlayedCount.filter((day) => day.gamesPlayed > 0);

    const pairsPartnersCount = calculatePairsPartnersCount(pairsPartners);
    const pairsPartnersCountWins =
        calculatePairsPartnersCount(winningPairsPartners);
    const pairsPartnersCountLosses =
        calculatePairsPartnersCount(losingPairsPartners);

    function calculatePairsPartnersCount(allPairsPartners) {
        const uniquePartners = allPairsPartners.filter((partner, index) => {
            return allPairsPartners.indexOf(partner) === index;
        });
        const partnersReturnObj = uniquePartners.reduce(
            (partnerObj, player) => {
                partnerObj[player] = { timesPaired: 0 };
                return partnerObj;
            },
            {}
        );

        allPairsPartners.forEach((partner) => {
            if (uniquePartners.includes(partner)) {
                partnersReturnObj[partner].timesPaired += 1;
            }
        });
        return partnersReturnObj;
    }

    const gameOrGames = gamesPlayed > 0 ? 'games' : 'game';
    const winOrWins = totalWins > 0 ? 'wins' : 'win';
    const lossOrLosses = totalLosses > 0 ? 'losses' : 'loss';
    return (
        <div>
            <ListGroup.Item>
                <h2>{capitalizeText([name])}</h2>
                {gamesPlayed === 0 && <p>No games played</p>}
                {gamesPlayed > 0 && (
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>GAMES PLAYED</Accordion.Header>
                            <Accordion.Body>
                                <h3>TOTAL</h3>
                                <p>
                                    {gamesPlayed} total {gameOrGames} (
                                    {singlesGames} singles, {pairsGames} pairs)
                                </p>
                                <h3>TEAMS</h3>
                                {daysPlayedCount.map((day, key) => {
                                    return (
                                        <p key={key}>
                                            {day.gamesPlayed} on {day.day}
                                        </p>
                                    );
                                })}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>RESULTS</Accordion.Header>
                            <Accordion.Body>
                                {totalWins > 0 && (
                                    <div>
                                        <h3>WINS</h3>
                                        <p>
                                            {totalWins} total {winOrWins} (
                                            {homeWins} home, {awayWins} away,{' '}
                                            {cupWins} cup)
                                        </p>
                                        <p>
                                            {(
                                                (totalWins / gamesPlayed) *
                                                100
                                            ).toFixed(0)}
                                            % win percentage
                                        </p>
                                        <p>
                                            {totalWins - pairWins} singles,{' '}
                                            {pairWins} pairs
                                        </p>
                                        {mondayGames > 0 && (
                                            <p>{mondayWins} on Monday</p>
                                        )}
                                        {tuesdayGames > 0 && (
                                            <p>{tuesdayWins} on Tuesday</p>
                                        )}
                                        {thursdayGames > 0 && (
                                            <p>{thursdayWins} on Thursday</p>
                                        )}
                                        {saturdayGames > 0 && (
                                            <p>{saturdayWins} on Saturday</p>
                                        )}
                                    </div>
                                )}
                                {totalLosses > 0 && (
                                    <div>
                                        <h3>LOSSES</h3>
                                        <p>
                                            {totalLosses} total {lossOrLosses} (
                                            {homeLosses} home, {awayLosses}{' '}
                                            away, {cupLosses} cup)
                                        </p>
                                        {pairLosses > 0 && (
                                            <div>
                                                <p>
                                                    {totalLosses - pairLosses}{' '}
                                                    singles, {pairLosses} pairs
                                                </p>
                                            </div>
                                        )}
                                        {mondayGames > 0 && (
                                            <p>{mondayLosses} on Monday</p>
                                        )}
                                        {tuesdayGames > 0 && (
                                            <p>{tuesdayLosses} on Tuesday</p>
                                        )}
                                        {thursdayGames > 0 && (
                                            <p>{thursdayLosses} on Thursday</p>
                                        )}
                                        {saturdayGames > 0 && (
                                            <p>{saturdayLosses} on Saturday</p>
                                        )}
                                    </div>
                                )}

                                {pairsGames > 0 && (
                                    <div>
                                        {pairsPartners.length > 0 && (
                                            <div>
                                                <h3>PAIRS PARTNERS</h3>
                                                {Object.keys(
                                                    pairsPartnersCount
                                                ).map((partner, key) => {
                                                    return (
                                                        <p key={key}>
                                                            {
                                                                pairsPartnersCount[
                                                                    partner
                                                                ].timesPaired
                                                            }{' '}
                                                            played with{' '}
                                                            {partner}
                                                        </p>
                                                    );
                                                })}
                                                {Object.keys(
                                                    pairsPartnersCountWins
                                                ).map((partner, key) => {
                                                    return (
                                                        <p key={key}>
                                                            {
                                                                pairsPartnersCountWins[
                                                                    partner
                                                                ].timesPaired
                                                            }{' '}
                                                            won with {partner}
                                                        </p>
                                                    );
                                                })}
                                                {Object.keys(
                                                    pairsPartnersCountLosses
                                                ).map((partner, key) => {
                                                    return (
                                                        <p key={key}>
                                                            {
                                                                pairsPartnersCountLosses[
                                                                    partner
                                                                ].timesPaired
                                                            }{' '}
                                                            lost with {partner}
                                                        </p>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>AVERAGES</Accordion.Header>
                            <Accordion.Body>
                                {average >= -21 && (
                                    <div>
                                        <h3>TOTAL</h3>
                                        <p>Average = {average.toFixed(2)}</p>
                                        {homeAverage > -22 && (
                                            <p>
                                                Home = {homeAverage.toFixed(2)}
                                            </p>
                                        )}
                                        {awayAverage > -22 && (
                                            <p>
                                                Away = {awayAverage.toFixed(2)}
                                            </p>
                                        )}
                                        {pairsGames > 0 && (
                                            <div>
                                                {singlesAvg > -22 && (
                                                    <p>
                                                        Singles ={' '}
                                                        {singlesAvg.toFixed(2)}
                                                    </p>
                                                )}
                                                {pairsAvg > -22 && (
                                                    <p>
                                                        Pairs ={' '}
                                                        {pairsAvg.toFixed(2)}
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                        {(mondayGames > 0 ||
                                            tuesdayGames > 0 ||
                                            thursdayGames > 0 ||
                                            saturdayGames > 0) && (
                                            <h3>TEAMS</h3>
                                        )}
                                        {mondayGames > 0 && (
                                            <p>
                                                Monday = {mondayAvg.toFixed(2)}
                                            </p>
                                        )}
                                        {tuesdayGames > 0 && (
                                            <p>
                                                Tuesday ={' '}
                                                {tuesdayAvg.toFixed(2)}
                                            </p>
                                        )}
                                        {thursdayGames > 0 && (
                                            <p>
                                                Thursday ={' '}
                                                {thursdayAvg.toFixed(2)}
                                            </p>
                                        )}
                                        {saturdayGames > 0 && (
                                            <p>
                                                Saturday ={' '}
                                                {saturdayAvg.toFixed(2)}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>POINTS</Accordion.Header>
                            <Accordion.Body>
                                {averageScore >= 0 && (
                                    <div>
                                        <h3>TOTAL</h3>
                                        <p>
                                            Points scored = {totalScore} /{' '}
                                            {(gamesPlayed -
                                                cupLosses -
                                                cupWins) *
                                                5}
                                        </p>
                                        <p>
                                            Points conceded ={' '}
                                            {totalScoreAgainst} /{' '}
                                            {(gamesPlayed -
                                                cupLosses -
                                                cupWins) *
                                                5}
                                        </p>
                                        <p>
                                            Average points ={' '}
                                            {averageScore.toFixed(2)} / 5
                                        </p>
                                        <p>
                                            Average points conceded ={' '}
                                            {averageScoreAgainst.toFixed(2)} / 5
                                        </p>
                                        {homeAverageScore >= 0 && (
                                            <div>
                                                <h3>HOME</h3>
                                                <p>
                                                    Home points scored ={' '}
                                                    {totalHomeScore} /{' '}
                                                    {homeGamesPlayed * 5}
                                                </p>
                                                <p>
                                                    Home points conceded ={' '}
                                                    {totalHomeScoreAgainst} /{' '}
                                                    {homeGamesPlayed * 5}
                                                </p>
                                                <p>
                                                    Average home points ={' '}
                                                    {homeAverageScore.toFixed(
                                                        2
                                                    )}{' '}
                                                    / 5
                                                </p>
                                                <p>
                                                    Average home points conceded
                                                    ={' '}
                                                    {homeAverageScoreAgainst.toFixed(
                                                        2
                                                    )}{' '}
                                                    / 5
                                                </p>
                                            </div>
                                        )}
                                        {awayAverageScore >= 0 && (
                                            <div>
                                                <h3>AWAY</h3>
                                                <p>
                                                    Away points scored ={' '}
                                                    {totalAwayScore} /{' '}
                                                    {awayGamesPlayed * 5}
                                                </p>
                                                <p>
                                                    Away points conceded ={' '}
                                                    {totalAwayScoreAgainst} /{' '}
                                                    {awayGamesPlayed * 5}
                                                </p>
                                                <p>
                                                    Average away points ={' '}
                                                    {awayAverageScore.toFixed(
                                                        2
                                                    )}{' '}
                                                    / 5
                                                </p>
                                                <p>
                                                    Average away points conceded
                                                    ={' '}
                                                    {awayAverageScoreAgainst.toFixed(
                                                        2
                                                    )}{' '}
                                                    / 5
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>AGGREGATES</Accordion.Header>
                            <Accordion.Body>
                                <h3>TOTAL</h3>
                                <p>
                                    Aggregate scored = {totalAgg} /{' '}
                                    {gamesPlayed * 21}
                                </p>
                                <p>
                                    Aggregate conceded = {totalAggAgainst} /{' '}
                                    {gamesPlayed * 21}
                                </p>

                                <h3>HOME</h3>
                                <p>
                                    Home aggregate scored = {totalHomeAgg} /{' '}
                                    {homeGamesPlayed * 21}
                                </p>
                                <p>
                                    Home aggregate conceded ={' '}
                                    {totalHomeAggAgainst} /{' '}
                                    {homeGamesPlayed * 21}
                                </p>
                                <h3>AWAY</h3>
                                <p>
                                    Away aggregate scored = {totalAwayAgg} /{' '}
                                    {awayGamesPlayed * 21}
                                </p>
                                <p>
                                    Away aggregate conceded ={' '}
                                    {totalAwayAggAgainst} /{' '}
                                    {awayGamesPlayed * 21}
                                </p>
                                {pairsGames > 0 && (
                                    <div>
                                        <h3>SINGLES</h3>
                                        <p>
                                            Singles aggregate scored ={' '}
                                            {singlesAgg} / {singlesGames * 21}
                                        </p>
                                        <p>
                                            Singles aggregate conceded ={' '}
                                            {singlesAggAgainst} /{' '}
                                            {singlesGames * 21}
                                        </p>
                                        <h3>PAIRS</h3>
                                        <p>
                                            Pairs aggregate scored ={' '}
                                            {totalPairsAgg} / {pairsGames * 21}
                                        </p>
                                        <p>
                                            Pairs aggregate conceded ={' '}
                                            {totalPairsAggAgainst} /{' '}
                                            {pairsGames * 21}
                                        </p>
                                    </div>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>OPPONENTS</Accordion.Header>
                            <Accordion.Body>
                                {beatenOpponents.length > 0 && (
                                    <div>
                                        <h3>OPPONENTS BEATEN</h3>
                                        <p>{beatenOpponents}</p>
                                    </div>
                                )}
                                {beatenBy.length > 0 && (
                                    <div>
                                        <h3>OPPONENTS LOST TO</h3>
                                        <p>{beatenBy}</p>
                                    </div>
                                )}
                                {beatenTeam.length > 0 && (
                                    <div>
                                        <h3>TEAMS BEATEN</h3>
                                        <p>{beatenTeam}</p>
                                    </div>
                                )}
                                {beatenByTeam.length > 0 && (
                                    <div>
                                        <h3>TEAMS LOST TO</h3>
                                        <p>{beatenByTeam}</p>
                                    </div>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                )}
            </ListGroup.Item>
            <br />
        </div>
    );
}

export default Players;
