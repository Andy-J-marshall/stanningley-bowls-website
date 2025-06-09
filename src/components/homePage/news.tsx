import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NewsItem from './newsItem';
import fundraisingImg from '../../images/news/fundraising.png';
import communityImg from '../../images/news/community_2.png';
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
                    <NewsItem
                        title="KILLER BOWLS"
                        openingText="More than 50 players gathered at Stanningley on Friday for a thrilling night of 'Killer' bowls and a BBQ, creating an electric atmosphere for newcomers and seasoned bowlers alike."
                        mainText="Besides Killer, guests took part in the pass-the-flag competition, a fun way to learn bowling basics. Many attendees weren't club members, proving the sport's broad appeal."
                        closingText="Ruth Ritchie, who had never held a bowl before, won pass-the-flag competition, while Andy Marshall secured victory in a gripping round of Killer."
                        linkText="Read the full article"
                        linkUrl="https://westleedsdispatch.com/stanningley-park-bowling-club-welcomes-you-to-killer-bowls"
                        imgSrc={communityImg}
                        callback={handleNewsExpand2}
                        expanded={expandNews2}
                    />
                </Col>
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
                <Col>
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
