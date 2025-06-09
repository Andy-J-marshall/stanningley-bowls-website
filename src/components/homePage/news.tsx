import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NewsItem from './newsItem';
import funImg from '../../images/news/community.png';
import communityImg from '../../images/news/community_2.png';
import bowlingImg from '../../images/news/bowling_2.png';

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
                        title="CLUB CUPS"
                        openingText="The Club Cup is set for 13th September, while the inaugural Ladies Cup will take place on 3rd August."
                        mainText="All members, including social bowlers, are welcome to enter the Club Cup. The Ladies Cup is open to female club members, offering an exciting opportunity to compete."
                        imgSrc={bowlingImg}
                        callback={handleNewsExpand3}
                        expanded={expandNews3}
                    />
                </Col>
                <Col>
                    <NewsItem
                        title="PICNIC IN THE PARK"
                        openingText="Join Friends of Stanningley Park for a fun-filled picnic in the park on 27th July from 11am to 4pm."
                        mainText="The day will be packed with activities, including bowling, walking football, yoga, children's games, and crafts. Live music from local bands will set the tone for a lively day."
                        closingText="Bring your own picnic, soak up the atmosphere, and enjoy a carefree summer afternoon."
                        imgSrc={funImg}
                        callback={handleNewsExpand1}
                        expanded={expandNews1}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default News;
