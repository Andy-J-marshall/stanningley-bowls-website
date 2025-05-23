import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { ResultsProps } from '../types/interfaces';
import { returnResultsArrayForTeamsWithGames } from '../helpers/resultsHelper';
const currentYear = new Date().getFullYear();

function Results(props: ResultsProps) {
    const stats = props.stats;
    const yearToDisplay = props.yearToDisplay;

    const yearInTitle =
        !isNaN(Number(stats.statsYear)) && currentYear !== Number(yearToDisplay)
            ? `${yearToDisplay.toLowerCase()}`
            : '';

    const { teamResults } = stats;

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const resultsArray = returnResultsArrayForTeamsWithGames(teamResults);

    const hasResults = resultsArray && resultsArray?.length > 0;

    if (!hasResults) {
        return (
            <div id="result">
                <h1>results</h1>
                <p>No results available for the selected year</p>
            </div>
        );
    }

    return (
        <div id="result">
            <h1>{yearInTitle} results</h1>

            {resultsArray?.map((team, idx) => {
                return (
                    <div key={idx} className="teamResult">
                        <h3>{team.name?.toLowerCase()}</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className="result-column">home</th>
                                    <th></th>
                                    <th></th>
                                    <th className="result-column">away</th>
                                </tr>
                            </thead>
                            {team.results.map((result, idx) => {
                                return (
                                    <tbody key={idx}>
                                        <tr>
                                            <td>{result.home.name}</td>
                                            <td className="result-central-column">
                                                {result.home.score}
                                            </td>
                                            <td>{result.away.score}</td>
                                            <td>{result.away.name}</td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                        </Table>
                        <br />
                        <hr />
                    </div>
                );
            })}
            <br />
            {<p className="footnote">Last Updated: {stats.lastUpdated}</p>}
        </div>
    );
}

export default Results;
