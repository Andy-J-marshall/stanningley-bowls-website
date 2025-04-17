import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NewsItem from './newsItem';
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

    return (
        <div id="news">
            <h1>latest news</h1>
            <Row xs={1} lg={3} className="g-4 align-items-start">
                <Col>
                <Col>
                    <NewsItem
                        title="BOWLS BIG WEEKEND"
                        openingText="Stanningley will be hosting an open day on Sunday 25th May for the Bowls Big Weekend."
                        mainText="Members will be on hand to show anyone who is interested in playing bowls how to play. No experience or equipment required, we will provide everything you need."
                        imgSrc={volunteeringImg}
                        callback={handleNewsExpand2}
                        expanded={expandNews2}
                    />
                <Col>
                    <NewsItem
                        title="LADIES TEAM"
                        openingText="We are entering a team into the Leeds Ladies League for the 2025 season."
                        mainText="If you are interested in playing then please contact a club member. No experience is necessary."
                        imgSrc={ladiesImg}
                        callback={handleNewsExpand3}
                        expanded={expandNews3}
                    />
                </Col>
                </Col>
                    <NewsItem
                        title="FUNDRAISING"
                        openingText="Stanningley has signed up to EasyFundraising to raise money for the club."
                        mainText="We will earn commission for everything you purchase online if you shop via the EasyFundraising app, and it won't cost you anything. Please sign up by clicking the below link."
                        linkText="Sign up"
                        linkUrl="https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=370321&invite=7sk19t&referral-campaign=c2s&utm_campaign=web-referral"
                        imgSrc={fundraisingImg}
                        callback={handleNewsExpand1}
                        expanded={expandNews1}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default News;
