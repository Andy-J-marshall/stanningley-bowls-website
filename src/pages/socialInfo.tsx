import { useEffect } from 'react';
import socialBowlingImg from '../images/websiteImages/social_bowling2.png';
import groupBowlingImg from '../images/websiteImages/group_bowling.png';
import { config } from '../config';

const { facebookUrl } = config.socialLinks;

function SocialInfo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div
            id="social-info-page"
            className="page-component info-component center"
        >
            <div id="social-info">
                <h1>social bowling</h1>
                <p>
                    Everyone is welcome to come along to one of our regular
                    social bowling sessions during the season. Practise by
                    yourself or find a friend to compete against. Depending on
                    numbers we sometimes play a fun round robin tournament or a
                    game of 'killer' to mix it up. Beginners are welcome to try
                    out crown green bowling, all equipment is provided and one
                    of our members will happily show you how to get started,
                    your first session is completely free.
                </p>
                <p>
                    See the{' '}
                    <a className="link" target="_blank" href={facebookUrl}>
                        Facebook
                    </a>{' '}
                    page for the latest dates and times.
                </p>
                <img
                    style={{ width: '98%', paddingBottom: '1rem' }}
                    src={socialBowlingImg}
                ></img>
                <h2>benefits of crown green bowling</h2>
                <ul>
                    <li>A healthy low impact form of exercise</li>
                    <li>Improves mental health and general wellbeing</li>
                    <li>Exercises the mind with strategic thinking</li>
                    <li>A great way to destress and relax</li>
                    <li>An easy way to socialise and avoid isolation</li>
                    <li>Low cost and minimal equipment required</li>
                    <li>Most importantly, it's fun!</li>
                </ul>
            </div>
            <div id="group-info">
                <h2>group sessions</h2>
                <p>
                    We can offer private use of the green for groups of up to 15
                    people. Crown green bowling is suitable for a wide range of
                    ages and abilities so is the ideal activity for corporate
                    team building, youth clubs or other social events.
                </p>
                <p>
                    Under 18s must be supervised by an adult in the group. All
                    equipment and beginner tuition will be provided.
                </p>
                <p>
                    Please{' '}
                    <a className="link" href="/#/contact">
                        contact
                    </a>{' '}
                    us to discuss availability.
                </p>
                <img style={{ width: '98%' }} src={groupBowlingImg}></img>
            </div>
        </div>
    );
}

export default SocialInfo;
