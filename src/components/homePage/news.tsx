import { useState } from 'react';
import { Button, Card, Collapse, Col, Row } from 'react-bootstrap';
import fundraisingImg from '../../images/news/fundraising.png';
import volunteeringImg from '../../images/news/volunteering.png';
import ladiesImg from '../../images/news/ladies.png';

function News() {
    const [expandNews1, setExpandNews1] = useState(false);
    const [expandNews2, setExpandNews2] = useState(false);
    const [expandNews3, setExpandNews3] = useState(false);

    function handleNewsExpand1() {
        setExpandNews1(!expandNews1);
        setExpandNews2(false);
        setExpandNews3(false);
    }

    function handleNewsExpand2() {
        setExpandNews2(!expandNews2);
        setExpandNews1(false);
        setExpandNews3(false);
    }

    function handleNewsExpand3() {
        setExpandNews3(!expandNews3);
        setExpandNews1(false);
        setExpandNews2(false);
    }

    const newsItems = [
        {
            title: 'FUNDRAISING',
            openingLine:
                'Stanningley has signed up to EasyFundraising to raise money for the club.',
            mainText:
                "We will earn commission for everything you purchase online if you shop via the EasyFundraising app, and it won't cost you anything. Please sign up by clicking the below link.",
            linkText: 'Sign up',
            link: 'https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=370321&invite=7sk19t&referral-campaign=c2s&utm_campaign=web-referral',
            imgSrc: fundraisingImg,
            callback: handleNewsExpand1,
            expanded: expandNews1,
        },
        {
            title: 'VOLUNTEERING',
            openingLine:
                'Volunteer days are planned to help keep the club clean and tidy over winter.',
            mainText:
                'These will be every other Saturday between 10am and 12pm, starting on the 19th October. Members and non-members are welcome to help out.',
            linkText: '',
            link: '',
            imgSrc: volunteeringImg,
            callback: handleNewsExpand2,
            expanded: expandNews2,
        },
        {
            title: 'LADIES TEAM',
            openingLine:
                'We are entering a team into the Leeds Ladies League for the 2025 season.',
            mainText:
                'If you are interested in playing then please contact a club member. No experience is necessary.',
            linkText: '',
            link: '',
            imgSrc: ladiesImg,
            callback: handleNewsExpand3,
            expanded: expandNews3,
        },
    ];

    return (
        <div id="news">
            <h1>latest news</h1>
            <Row xs={1} lg={3} className="g-4 align-items-start">
                {newsItems.map((item, index) => {
                    return (
                        <Col key={index}>
                            <Card style={{ minHeight: '490px' }} bg="light">
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>
                                        {item.title.toUpperCase()}
                                    </Card.Title>
                                    <Card.Img
                                        style={{ paddingBottom: '1rem' }}
                                        variant="top"
                                        src={item.imgSrc}
                                    />
                                    {item.expanded && (
                                        <Card.Text className="flex-grow-1">
                                            {item.openingLine}
                                        </Card.Text>
                                    )}
                                    {!item.expanded && (
                                        <Card.Text className="flex-grow-1">
                                            {item.openingLine.length > 100 &&
                                            !item.expanded
                                                ? `${item.openingLine.substring(
                                                      0,
                                                      100
                                                  )}...`
                                                : item.openingLine}
                                        </Card.Text>
                                    )}
                                    {!item.expanded && (
                                        <div className="d-flex justify-content-end mt-auto">
                                            <Button
                                                variant="light"
                                                onClick={() => item.callback()}
                                                className="w-100"
                                            >
                                                READ MORE
                                            </Button>
                                        </div>
                                    )}
                                    <Collapse in={item.expanded}>
                                        <div>
                                            <Card.Text>
                                                {item.mainText}
                                            </Card.Text>
                                            {item.linkText && (
                                                <Button
                                                    style={{
                                                        marginBottom: '1rem',
                                                        backgroundColor:
                                                            '#0081a4',
                                                    }}
                                                >
                                                    <a
                                                        className="carousel-link"
                                                        href={item.link}
                                                        target="_blank"
                                                    >
                                                        {item.linkText}
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </Collapse>
                                    {item.expanded && (
                                        <Button
                                            variant="light"
                                            onClick={() => item.callback()}
                                        >
                                            CLOSE
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default News;
