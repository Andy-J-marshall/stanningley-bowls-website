import React from 'react';
import { Table } from 'react-bootstrap';
import { capitalizeText } from '../helpers/utils';

function StatsTableDisplay(props) {
    const minGames = props.minGames;
    const playerOrTeam = props.playerOrTeam;
    let bestWinPerc = props.bestWinPerc;
    const bestWinPercPlayerOrTeam = props.bestWinPercPlayerOrTeam;
    // Player stats
    const mostWins = props.mostWins;
    const mostWinsPlayer = props.mostWinsPlayer;
    const mostGames = props.mostGames;
    const mostGamesPlayer = props.mostGamesPlayer;
    const bestAverage = props.bestAverage;
    const bestAveragePlayer = props.bestAveragePlayer;
    const bestScore = props.bestScore;
    const bestScorePlayer = props.bestScorePlayer;
    // Team stats
    const bestTeamPointsPerGame = props.bestTeamPointsPerGame;
    const bestTeamPointsPerGameTeam = props.bestTeamPointsPerGameTeam;
    const fewestPointsConcededPerGame = props.fewestPointsConcededPerGame;
    const fewestPointsConcededTeam = props.fewestPointsConcededPerGameTeam;
    const bestTeamAggPerGame = props.bestTeamAggPerGame;
    const bestTeamAggPerGameTeam = props.bestTeamAggPerGameTeam;
    const lowestAggConcededPerGame = props.lowestAggConcededPerGame;
    const lowestAggConcededPerGameTeam = props.lowestAggConcededPerGameTeam;

    if (bestWinPerc) {
        bestWinPerc =
            bestWinPerc.toFixed(1) % 10
                ? bestWinPerc.toFixed(1)
                : bestWinPerc.toFixed(0);
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Record</th>
                        <th>Value</th>
                        <th>{playerOrTeam} (Games Played)</th>
                    </tr>
                </thead>
                <tbody>
                    {mostGames && mostGamesPlayer && mostGames > 0 && (
                        <tr>
                            <td>Most Games</td>
                            <td>{mostGames}</td>
                            <td>{capitalizeText(mostGamesPlayer)}</td>
                        </tr>
                    )}
                    {mostWins && mostWinsPlayer && mostWins > 0 && (
                        <tr>
                            <td>Most Wins</td>
                            <td>{mostWins}</td>
                            <td>{capitalizeText(mostWinsPlayer)}</td>
                        </tr>
                    )}
                    {bestWinPerc && bestWinPercPlayerOrTeam && bestWinPerc > 0 && (
                        <tr>
                            <td>Win percentage</td>
                            <td>{bestWinPerc}%</td>
                            <td>{capitalizeText(bestWinPercPlayerOrTeam)}</td>
                        </tr>
                    )}
                    {bestAverage && bestAveragePlayer && bestAverage >= -21 && (
                        <tr>
                            <td>Average</td>
                            <td>{bestAverage.toFixed(2)}</td>
                            <td>{capitalizeText(bestAveragePlayer)}</td>
                        </tr>
                    )}
                    {bestScore && bestScorePlayer && bestScore > 0 && (
                        <tr>
                            <td>Score per game</td>
                            <td>{bestScore.toFixed(2)}</td>
                            <td>{capitalizeText(bestScorePlayer)}</td>
                        </tr>
                    )}
                    {bestTeamPointsPerGameTeam &&
                        bestTeamPointsPerGame &&
                        bestTeamPointsPerGame > 0 && (
                            <tr>
                                <td>Score per game</td>
                                <td>{bestTeamPointsPerGame.toFixed(2)}</td>
                                <td>
                                    {capitalizeText(bestTeamPointsPerGameTeam)}
                                </td>
                            </tr>
                        )}
                    {fewestPointsConcededTeam &&
                        fewestPointsConcededPerGame &&
                        fewestPointsConcededPerGame > 0 && (
                            <tr>
                                <td>Opponent score per game</td>
                                <td>
                                    {fewestPointsConcededPerGame.toFixed(2)}
                                </td>
                                <td>
                                    {capitalizeText(fewestPointsConcededTeam)}
                                </td>
                            </tr>
                        )}
                    {bestTeamAggPerGameTeam &&
                        bestTeamAggPerGame &&
                        bestTeamAggPerGame > 0 && (
                            <tr>
                                <td>Points per game</td>
                                <td>{bestTeamAggPerGame.toFixed(2)}</td>
                                <td>
                                    {capitalizeText(bestTeamAggPerGameTeam)}
                                </td>
                            </tr>
                        )}
                    {lowestAggConcededPerGame &&
                        lowestAggConcededPerGameTeam &&
                        lowestAggConcededPerGame > 0 && (
                            <tr>
                                <td>Opponent points per game</td>
                                <td>{lowestAggConcededPerGame.toFixed(2)}</td>
                                <td>
                                    {capitalizeText(
                                        lowestAggConcededPerGameTeam
                                    )}
                                </td>
                            </tr>
                        )}
                </tbody>
            </Table>
            <p>* minimum of {minGames} games</p>
        </div>
    );
}

export default StatsTableDisplay;
