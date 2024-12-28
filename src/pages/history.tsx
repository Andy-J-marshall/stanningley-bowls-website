import { useEffect } from 'react';
import {
    Card,
    Button,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
} from 'react-bootstrap';
import clubCupImg from '../images/websiteImages/club_cup_2024.png';
import historicTeamImg from '../images/websiteImages/historic-team-photo.png';
import historicStatsImg from '../images/websiteImages/historic-stats.png';
import clubCupWinners from '../data/clubCupWinners.json';
import { config } from '../config';

const { emailUrl, teamPhotosUrl, historicStatsUrl } = config.socialLinks;

function History() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="history-page" className="page-component info-component center">
            <h1>history</h1>
            <p>
                There has been competitive crown green bowling at{' '}
                {config.teamNames.fullName} for well over 100 years. Below is a
                selection of photos, statistics, records and trophies from over
                that period. Our Club Cup has been run every single year since
                1911 and is highly coveted by members. In 2023 we introduced a
                conciliatory shield competition which has been a welcome
                inclusive addition to the annual competition.
            </p>
            <Row
                sm={1}
                md={2}
                xl={3}
                className="g-4 tabs justify-content-start"
            >
                <Col>
                    <Card bg="light" style={{ width: '19rem' }}>
                        <Card.Img
                            alt="historic-team-photos"
                            variant="top"
                            src={historicTeamImg}
                        />
                        <Card.Body>
                            <Card.Title>TEAM PHOTOS</Card.Title>
                            <Card.Text>Photos from the club house</Card.Text>
                            <Button
                                style={{ backgroundColor: '#0081a4' }}
                                href={teamPhotosUrl}
                                target="_blank"
                                variant="secondary"
                            >
                                View the photo album
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="light" style={{ width: '19rem' }}>
                        <Card.Img
                            alt="historic-team-stats"
                            variant="top"
                            src={historicStatsImg}
                        />
                        <Card.Body>
                            <Card.Title>HISTORIC STATS</Card.Title>
                            <Card.Text>Stats 1972-1990</Card.Text>
                            <Button
                                style={{ backgroundColor: '#0081a4' }}
                                href={historicStatsUrl}
                                target="_blank"
                                variant="secondary"
                            >
                                View the photo album
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br />
            <p>
                Due to some record keeping inaccuracies we have a number of
                years missing from the Club Cup competition, please{' '}
                <a className="link" href={emailUrl}>
                    contact us
                </a>{' '}
                if you can help fill in the gaps or if you have any other
                historical photos or stories about the club and its members.
            </p>
            <img
                style={{ width: '98%', paddingBottom: '1rem' }}
                src={clubCupImg}
            ></img>
            <h2>club cup winners</h2>
            <ListGroup style={{ width: '80%' }}>
                {clubCupWinners.map((record, idx) => {
                    return (
                        <ListGroupItem key={idx}>
                            {record.year} - {record.name}
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
            <br />
            <h2>trophies</h2>
            <h3>brotherton cup</h3>
            <ListGroup style={{ width: '35%' }}>
                <ListGroupItem>1927</ListGroupItem>
            </ListGroup>
            <br />
            <h3>leeds saturday</h3>
            <Row sm={1} md={2} className="g-4 tabs align-items-start">
                <Col>
                    <h5>league</h5>
                    <ListGroup>
                        <ListGroupItem>1926</ListGroupItem>
                        <ListGroupItem>1928</ListGroupItem>
                        <ListGroupItem>1929</ListGroupItem>
                        <ListGroupItem>1932</ListGroupItem>
                        <ListGroupItem>1933</ListGroupItem>
                        <ListGroupItem>1935</ListGroupItem>
                        <ListGroupItem>2023</ListGroupItem>
                        <ListGroupItem>2024</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col>
                    <h5>cup</h5>
                    <ListGroup>
                        <ListGroupItem>1925</ListGroupItem>
                        <ListGroupItem>1926</ListGroupItem>
                        <ListGroupItem>1927</ListGroupItem>
                        <ListGroupItem>1928</ListGroupItem>
                        <ListGroupItem>1929</ListGroupItem>
                        <ListGroupItem>1931</ListGroupItem>
                        <ListGroupItem>1932</ListGroupItem>
                        <ListGroupItem>1933</ListGroupItem>
                        <ListGroupItem>1936</ListGroupItem>
                        <ListGroupItem>1937</ListGroupItem>
                        <ListGroupItem>2023</ListGroupItem>
                        <ListGroupItem>2024</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
            <br />
            <h3>leeds tuesday vets</h3>
            <Row sm={1} md={2} className="g-4 tabs align-items-start">
                <Col>
                    <h5>league</h5>
                    <ListGroup>
                        <ListGroupItem>2017</ListGroupItem>
                        <ListGroupItem>2019</ListGroupItem>
                        <ListGroupItem>2023</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col>
                    <h5>clegg cup</h5>
                    <ListGroup>
                        <ListGroupItem>2017</ListGroupItem>
                        <ListGroupItem>2023</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
            <br />
            <h3>leeds half holiday</h3>
            <h5>penrose green cup</h5>
            <ListGroup style={{ width: '35%' }}>
                <ListGroupItem>1970</ListGroupItem>
                <ListGroupItem>2023</ListGroupItem>
            </ListGroup>
            <br />
            <h3>leeds thursday vets</h3>
            <h5>harrison cup</h5>
            <ListGroup style={{ width: '35%' }}>
                <ListGroupItem>1995</ListGroupItem>
                <ListGroupItem>2017</ListGroupItem>
            </ListGroup>
        </div>
    );
}
export default History;
