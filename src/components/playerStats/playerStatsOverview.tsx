import { Accordion } from 'react-bootstrap';
import PlayerStatOverviewTiles from './playerStatOverviewTiles';
import { PlayerStatsComponentsProps } from '../../types/interfaces';

function PlayerStatsOverview(props: PlayerStatsComponentsProps) {
    const stats = props.stats;

    const { totalLosses, totalWins, gamesPlayed, average, biggestWin } = stats;

    return (
        <Accordion.Item eventKey="0">
            <Accordion.Header id="stats-overview">OVERVIEW</Accordion.Header>
            <Accordion.Body>
                <PlayerStatOverviewTiles
                    games={gamesPlayed}
                    average={average}
                    wins={totalWins}
                    losses={totalLosses}
                    biggestWin={biggestWin}
                    idPrefix="total"
                />
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default PlayerStatsOverview;
