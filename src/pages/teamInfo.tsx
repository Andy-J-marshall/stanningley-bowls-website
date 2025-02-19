import { useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import monImg from '../images/teams/airewharfe_monday.png';
import tuesVetsImg from '../images/teams/leeds_tuesday_vets.png';
import thurVetsImg from '../images/teams/leeds_thursday_vets.png';
import satAImg from '../images/teams/leeds_saturday_a.png';
import satBImg from '../images/teams/leeds_saturday_b.png';
import tuesImg from '../images/teams/leeds_tuesday.png';
import wedImg from '../images/teams/leeds_half_holiday.png';
import ladiesImg from '../images/teams/leeds_ladies_thursday.png';
import wedPairsImg from '../images/teams/airewharfe_wednesday.png';

const teams = [
    {
        name: 'Leeds Monday Combined',
        link: 'https://bowlsnet.uk/AW-Mon',
        img: monImg,
    },
    {
        name: 'Leeds Tuesday Vets',
        link: 'https://bowlsnet.uk/Leeds-TueVets',
        img: tuesVetsImg,
    },
    {
        name: 'Leeds Tuesday',
        link: 'https://bowlsnet.uk/Leeds-Tue',
        img: tuesImg,
    },
    {
        name: 'Leeds Half Holiday',
        link: 'https://bowlsnet.uk/Leeds-Wed',
        img: wedImg,
    },
    {
        name: 'AireWharfe Wednesday Pairs',
        link: 'https://bowlsnet.uk/AW-WedPairs',
        img: wedPairsImg,
    },
    {
        name: 'Leeds Thursday Vets',
        link: 'https://bowlsnet.uk/Leeds-ThuVets',
        img: thurVetsImg,
    },
    {
        name: 'Leeds Ladies',
        link: 'https://bowlsnet.uk/LeedsLadies',
        img: ladiesImg,
    },
    {
        name: 'Leeds Saturday A',
        link: 'https://bowlsnet.uk/Leeds-Sat',
        img: satAImg,
    },
    {
        name: 'Leeds Saturday B',
        link: 'https://bowlsnet.uk/Leeds-Sat',
        img: satBImg,
    },
];

function TeamInfo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="team-info-page" className="page-component center">
            <h1>teams</h1>
            <Row xs={1} md={2} xl={3} className="g-4 tabs">
                {teams.map((team, idx) => (
                    <Col key={idx}>
                        <Card bg="light">
                            <Card.Img
                                alt="team-photo"
                                variant="top"
                                src={team.img}
                            />
                            <Card.Body>
                                <Card.Title>{team.name}</Card.Title>
                                <Button
                                    style={{ backgroundColor: '#0081a4' }}
                                    href={team.link}
                                    target="_blank"
                                >
                                    View on Bowlsnet
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default TeamInfo;
