import { useEffect } from 'react';
import MembershipDocs from './membershipDocs';
import socialBowlingImg from '../images/websiteImages/social-bowling.png';
import { config } from '../config';

function Membership() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="members" className="page-component info-component center">
            <h1>membership</h1>
            <p>
                {config.teamNames.fullName} welcomes new members of any age or
                experience level.
            </p>
            <p>
                Fees apply to anyone over 16; children are welcome but must be
                accompanied by an adult member.
            </p>
            <p>
                Membership is valid per season and runs from 1st April until
                30th September.
            </p>
            <p>
                Please{' '}
                <a className="link" href="/#/contact">
                    contact us
                </a>{' '}
                or speak to a member if you are interested in joining.
            </p>
            <MembershipDocs />
            <h3>full bowling membership</h3>
            <p>
                For members who want to play in one of our teams and have full
                green access. This includes the membership fee plus the Leeds
                Council season fee.
            </p>
            <p>
                If you have already paid your annual green fee at another Leeds
                Parks bowling club then you only need to pay the club's
                membership fee.
            </p>
            <h3>social membership</h3>
            <p>
                For new or infrequent bowlers who want to attend social sessions
                and club tournaments.
            </p>
            <p>Free equipment hire is available.</p>
            <img style={{ width: '98%' }} src={socialBowlingImg}></img>
        </div>
    );
}

export default Membership;
