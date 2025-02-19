import { useEffect } from 'react';
import MembershipDocs from './membershipDocs';
import socialBowlingImg from '../images/websiteImages/social_bowling.png';
import { config } from '../config';

function Membership() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div
            id="membership-page"
            className="page-component info-component center"
        >
            <h1>membership</h1>
            <p>
                {config.teamNames.fullName} welcomes new members of any age or
                experience level including absolute beginners.
            </p>
            <p>
                Membership is valid per season and runs from 1st April until
                30th September. We have two tiers of membership; team or social
                member. Under 16s receive free social membership and half price
                team membership.
            </p>
            <p>
                Please{' '}
                <a className="link" href="/#/contact">
                    contact us
                </a>{' '}
                or speak to a member if you are interested in joining and to
                enquire about our {new Date().getFullYear()} membership fees.
            </p>
            <MembershipDocs />
            <h3>team bowling membership</h3>
            <p>
                For members who want to play in one of our teams and have full
                green access. This includes the annual club membership plus the
                Leeds City Council season fee. If you have already paid your
                annual green fee at another Leeds City Council bowling club then
                you only need to pay the club's membership fee.
            </p>
            <h3>social membership</h3>
            <p>
                For new or infrequent bowlers who want to attend social sessions
                and club tournaments then you can take advantage of our low-cost
                social bowling membership, we also have a special 2+ rate for
                couples or family members that want to sign up together. There
                is no fee for under 16s that wish to join but they must be
                accompanied by an adult during sessions.
            </p>
            <p>
                Free equipment hire is available for social bowling sessions, we
                have bowls suitable for all adults and also children from
                approx. 8 years old. Our members will be happy to show you how
                to get started but we do not offer any official coaching or
                lessons. It is a very simple sport to pick up once you know the
                basics and you can become competent very quickly with regular
                practise.
            </p>
            <img style={{ width: '98%' }} src={socialBowlingImg}></img>
        </div>
    );
}

export default Membership;
