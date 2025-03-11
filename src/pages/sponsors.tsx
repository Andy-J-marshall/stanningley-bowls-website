import { useEffect } from 'react';
import { Image } from 'react-bootstrap';
import joeyLogoImg from '../images/supporters/joey.png';
import vacShackImg from '../images/supporters/vac_shack_pudsey.png';
import floorGuysImg from '../images/supporters/the_floor_guys.png';
import leedsElectricalImg from '../images/supporters/leeds_electrical.png';
import loveLeedsParksImg from '../images/supporters/love_leeds_parks.png';
import heritageFundImg from '../images/supporters/heritage_fund.png';
import easyFundraisingImg from '../images/supporters/easy_fundraising.png';
import howdenInsuranceImg from '../images/supporters/howden_insurance.png';
import { config } from '../config';

const { emailUrl } = config.socialLinks;

function Sponsors() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div
            id="sponsors-page"
            className="center info-component page-component"
        >
            <h1>sponsors</h1>
            <p>
                If you are interested in a sponsorship package, please{' '}
                <a className="link" href="/#/contact">
                    contact us
                </a>{' '}
                for more information.
            </p>
            <hr />

            <h3>leeds electrical distribution</h3>
            <p>
                <a
                    className="link"
                    target="_blank"
                    href="https://leedselectrical.com"
                >
                    Leeds Electrical Distribution
                </a>{' '}
                stock Commercial electrical products and components with a vast
                range of cables and wiring solutions to contractors,
                electricians, and businesses of all sizes to meet their specific
                project requirements.
            </p>
            <a target="_blank" href="https://leedselectrical.com">
                <Image
                    className="sponsors-logos"
                    rounded
                    src={leedsElectricalImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>howden insurance</h3>
            <p>
                <a
                    className="link"
                    target="_blank"
                    href="https://www.howdeninsurance.co.uk"
                >
                    Howden
                </a>{' '}
                do insurance differently. They're not about cookie-cutter,
                off-the-shelf, one-size-fits-all insurance. They do people-first
                insurance, understanding the specifics of your insurance needs
                and match them with the insurer that's best placed to provide
                that cover, at the right price. Personal, tailored, great value
                cover.
            </p>
            <a target="_blank" href="https://www.howdeninsurance.co.uk">
                <Image
                    className="sponsors-logos"
                    rounded
                    src={howdenInsuranceImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>joey sports massage therapy</h3>
            <p>
                If you're suffering due to a sports injury, or your body just
                needs a little TLC, then it's time to get in touch with the team
                at{' '}
                <a
                    className="link"
                    target="_blank"
                    href="https://www.joeysportsmassage.co.uk"
                >
                    Joey Sports Massage Therapy
                </a>
                .
            </p>
            <a target="_blank" href="https://www.joeysportsmassage.co.uk">
                <Image
                    className="sponsors-logos"
                    rounded
                    src={joeyLogoImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>vac shack</h3>
            <p>
                <a
                    className="link"
                    target="_blank"
                    href="http://www.vacshack.co.uk"
                >
                    Vac Shack
                </a>{' '}
                are dedicated to providing high class products and after sale
                service, with 20 years experience supplying quality appliances
                and our installation services.
            </p>
            <a target="_blank" href="http://www.vacshack.co.uk">
                <Image
                    className="sponsors-logos"
                    rounded
                    src={vacShackImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>the floor guys</h3>
            <p>
                <a
                    className="link"
                    target="_blank"
                    href="https://www.thefloorguys.net"
                >
                    The Floor Guys
                </a>{' '}
                have a well earned name as leading flooring installers; offering
                affordable, competitive and honest prices. With the two owners
                having over 40 years experience in fitting, they promise the
                journey from picking your new floor covering all the way through
                to fitting and aftercare will be seamless and worry free.
            </p>
            <a target="_blank" href="https://www.thefloorguys.net">
                <Image
                    className="sponsors-logos"
                    rounded
                    src={floorGuysImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>love leeds parks</h3>
            <p>
                Love Leeds Parks is part of a growing network of UK parks
                foundations. As a registered charity they support improvements
                to public parks and green spaces in Leeds, for the benefit of
                all residents and visitors to the city.
            </p>
            <a target="_blank" href="https://loveleedsparks.org.uk">
                <Image
                    className="sponsors-logos"
                    rounded
                    src={loveLeedsParksImg}
                    fluid
                ></Image>
            </a>
            <a target="_blank" href="https://www.heritagefund.org.uk">
                <Image
                    className="sponsors-logos"
                    rounded
                    src={heritageFundImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>easy fundraising</h3>
            <p>
                You can support the club by doing your online shopping through{' '}
                <a
                    className="link"
                    target="_blank"
                    href="https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=362452&invite=7sk19t&referral-campaign=s2s&utm_campaign=web-referral"
                >
                    Easy Fundraising
                </a>
                . The club will gain cashback for every purchase you make at no
                extra cost to you.
            </p>
            <a
                target="_blank"
                href="https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=362452&invite=7sk19t&referral-campaign=s2s&utm_campaign=web-referral"
            >
                <Image
                    className="sponsors-logos"
                    rounded
                    src={easyFundraisingImg}
                    fluid
                ></Image>
            </a>
        </div>
    );
}

export default Sponsors;
